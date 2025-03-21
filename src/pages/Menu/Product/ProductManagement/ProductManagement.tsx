import React from "react";
import Header from "../../../../components/Header/Header";
import { FiPlus } from "react-icons/fi";

const ProductManagement: React.FC = () => {
  return (
    <div>
      <Header
        modelWidth="40%"
        modelTitle="Product Manage"
        buttonTitle="Add Product Management"
        buttonIcon={<FiPlus />}
      >
        {/* <ProductCompantForm /> */}
        <div>saxasx</div>
      </Header>
    </div>
  );
};

export default ProductManagement;
