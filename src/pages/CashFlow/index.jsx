import React from 'react';
import Spreadsheet from 'react-spreadsheet';
import styles from './CashFlow.module.scss';
import AddIcon from '@mui/icons-material/Add';
import { Button, Container, Typography } from '@mui/material';
import { Footer } from '../../modules/Footer';

export function CashFlow() {
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState([
    [
      { value: 'Дата (Когда)', readOnly: true },
      { value: 'Наименование (куда ?)', readOnly: true },
      { value: 'Дебет/Кредит (Сколько?)', readOnly: true },
    ],
    [{}],
  ]);

  const handleCellChange = (prevCell, { value }, currentCellCoords) => {
    if (!currentCellCoords) {
      return;
    }

    const newData = [...data];

    newData[currentCellCoords.row][currentCellCoords.column] = { value: value };

    if (
      newData[currentCellCoords.row][currentCellCoords.column].value !== value
    ) {
      newData[currentCellCoords.row][currentCellCoords.column] = {
        value: value,
      };
      setData(newData);
    }

    const columnData = data.slice(1).map((row) => row[2]?.value);

    const sum = columnData.reduce((acc, val) => acc + parseFloat(val || 0), 0);
    setTotal(sum);
  };

  const addRow = () => {
    const newRow = [{}];

    setData((prevData) => {
      return [...prevData, newRow];
    });
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.cashFlowWrapper}>
        <Typography variant="h5" color="gray" marginBottom={5}>
          Таблица Cash Flow
        </Typography>

        <div className={styles.spreadsheetWrapper}>
          <div className={styles.tableBarWrapper}>
            <Button
              onClick={() => addRow()}
              variant="outlined"
              startIcon={<AddIcon />}
            >
              Добавить
            </Button>

            <Typography variant="subtitle1" color="gray">
              Итог: <span className="primaryText">{total}</span>
            </Typography>
          </div>

          <Spreadsheet data={data} onCellCommit={handleCellChange} />
        </div>
      </div>

      <Footer />
    </Container>
  );
}
