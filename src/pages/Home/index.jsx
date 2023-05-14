import React from 'react';
import styles from './Home.module.scss';
import { Container, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Footer } from '../../modules';

export function Home() {
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
            <Link to="/cash-flow">
              <Button variant="text" color="primary" size="large">
                Cash Flow
              </Button>
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link to="/osterwalder-model">
              <Button variant="text" color="primary" size="large">
                Модель Остервальдера
              </Button>
            </Link>
          </li>

          <li className={styles.menuItem}>
            <Link to="/kanban-board">
              <Button variant="text" color="primary" size="large">
                Kanban Board
              </Button>
            </Link>
          </li>
        </ul>
      </div>

      <Footer />
    </Container>
  );
}
