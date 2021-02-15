import React from 'react'

import Maintenance from './components/Maintenance'
import NewHome from './components/NewHome'
import OldHome from './components/old-site/OldHome'

const pageVariable = 'new-home'

const App = () => {
  if(pageVariable === 'maintenance') {
    return <Maintenance/>
  }
  else if(pageVariable === 'new-home') {
    return <NewHome/>
  } 
  else if(pageVariable === 'backup') {
    return <OldHome/>
  }
}
export default App;