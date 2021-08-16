import React from 'react'
import logo from './fff.jpg'
import { Link } from 'react-router-dom'
import './Logo.css'

function Logo() {
    return (
        <header>
                <Link to="/">
                  <div className="logo">
                      <img src={logo} alt="FFF LOGO" />
                  </div>
                  </Link>
                  <Link to="/">
                  <div className="club">
                      <h2>fridays for future</h2>
                  </div>
                </Link>
        </header>
    )
}

export default Logo
