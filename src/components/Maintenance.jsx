import React from 'react';

// import '../styles/Maintenance.css';

import BuildIcon from '@material-ui/icons/Build';

const Maintenance = () => {
  return ( 
    <React.Fragment>
      <div className="section1">
        <h1 className="section1Title">Highland's Web Design</h1>
        <div className="under-maintenance">
          <BuildIcon fontSize="large" className="maintenance-icon"/>
          <p className="maintenance-p">Website is currently under maintenance.</p>
        </div>
        {/* <span className="section1Attrib">Photo by <a href="https://unsplash.com/@blakeconnally?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Blake Connally</a> on <a href="https://unsplash.com/s/photos/code?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> */}
      </div>
    </React.Fragment>
  )
}

export default Maintenance;