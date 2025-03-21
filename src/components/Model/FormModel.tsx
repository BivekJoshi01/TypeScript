import React, { ReactNode, useState } from "react";

interface FormModelProps {
  open: boolean;
  children: ReactNode;
  width?: string;
  modelTitle?: string
}

const FormModel: React.FC<FormModelProps> = ({ open, children, width = "50%", modelTitle }) => {
  const [isShaking, setIsShaking] = useState(false);

  if (!open) return null;

  const handleOutsideClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-stone-950/50 z-10 "
      onClick={handleOutsideClick}
    >
      <div
        className={`bg-white w-full rounded-lg shadow-lg p-4 transition ${isShaking ? "shake" : ""
          }`}
        style={{ width }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-center items-center border-b pb-2 border-stone-300">
          {modelTitle}
        </div>

        {/* Content */}
        <div className="py-1">
          {children}
        </div>
      </div>

      {/* Custom Shake Animation */}
      <style>
        {`
          @keyframes shake {
            0% { transform: translate(0, 0); }
            20% { transform: translate(-5px, 5px); }
            40% { transform: translate(5px, -5px); }
            60% { transform: translate(-5px, 5px); }
            80% { transform: translate(5px, -5px); }
            100% { transform: translate(0, 0); }
          }
          .shake {
            animation: shake 0.5s ease-in-out;
          }
        `}
      </style>
    </div>
  );
};

export default FormModel;
