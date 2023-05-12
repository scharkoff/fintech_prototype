import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CashFlow, Home } from './pages';
import { LeftMenu } from './components';

function App() {
  return (
    <>
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cash-flow" element={<CashFlow />}></Route>
      </Routes>
    </>
  );
}

export default App;
