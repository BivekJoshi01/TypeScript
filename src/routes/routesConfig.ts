// routesConfig.ts
import React from "react";
import LandingLayout from "../layout/LandingLayout";
import AdminPageLayout from "../layout/AdminPageLayout";
import AdminDashboard from "../pages/Menu/Home/Dashbaord/AdminDashboard";
import PurchaseInvoice from "../pages/Menu/Purchase/PurchaseInvoice/PurchaseInvoice";
import PurchaseReturn from "../pages/Menu/Purchase/PurchaseReturn/PurchaseReturn";
import SalesInvoice from "../pages/Menu/Sales/SalesInvoice/SalesInvoice";
import SalesReturn from "../pages/Menu/Sales/SalesReturn/SalesReturn";
import Warehouse from "../pages/Setting/WareHouse/Warehouse";
import StockEntry from "../pages/Setting/StockEntry/StockEntry";
import OpeningStock from "../pages/Setting/OpeningStock/OpeningStock";

export const routesConfig = [
  {
    path: "/",
    element: LandingLayout ,
  },
  {
    path: "/admin",
    element: AdminPageLayout ,
    children: [
      {
        path: "menu",
        children: [
          {
            path: "Home",
            element: AdminDashboard ,
          },
          {
            path: "Customer/Suppliers",
            children: [
              {
                path: "Supplier/ Other Party",
                element: PurchaseInvoice ,
              },
              {
                path: "Customer",
                element: PurchaseReturn ,
              },
              {
                path: "Area",
                element: PurchaseReturn ,
              },
              {
                path: "Agent",
                element: PurchaseReturn ,
              },
            ],
          },
          {
            path: "Product",
            element: PurchaseReturn,
          },
          {
            path: "Purchase",
            children: [
              {
                path: "Invoice",
                element: PurchaseInvoice ,
              },
              {
                path: "Return",
                element: PurchaseReturn ,
              },
            ],
          },
          {
            path: "Sales",
            children: [
              {
                path: "Invoice",
                element: SalesInvoice ,
              },
              {
                path: "Return",
                element: SalesReturn ,
              },
            ],
          },
        ],
      },
      {
        path: "settings",
        children: [
          {
            path: "Warehouse",
            element: Warehouse ,
          },
          {
            path: "Stock Entry",
            element: StockEntry ,
          },
          {
            path: "Opening Stock",
            element: OpeningStock ,
          },
        ],
      },
      {
        path: "analytics",
        children: [
          {
            path: "Account",
            children: [
              {
                path: "Day Book",
                element: Warehouse ,
              },
              {
                path: "Cash Bank Book",
                element: Warehouse ,
              },
              {
                path: "Account Ledger",
                element: Warehouse ,
              },
              {
                path: "Account Ledger Summary",
                element: Warehouse ,
              },
              {
                path: "Trial Balance",
                element: Warehouse ,
              },
              {
                path: "Trial Balance Periodic",
                element: Warehouse ,
              },
              {
                path: "Profit and Loss",
                element: Warehouse ,
              },
              {
                path: "Profit and Loss Periodic",
                element: Warehouse ,
              },
              {
                path: "Balance Sheet",
                element: Warehouse ,
              },
              {
                path: "Opening Balance",
                element: Warehouse ,
              },
            ],
          },
          {
            path: "Documents",
            children: [
              {
                path: "Journal Voucher",
                element: Warehouse ,
              },
              {
                path: "Receive Payment Voucher",
                element: Warehouse ,
              },
              {
                path: "Debit Note",
                element: Warehouse ,
              },
              {
                path: "Credit Note",
                element: Warehouse ,
              },
            ],
          },
          {
            path: "Chart Of Accounts",
            children: [
              {
                path: "Account Head",
                element: Warehouse ,
              },
              {
                path: "Account Group",
                element: Warehouse ,
              },
            ],
          },
        ],
      },
      {
        path: "others",
        children: [
          {
            path: "Utilities",
            children: [
              {
                path: "Customer Balance Confirmation",
                element: Warehouse ,
              },
              {
                path: "Import",
                element: Warehouse ,
              },
              {
                path: "Enter Log",
                element: Warehouse ,
              },
            ],
          },
          {
            path: "Setup",
            children: [
              {
                path: "Company Details",
                element: Warehouse ,
              },
              {
                path: "Branch",
                element: Warehouse ,
              },
              {
                path: "Bill of Materials",
                element: Warehouse ,
              },
              {
                path: "Configuration",
                element: Warehouse ,
              },
              {
                path: "Organization Management",
                element: Warehouse ,
              },
              {
                path: "Site Configuration",
                element: Warehouse ,
              },
            ],
          },
        ],
      },
    ],
  },
];