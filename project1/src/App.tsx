import React from 'react';
import Nav from './components/Nav';
import NavLeft from './components/NavLeft';
import Search from './components/Search';
import Status from './components/common/Status/index'
import Routers from './Routers';
import Calendar from './components/Calendar';

function App() {
  return (
    <div >
      {/* <Nav></Nav>
      <NavLeft ></NavLeft> */}
      <Routers></Routers>
      {/* <Calendar></Calendar> */}
      {/* <Search /> */}
      {/* <Status status="dangsudung" /> */}
    </div>
  );
}

export default App;
