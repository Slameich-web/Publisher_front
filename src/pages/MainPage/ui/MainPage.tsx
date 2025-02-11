import { RowsType } from '../../../shared/types/types';
import { JournalTable } from '../../../widgets/journalTable';

const MainPage = () => {
  const rows: RowsType[] = [
    {
      id: 1,
      name: 'Lannister',
      topic: 'Cersei asda sdasdasd asdas dasd asdasdasd asdasd',
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
  return (
    <div>
      <JournalTable tableData={rows} title={'Title'} />
    </div>
  );
};

export default MainPage;
