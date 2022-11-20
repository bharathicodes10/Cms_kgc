import React from "react";

import CrudModule from "@/modules/CrudModule";
import InventoryForm from "@/forms/InventoryForm";

function Inventory() {
  const entity = "inventory";
  const searchConfig = {
    displayLabels: ["articleName"],
    searchFields: "articleName",
    outputValue: "_id",
  };

  const panelTitle = "inventory Panel";
  const dataTableTitle = "inventory Lists";
  const entityDisplayLabels = ["articleName"];

  const readColumns = [
    {
      title: "articleName",
      dataIndex: "articleName",
    },
    {
      title: "vendorName",
      dataIndex: "vendorName",
    },
    {
      title: "purchaseuom",
      dataIndex: "purchaseuom",
    },
    {
        title: "stockuom",
        dataIndex: "stockuom",
      },
      {
        title: "dept",
        dataIndex: "dept",
      },
      {
        title: "price",
        dataIndex: "price",
      },
  ];
  const dataTableColumns = [
    {
        title: "articleName",
        dataIndex: "articleName",
      },
      {
        title: "vendorName",
        dataIndex: "vendorName",
      },
      // {
      //   title: "purchaseuom",
      //   dataIndex: "purchaseuom",
      // },
      {
          title: "stockuom",
          dataIndex: "stockuom",
        },
        {
          title: "dept",
          dataIndex: "dept",
        },
        {
          title: "price",
          dataIndex: "price",
        },
    {
      title: "status",
      dataIndex: "status",
    },
  ];

  const ADD_NEW_ENTITY = "Add new article";
  const DATATABLE_TITLE = "inventory List";
  const ENTITY_NAME = "article";
  const CREATE_ENTITY = "Create inventory";
  const UPDATE_ENTITY = "Update inventory";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<InventoryForm />}
      updateForm={<InventoryForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Inventory;
