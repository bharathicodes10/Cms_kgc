import React from "react";

import CrudModule from "@/modules/CrudModule";

import BudgetForm from "@/forms/BudgetForm";

function Budget() {
  const entity = "Budget";
  const searchConfig = {
    displayLabels: ["projectName"],
    searchFields: "projectName",
    outputValue: "_id",
  };

  const panelTitle = "Budget Panel";
  const dataTableTitle = "Budget Lists";
  const entityDisplayLabels = ["projectName"];

  const readColumns = [
    {
      title: "projectName",
      dataIndex: "projectName",
    },
    {
      title: "Totalsqft",
      dataIndex: "totalsqft",
    },
    {
      title: "price",
      dataIndex: "price",
    },
    {
        title: "steelPrice",
        dataIndex: "steelPrice",
      },
      {
        title: "Msand",
        dataIndex: "mSand",
      },
      {
        title: "Csand",
        dataIndex: "cSand",
      },
      {
        title: "bricks",
        dataIndex: "bricks",
      },
      {
        title: "concretem3",
        dataIndex: "concretem3",
      },
      {
        title: "frames",
        dataIndex: "frames",
      },
      {
        title: "doorsAndWindows",
        dataIndex: "doorsAndWindows",
      },
      {
        title: "plumbing",
        dataIndex: "plumbing",
      },
      {
        title: "electrical",
        dataIndex: "electrical",
      },
      {
        title: "painting",
        dataIndex: "painting",
      },
  ];
  const dataTableColumns = [
    {
        title: "projectName",
        dataIndex: "projectName",
      },
      {
        title: "totalSqft",
        dataIndex: "totalsqft",
      },
      {
        title: "price",
        dataIndex: "price",
      },
      
  ];

  const ADD_NEW_ENTITY = "Add new budget";
  const DATATABLE_TITLE = "Budgets List";
  const ENTITY_NAME = "article";
  const CREATE_ENTITY = "Create a budget";
  const UPDATE_ENTITY = "Update a budget";
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
      createForm={<BudgetForm />}
      updateForm={<BudgetForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Budget;
