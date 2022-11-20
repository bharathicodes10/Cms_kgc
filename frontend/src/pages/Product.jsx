import React from "react";

import CrudModule from "@/modules/CrudModule";
import ProductForm from "@/forms/ProductForm";

function Product() {
  const entity = "product";
  const searchConfig = {
    displayLabels: ["productName"],
    searchFields: "productName",
    outputValue: "_id",
  };

  const panelTitle = "Project Panel";
  const dataTableTitle = "Projects List";
  const entityDisplayLabels = ["productName"];

  const readColumns = [
    {
      title: "Project Name",
      dataIndex: "productName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Budget",
      dataIndex: "price",
    },
  ];
  const dataTableColumns = [
    {
      title: "Project Name",
      dataIndex: "productName",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Budget",
      dataIndex: "price",
    },
    {
      title: "status",
      dataIndex: "status",
    },
  ];

  const ADD_NEW_ENTITY = "Add new project";
  const DATATABLE_TITLE = "products List";
  const ENTITY_NAME = "product";
  const CREATE_ENTITY = "Create product";
  const UPDATE_ENTITY = "Update product";
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
      createForm={<ProductForm />}
      updateForm={<ProductForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Product;
