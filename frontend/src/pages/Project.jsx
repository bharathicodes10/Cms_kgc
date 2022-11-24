import React from "react";

import CrudModule from "@/modules/CrudModule";
import ProjectsForm from "@/forms/ProjectsForm";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

function Projects() {
  const entity = "project";
  const searchConfig = {
    displayLabels: ["projectName"],
    searchFields: "projectName",
    outputValue: "_id",
  };

  const panelTitle = "Project Panel";
  const dataTableTitle = "Projects List";
  const entityDisplayLabels = ["projectName"];

  const readColumns = [
    {
      title: "Project Name",
      dataIndex: "projectName",
    },
    {
      title: "address",
      dataIndex: "address",
    },
    {
        title: "totalSqft",
        dataIndex: "totalSqft",
    },
    {
        title: "clientName",
        dataIndex: "clientName",
      },
      {
        title: "leadName",
        dataIndex: "leadName",
      },
    {
      title: "Budget",
      dataIndex: "budget",
    },
    {
        title: "startedOn",
        dataIndex: "startedOn",
      },
      {
        title: "completedOn",
        dataIndex: "completedOn",
      },
  ];
  const dataTableColumns = [
    {
        title: "Project Name",
        dataIndex: "projectName",
      },
      {
        title: "address",
        dataIndex: "address",
      },
    //   {
    //       title: "totalSqft",
    //       dataIndex: "totalSqft",
    //   },
      {
          title: "clientName",
          dataIndex: "clientName",
        },
        // {
        //   title: "leadName",
        //   dataIndex: "leadName",
        // },
      {
        title: "Budget",
        dataIndex: "budget",
      },
    //   {
    //     title: "startedOn",
    //     dataIndex: "startedOn",
    //   },
      {
        title: "completedOn",
        dataIndex: "completedOn",
      },
  ];

  const ADD_NEW_ENTITY = "Add new project";
  const DATATABLE_TITLE = "projects List";
  const ENTITY_NAME = "project";
  const CREATE_ENTITY = "Create project";
  const UPDATE_ENTITY = "Update project";
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
    <>
    
    <CrudModule
      createForm={<ProjectsForm />}
      updateForm={<ProjectsForm isUpdateForm={true} />}
      config={config}
    /></>
  );
}

export default Projects;
