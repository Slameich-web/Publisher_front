import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'topic', headerName: 'topic', width: 130 },
  { field: 'name', headerName: 'name', width: 130 },
  {
    field: 'pages',
    headerName: 'pages',
    type: 'number',
    width: 90,
  },
  { field: 'firstPage', headerName: 'firstPage', width: 80 },
  { field: 'lastPage', headerName: 'lastPage', width: 80 },
  { field: 'chiefEditor', headerName: 'chiefEditor', width: 130 },
  { field: 'scienceEditor', headerName: 'scienceEditor', width: 130 },
  { field: 'authorCoordination', headerName: 'authorCoordination', width: 130 },
  { field: 'corrector', headerName: 'corrector', width: 130 },
  { field: 'pageProofs', headerName: 'pageProofs', width: 130 },
  { field: 'dummy', headerName: 'dummy', width: 130 },
];

const rows = [
  {
    id: 1,
    name: 'Lannister',
    topic: 'Cersei',
    pages: 42,
    firstPage: 1,
    lastPage: 2,
    chiefEditor: 'Ready',
    scienceEditor: 'Not_Ready',
    authorCoordination: 'Not_Ready',
    corrector: 'Not_Ready',
    pageProofs: 'Not_Ready',
    dummy: 'Not_Ready',
  },
  {
    id: 2,
    name: 'Lannister',
    topic: 'Cersei',
    pages: 42,
    firstPage: 1,
    lastPage: 2,
    chiefEditor: 'Ready',
    scienceEditor: 'Not_Ready',
    authorCoordination: 'Not_Ready',
    corrector: 'Not_Ready',
    pageProofs: 'Not_Ready',
    dummy: 'Not_Ready',
  },
];

const Table = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  );
};

export default Table;
