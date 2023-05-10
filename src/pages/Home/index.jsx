import React from 'react';
import styles from './Home.module.scss';
import { Container, Button, Typography } from '@mui/material';

export default function Home() {
  return (
    <Container>
      <div className={styles.homeWrapper}>
        <div className={styles.title}>
          <Typography variant="h5" color="initial">
            Fintech application
          </Typography>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <Button variant="text" color="primary" size="large">
              Cash Flow
            </Button>
          </li>
          <li className={styles.menuItem}>
            <Button variant="text" color="primary" size="large">
              Модель Остервальдера
            </Button>
          </li>
          <li className={styles.menuItem}>
            <Button variant="text" color="primary" size="large">
              Kanban Board
            </Button>
          </li>
        </ul>
        <div className={styles.footer}>
          <Typography variant="subtitle1" color="GrayText" fontSize={14}>
            Прототип приложения для автоматизации бизнес-процессов малых
            предприятий
          </Typography>
          <Typography
            variant="subtitle1"
            color="GrayText"
            fontSize={12}
            marginTop={2}
          >
            Developed by Fintech
          </Typography>
        </div>
      </div>
    </Container>
  );
}
