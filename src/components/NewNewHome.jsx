import React, { useState } from 'react'

import "../styles/new-new-home.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NewNewHome() {
  const [menuActive, setMenuActive] = useState(false)
  const [menuStyle, setMenuStyle] = useState({
    transform: "translateX(300px)"
  })
  const menuClick = () => {
    if (menuActive === false) {
      setMenuActive(true)
      setMenuStyle({
        transform: "translateX(0px)"
      })
    } else {
      setMenuActive(false)
      setMenuStyle({
        transform: "translateX(300px)"
      })
    }
  }
  return (
    <div className="container">
      <div className="title-container">
        <h1 className="title">Highland's Web Design</h1>
      </div>
      
      <div className="menu-outer-wrapper">
        <div className="menu-container" style={menuStyle}>
          <div className="menu-button-wrapper" onClick={menuClick}>
            <FontAwesomeIcon className="menu-button" icon={faBars}/>
          </div>

          <div className="menu">
            <ul>
              <li>One</li>
              <li>Two</li>
              <li>Three</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
