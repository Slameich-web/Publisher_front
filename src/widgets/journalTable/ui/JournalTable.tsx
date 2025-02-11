import React from 'react';
import { Table } from '../../../entities/table';
import { Typography } from '@mui/material';
import { RowsType } from '../../../shared/types/types';

interface JournalTableProps {
  tableData: RowsType[];
  title: string;
}

const JournalTable = ({ tableData, title }: JournalTableProps) => {
  return (
    <div>
      <Typography>{title}</Typography>
      <Table tableData={tableData} />
    </div>
  );
};

export default JournalTable;
