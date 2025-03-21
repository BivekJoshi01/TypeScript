import React, { useState, useEffect, ReactNode } from "react";
import FormModel from "../Model/FormModel";

interface HeaderProps {
  children: ReactNode;
  modelWidth?: string;
  modelTitle?: string;
  buttonTitle?: string;
  buttonIcon?: ReactNode;
  openModel: boolean;
  setOpenModel: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  children,
  modelWidth,
  modelTitle,
  buttonTitle,
  buttonIcon,
  openModel,
  setOpenModel
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
        <div className="flex items-center justify-between p-0.5">
          <div>
            <span className="text-sm font-bold block">
              Universal Stationery Suppliers
            </span>
            <span className="text-xs block text-stone-500">
              Home -- Customer
            </span>
          </div>
          <div className="text-sm  text-green-500">
            {time.toLocaleTimeString()}
          </div>
          <button
            className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded"
            onClick={() => setOpenModel(true)}
          >
            {buttonIcon} <span>{buttonTitle}</span>
          </button>
        </div>
      </div>
      {openModel && (
        <FormModel
          open={openModel}
          width={modelWidth}
          modelTitle={modelTitle}
        >
          {children}
        </FormModel>
      )}
    </>
  );
};

export default Header;
