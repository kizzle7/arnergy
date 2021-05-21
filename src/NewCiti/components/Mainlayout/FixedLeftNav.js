import React, {useState} from 'react'
import menus from '../../components/sidenavs'
import appointment from '../../img/appointments.svg'
import './index.css'
export default function FixedLeftNav() {
  const [current, setCurrent] = useState(false);
  const active = (id) => {
    setCurrent(id)
  }
 
  return (
    <nav className="left-nav">
      <div style={{ width: '100%' }}>
        <div className="img-box">
          <img
            src={require('../../img/citi.png')}
            width="30"
            className="img-logo"
          />
        </div>
        <ul className="side-nav">
          {menus.map((menuicon) => {
            return(
              <>
              <li className={`side-nav-list ${ current === menuicon.id && `side-nav-list-active`}`}  onClick={active.bind(this, menuicon.id)}>
            <span className=""><img src={menuicon.icon} /></span>
          </li>
          <br />
          </>
            )
          })}
          <div className="mt-4">
          <img src={appointment} className="side-nav-list" />
          </div>
        </ul>
      </div>
    </nav>
  )
}
