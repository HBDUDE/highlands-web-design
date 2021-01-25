import React from 'react'

import Maintenance from './components/Maintenance'
import NewHome from './components/NewHome'
import NewNewHome from './components/NewNewHome'

const pageVariable = 'new-new-home'

const App = () => {
  if(pageVariable === 'maintenance') {
    return <Maintenance/>
  }
  else if(pageVariable === 'new-home') {
    return <NewHome/>
  } 
  else if(pageVariable === 'new-new-home') {
    return <NewNewHome/>
  }
}
export default App;