import React from 'react'
import './index.css'

export default function FixedTopnav(props) {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <div className="nav-logo">
          <span>
            <img src={require('../../img/citi.png')} width="100%" />
          </span>
          <h1 className="text-left header-title">Dashboard</h1>
          <small className="sub-title pt-1">Welcome Back</small>
        </div>
        <div class="btn-box-top">
          <span className="btn-content">Customize Blocks</span>
        </div>
      </div>
    </nav>
  )
}
