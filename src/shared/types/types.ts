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

export interface RowsType {
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
