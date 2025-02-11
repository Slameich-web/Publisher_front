import { Table } from '../../../entities/table';
import { Typography } from '@mui/material';
import { RowsType } from '../../../shared/types/types';
import styles from './JournalTable.module.scss';

interface JournalTableProps {
  tableData: RowsType[];
  title: string;
}

const JournalTable = ({ tableData, title }: JournalTableProps) => {
  return (
    <div className={styles.container}>
      <Typography className={styles.title} color="secondary" variant="h4">
        {title}
      </Typography>
      <Table tableData={tableData} />
    </div>
  );
};

export default JournalTable;
