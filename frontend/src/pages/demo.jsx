import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'projectName', headerName: 'Project Name', width: 130 },
  { field: 'address', headerName: 'Address', width: 130 },
  {
    field: 'age',
    headerName: 'Budget',
    type: 'number',
    width: 90,
  },
  {
    field: 'clientName',
    headerName: 'Client Name',
    width: 120,
  },
  {
    field: 'completedAt',
    headerName: 'Completed At',
    type: 'date',
    width: 120,
  },
];

const rows = [
  { id: 1, address: 'Rainbow Villas, Avinashi', projectName: 'Villa-18', age: 2850000,clientName:"Mithra", completedAt:"11/08/2022" },
  { id: 2, address: 'Rainbow Villas, Avinashi', projectName: 'Villa-3', age: 7500000,clientName:"Rajagopal",completedAt:"12/10/2022"},
  { id: 3, address: 'RP Villa,Coimbatore', projectName: 'Villa-20', age: 2700000,clientName:"Sunil" ,completedAt:"09/14/2022"},
  { id: 4, address: 'Rainbow Villas, Avinashi', projectName: 'Villa-11', age: 2500000,clientName:"Mohan",completedAt:"05/29/2023" },
  { id: 5, address: 'RP Villa,Coimbatore', projectName: 'Villa-5', age: 4500000,clientName:"Manohar",completedAt:"11/01/2022" },
  { id: 6, address: 'RP Villa,Coimbatore', projectName: 'Villa-10', age: 2500000,clientName:"Abhirami",completedAt:"11/24/2022" },
  { id: 7, address: 'Simple Villas, Thudiyalur', projectName: 'Villa-7', age: 3700000,clientName:"Nethra",completedAt:"10/22/2022" },
  { id: 8, address: 'Simple Villas, Thudiyalur', projectName: 'Villa-1', age: 5000000,clientName:"Vanthana",completedAt:"-"},
  { id: 9, address: 'Rainbow Villas, Avinashi', projectName: 'Villa-2', age: 2400000,clientName:"Mithun Kumar",completedAt:"-" },
];

export default function DataTable() {
  const style1 = { "font-size": "30px" };
  const style2 = { "text-align": "center" };
  const style3 = { "color": "#24bbed" };
  return (
    <>
    <h1 style={{ ...style1, ...style2,...style3 }}>Projects</h1>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div></>
  );
}