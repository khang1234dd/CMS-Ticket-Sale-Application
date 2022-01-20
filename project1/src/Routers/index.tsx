import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import NavLeft from '../components/NavLeft';
import CaiDat from '../components/Pages/CaiDat';
import DoiSoatVe from '../components/Pages/DoiSoatVe';
import QuanLyVe from '../components/Pages/QuanLyVe';
import TrangChu from '../components/Pages/TrangChu';

const index = () => {
  return (
    <>
        
        <Router>
        <Nav></Nav>
        <NavLeft></NavLeft>
            <Routes>
                <Route path='/' element={<TrangChu></TrangChu>}></Route>
                <Route path='/qlve' element={<QuanLyVe></QuanLyVe>}></Route>
                <Route path='/dsve' element={<DoiSoatVe></DoiSoatVe>}></Route>
                <Route path='/caidat' element={<CaiDat></CaiDat>}></Route>
            </Routes>
        </Router>
    </>
  )
};

export default index;
