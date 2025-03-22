import React, { useState } from "react";
import Header from "../../../../components/Header/Header";
import { FiPlus } from "react-icons/fi";
import ProductGroupForm from "./ProductGroupForm";

const ProductGroup: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div>
      <Header
        modelWidth="40%"
        modelTitle="Product Company"
        buttonTitle="Add Product Company"
        buttonIcon={<FiPlus />}
        openModel={openModel}
        setOpenModel={setOpenModel}
      >
        <ProductGroupForm onClose={() => setOpenModel(false)} />
      </Header>
    </div>
  );
};

export default ProductGroup;
