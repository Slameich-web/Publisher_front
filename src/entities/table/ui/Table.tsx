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
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'topic', headerName: 'topic', width: 240 },
  { field: 'name', headerName: 'name', width: 160 },
  { field: 'pages', headerName: 'pages', width: 60 },
  { field: 'firstPage', headerName: 'firstPage', width: 80 },
  { field: 'lastPage', headerName: 'lastPage', width: 80 },
  { field: 'chiefEditor', headerName: 'chiefEditor', width: 120 },
  { field: 'scienceEditor', headerName: 'scienceEditor', width: 120 },
  { field: 'authorCoordination', headerName: 'authorCoordination', width: 160 },
  { field: 'corrector', headerName: 'corrector', width: 120 },
  { field: 'pageProofs', headerName: 'pageProofs', width: 120 },
  { field: 'dummy', headerName: 'dummy', width: 120 },
];

interface TableProps {
  tableData: RowsType[];
}
const Table = ({ tableData }: TableProps) => {
  return (
    <div style={{ marginLeft: '24px', marginRight: '24px' }}>
      <DataGrid
        className="MuiDataGrid-autoHeight"
        showColumnVerticalBorder
        hideFooterPagination
        disableMultipleRowSelection
        disableColumnSorting
        disableColumnMenu
        hideFooterSelectedRowCount
        rows={tableData}
        columns={columns}
      />
    </div>
  );
};

export default Table;
