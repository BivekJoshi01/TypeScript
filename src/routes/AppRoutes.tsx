// AppRoutes.tsx
import React from "react";
import { HashRouter, Route, Routes } from "react-router";
import LandingLayout from "../layout/LandingLayout";
// import AdminDashboard from '../pages/Dashboard/AdminDashboard';
import AdminPageLayout from "../layout/AdminPageLayout";
import AdminDashboard from "../pages/Menu/Home/Dashbaord/AdminDashboard";
import PurchaseInvoice from "../pages/Menu/Purchase/PurchaseInvoice/PurchaseInvoice";
import PurchaseReturn from "../pages/Menu/Purchase/PurchaseReturn/PurchaseReturn";
import SalesInvoice from "../pages/Menu/Sales/SalesInvoice/SalesInvoice";
import SalesReturn from "../pages/Menu/Sales/SalesReturn/SalesReturn";
import Warehouse from "../pages/Setting/WareHouse/Warehouse";
import StockEntry from "../pages/Setting/StockEntry/StockEntry";
import OpeningStock from "../pages/Setting/OpeningStock/OpeningStock";
import SupplierOtherParty from "../pages/Menu/Customer/SupplierOtherParty/SupplierOtherParty";

// ---------------------------------------------------------------------------------------
import ProductManagement from "../pages/Menu/Product/ProductManagement/ProductManagement";
import ProductCompany from "../pages/Menu/Product/ProductCompany/ProductCompany";
import ProductGroup from "../pages/Menu/Product/ProductGroup/ProductGroup";
import UnitOfMeasurement from "../pages/Menu/Product/UnitOfMeasurement/UnitOfMeasurement";
// ------------------------------------------------------------------------------------------



const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<LandingLayout />} />

        {/* Admin routes */}
        <Route path="/admin" element={<AdminPageLayout />}>
          <Route path="menu">
            <Route path="Home" element={<AdminDashboard />} />
            <Route path="Customer/Suppliers">
              <Route path="Supplier/ Other Party" element={<SupplierOtherParty />} />
              <Route path="Customer" element={<PurchaseReturn />} />
              <Route path="Area" element={<PurchaseReturn />} />
              <Route path="Agent" element={<PurchaseReturn />} />
            </Route>
            <Route path="Product">
              <Route path="Product Management" element={<ProductManagement />} />
              <Route path="Product Company" element={<ProductCompany />} />
              <Route path="Product Group" element={<ProductGroup />} />
              <Route path="Unit of Measurement" element={<UnitOfMeasurement />} />
            </Route>
            <Route path="Purchase">
              <Route path="Invoice" element={<PurchaseInvoice />} />
              <Route path="Return" element={<PurchaseReturn />} />
            </Route>
            <Route path="Sales">
              <Route path="Invoice" element={<SalesInvoice />} />
              <Route path="Return" element={<SalesReturn />} />
            </Route>
          </Route>
          <Route path="settings">
            <Route path="Warehouse" element={<Warehouse />} />
            <Route path="Stock Entry" element={<StockEntry />} />
            <Route path="Opening Stock" element={<OpeningStock />} />
          </Route>
          <Route path="analytics">
            <Route path="Account"  >
              <Route path="Day Book" element={<Warehouse />} />
              <Route path="Cash Bank Book" element={<Warehouse />} />
              <Route path="Account Ledger" element={<Warehouse />} />
              <Route path="Account Ledger Summary" element={<Warehouse />} />
              <Route path="Trial Balance" element={<Warehouse />} />
              <Route path="Trial Balance Periodic" element={<Warehouse />} />
              <Route path="Profit and Loss" element={<Warehouse />} />
              <Route path="Profit and Loss Periodic" element={<Warehouse />} />
              <Route path="Balance Sheet" element={<Warehouse />} />
              <Route path="Opening Balance" element={<Warehouse />} />
            </Route>
            <Route path="Documents" >
              <Route path="Journal Voucher" element={<Warehouse />} />
              <Route path="Receive Payment Voucher" element={<Warehouse />} />
              <Route path="Debit Note" element={<Warehouse />} />
              <Route path="Credit Note" element={<Warehouse />} />
            </Route>
            <Route path="Chart Of Accounts" >
              <Route path="Account Head" element={<Warehouse />} />
              <Route path="Account Group" element={<Warehouse />} />
            </Route>
          </Route>
          <Route path="others">
            <Route path="Utilities">
              <Route path="Customer Balance Confirmation" element={<Warehouse />} />
              <Route path="Import" element={<Warehouse />} />
              <Route path="Enter Log" element={<Warehouse />} />
            </Route>
            <Route path="Setup">
              <Route path="Company Details" element={<Warehouse />} />
              <Route path="Branch" element={<Warehouse />} />
              <Route path="Bill of Materials" element={<Warehouse />} />
              <Route path="Configuration" element={<Warehouse />} />
              <Route path="Organization Management" element={<Warehouse />} />
              <Route path="Site Configuration" element={<Warehouse />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
