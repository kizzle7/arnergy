import React from 'react'
import TabInfo  from './tab';
import './index.css'
export default class Index extends React.Component {
  render() {
    return (
      <div className="index-page">
        <span className="quick-links mt-0 pt-0">Quick Stats</span>
        <div className="d-flex justify-content-between align-items-center pt-4">
          <div className="box">
            <span className="title-box">Total Bookings</span>
            <p className="box-info">28,235</p>
          </div>

          <div className="box">
            <span className="title-box">Pending Approval</span>
            <p className="box-info-danger">120</p>
          </div>
          <div className="box">
            <span className="title-box">New Clients this month</span>
            <p className="box-info">89</p>
            <div className="box-decrease"></div>
          </div>
          <div className="box">
            <span className="title-box">Returning Clients</span>
            <p className="box-info">46%</p>
            <div className="box-increase"></div>
          </div>
        </div>

        <div>
          <TabInfo />
        </div>
      </div>
    )
  }
}
