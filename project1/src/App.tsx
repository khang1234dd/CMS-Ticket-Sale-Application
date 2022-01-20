import React from 'react';
import Nav from './components/Nav';
import NavLeft from './components/NavLeft';
import Search from './components/Search';
import Status from './components/common/Status/index'
import Routers from './Routers';

function App() {
  return (
    <div >
      {/* <Nav></Nav>
      <NavLeft ></NavLeft> */}
      <Routers></Routers>
      {/* <Search /> */}
      {/* <Status status="dangsudung" /> */}
    </div>
  );
}

export default App;
