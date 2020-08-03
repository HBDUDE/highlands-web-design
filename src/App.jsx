import React from 'react';

import Maintenance from './components/Maintenance';
import NewHome from './components/NewHome';

var pageVariable = 'new-home';

const App = () => {
  if(pageVariable === 'maintenance') {
    return <Maintenance/>
  }
  else if(pageVariable === 'new-home') {
    return <NewHome/>
  } 
}
export default App;