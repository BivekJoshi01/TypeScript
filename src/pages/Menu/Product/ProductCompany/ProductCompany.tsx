import React, { useState } from "react";
import Header from "../../../../components/Header/Header";
import ProductCompantForm from "./ProductCompantForm";
import { FiPlus } from "react-icons/fi";
import CustomTable from "../../../../components/CustomTable/CustomTable";

const ProductCompany: React.FC = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <>
      <div>
        <Header
          modelWidth="40%"
          modelTitle="Product Company"
          buttonTitle="Add Product Company"
          buttonIcon={<FiPlus />}
          openModel={openModel}
          setOpenModel={setOpenModel}
        >
          <ProductCompantForm onClose={() => setOpenModel(false)} />
        </Header>
      </div>
      <CustomTable columns={[]} data={[]}/>
    </>
  );
};

export default ProductCompany;
