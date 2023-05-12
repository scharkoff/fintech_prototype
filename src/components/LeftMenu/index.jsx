import React from 'react';
import styles from './LeftMenu.module.scss';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from '@mui/material/IconButton';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import GridOnIcon from '@mui/icons-material/GridOn';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { Link } from 'react-router-dom';

export function LeftMenu() {
  return (
    <div className={styles.leftMenuWrapper}>
      <ul className={styles.leftMenuList}>
        <li className={styles.leftMenuItem}>
          <Link to="/">
            <IconButton>
              <HomeIcon fontSize="large" color="primary" />
            </IconButton>
          </Link>
        </li>
        <li className={styles.leftMenuItem}>
          <Link to="/cash-flow">
            <IconButton>
              <CurrencyExchangeIcon fontSize="large" color="primary" />
            </IconButton>
          </Link>
        </li>
        <li className={styles.leftMenuItem}>
          <Link to="/cash-flow">
            <IconButton>
              <GridOnIcon fontSize="large" color="primary" />
            </IconButton>
          </Link>
        </li>
        <li className={styles.leftMenuItem}>
          <Link to="/cash-flow">
            <IconButton>
              <DashboardCustomizeIcon fontSize="large" color="primary" />
            </IconButton>
          </Link>
        </li>
      </ul>
    </div>
  );
}
