import React from 'react';
import Spreadsheet from 'react-spreadsheet';
import styles from './CashFlow.module.scss';
import { Container, Typography } from '@mui/material';

export function CashFlow() {
  const data = [
    [
      { value: 'Дата (Когда)' },
      { value: 'Наименование (куда ?)' },
      { value: 'Дебет/Кредит (Сколько?)' },
    ],
    [{ value: '17.02.2022' }, { value: 'Налог на прибыль' }, { value: '-100' }],
    [
      { value: '25.02.2022' },
      { value: 'Вырычка с продажи товара' },
      { value: '200' },
    ],
  ];
  return (
    <Container maxWidth="lg">
      <div className={styles.cashFlowWrapper}>
        <Typography variant="h5" color="gray" marginBottom={5}>
          Таблица Cash Flow
        </Typography>
        <Spreadsheet data={data} />
      </div>
    </Container>
  );
}
