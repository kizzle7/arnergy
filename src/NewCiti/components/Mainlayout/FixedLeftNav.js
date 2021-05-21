import React, {useState} from 'react'
import './index.css'
import dashboard from '../../img/dashboard-active.svg';
import graph from '../../img/graph.svg';
import appointment from '../../img/appointments.svg';
import enquiries from '../../img/enquiries.svg';
import messages from '../../img/messages.svg';
import users from '../../img/users.svg';
import settings from '../../img/settings.svg';



export default function FixedLeftNav() {
  const [current, setCurrent] = useState(false);
  const active = () => {
    setCurrent(true)

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
         
          <li className={`side-nav-list $active ${ active && `side-nav-list-active`}`}  onClick={active}>
            <img src={dashboard} />
          </li>

          <li className="side-nav-list">
            <img src={graph} />
          </li>

          <li className="side-nav-list">
            <img src={appointment} />
          </li>

          <li className="side-nav-list" >
            <img src={enquiries} />
          </li>
          <li className="side-nav-list">
            <img src={messages} />
          </li>
          <li className="side-nav-list">
            <img src={users} />
          </li>
          <li className="side-nav-list">
            <img src={settings} />
          </li>
          <li className="side-nav-list">
            <img src={settings} />
          </li>
          
          
        </ul>
      </div>
    </nav>
  )
}
