import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CashFlow, Home, OsterwalderModel } from './pages';
import { LeftMenu } from './components';

function App() {
  return (
    <>
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cash-flow" element={<CashFlow />}></Route>
        <Route path="/osterwalder-model" element={<OsterwalderModel />}></Route>
      </Routes>
    </>
  );
}

export default App;
