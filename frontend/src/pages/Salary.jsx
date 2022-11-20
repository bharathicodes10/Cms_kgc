import React from "react";

import CrudModule from "@/modules/CrudModule";
import SalaryForm from "@/forms/SalaryForm";


function Salary() {
  const entity = "salary";
  const searchConfig = {
    displayLabels: ["laborerName"],
    searchFields: "laborerName",
    outputValue: "_id",
  };

  const panelTitle = "Salary Panel";
  const dataTableTitle = "Salary Lists";
  const entityDisplayLabels = ["laborerName"];

  const readColumns = [
    {
      title: "laborerName",
      dataIndex: "laborerName",
    },
    // {
    //   title: "projectName",
    //   dataIndex: "projectName",
    // },
    {
      title: "totalSqft",
      dataIndex: "totalSqft",
    },
    {
        title: "weeklyPay",
        dataIndex: "weeklyPay",
      },
      {
        title: "hourlyPay",
        dataIndex: "hourlyPay",
      },
      {
        title: "salary",
        dataIndex: "salary",
      },
  ];
  const dataTableColumns = [
    {
        title: "laborerName",
        dataIndex: "laborerName",
      },
      {
        title: "projectName",
        dataIndex: "projectName",
      },
      {
        title: "totalSqft",
        dataIndex: "totalSqft",
      },
      {
          title: "weeklyPay",
          dataIndex: "weeklyPay",
        },
       
        {
          title: "salary",
          dataIndex: "salary",
        },
   
  ];

  const ADD_NEW_ENTITY = "Add new laborer";
  const DATATABLE_TITLE = "Salary List";
  const ENTITY_NAME = "laborer";
  const CREATE_ENTITY = "Create Salary";
  const UPDATE_ENTITY = "Update Salary";
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
      createForm={<SalaryForm />}
      updateForm={<SalaryForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Salary;
