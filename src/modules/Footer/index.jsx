import React from 'react';
import styles from './Footer.module.scss';
import { Typography } from '@mui/material';

export function Footer() {
  return (
    <div className={styles.footer}>
      <Typography variant="subtitle1" color="GrayText" fontSize={14}>
        Прототип приложения для автоматизации бизнес-процессов малых предприятий
      </Typography>
      <Typography
        variant="subtitle1"
        color="GrayText"
        fontSize={12}
        marginTop={2}
      >
        Developed by <span className="primaryText">Fintech</span>
      </Typography>
    </div>
  );
}
