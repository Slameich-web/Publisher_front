import { DataGrid, GridColDef } from '@mui/x-data-grid';

type ChiefEditorType =
  | 'Ready'
  | 'In_Process'
  | 'Not_Ready_And_In_Stock'
  | 'Not_Ready_And_Ordered';
type ScienceEditorType = 'Ready' | 'In_Process' | 'Not_Ready';
type AuthorCoordinationType = 'Ready' | 'In_Process' | 'Not_Ready';
type CorrectorType = 'Ready' | 'In_Process' | 'Not_Ready';
type PageProofsType = 'Ready' | 'Not_Ready';
type DummyType = 'Ready' | 'Not_Ready';

interface RowsType {
  id: number;
  name: string;
  topic: string;
  pages: number;
  firstPage: number;
  lastPage: number;
  chiefEditor: ChiefEditorType;
  scienceEditor: ScienceEditorType;
  authorCoordination: AuthorCoordinationType;
  corrector: CorrectorType;
  pageProofs: PageProofsType;
  dummy: DummyType;
}

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

interface TableProps {
  tableData: RowsType[];
}
const Table = ({ tableData }: TableProps) => {
  return (
    <DataGrid
      rows={tableData}
      columns={columns}
      pageSizeOptions={[5, 10]}
      checkboxSelection
      sx={{ border: 0 }}
    />
  );
};

export default Table;
