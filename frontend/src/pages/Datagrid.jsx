import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    {field: 'id', headerName:'id', editable: 'never'},
    {field: 'articleName', headerName:'articleName',  valueGetter: (params) => {
      return params.getValue(params.id, "articleName").name;
    }},
    {field: 'vendorName', headerName:'vendorName', editable: 'onUpdate'},
    {field: 'dept', headerName:'dept', editable: 'never'},
    {field: 'price', headerName:'price', editable: 'onUpdate'},
    
    // {field: 'createdAt', headerName:'createdAt', editable: 'never'},
]

const Datagrid = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("http://localhost:8888/api/inventory/list")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={4}
      />
     
    </div>
  ); console.log(rows)
}

export default Datagrid