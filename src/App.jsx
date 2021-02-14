import React from 'react'

import Maintenance from './components/Maintenance'
import NewHome from './components/NewHome'
import NewHomeBackup from './components/NewHomeBackup'

const pageVariable = 'new-home'

const App = () => {
  if(pageVariable === 'maintenance') {
    return <Maintenance/>
  }
  else if(pageVariable === 'new-home') {
    return <NewHome/>
  } 
  else if(pageVariable === 'backup') {
    return <NewHomeBackup/>
  }
}
export default App;