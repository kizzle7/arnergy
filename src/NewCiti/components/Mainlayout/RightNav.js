import React from 'react'
import './index.css'
import alert from '../../img/bell.svg'
import user from '../../img/user.svg'
import copy from '../../img/copy.svg'
import crown from '../../img/crown.jpg'

export default function FixedLeftNav() {
  return (
    <nav className="right-nav">
      <div className="right-contents">
        <div class="start-righty">
          <div className="d-flex">
            <div className="">
              <div class="search">
                <span class="fa fa-search">
                  <span className="pl-2 "> | </span>
                </span>
                <input
                  type="text"
                  className="input-normal"
                  placeholder="Search Keyword"
                ></input>
              </div>
            </div>
            <div className="">
              <img src={alert} className="pl-5 pt-3" />
            </div>
          </div>
        </div>

        <div className="right-user-area">
          <div className="d-flex">
            <div className="">
              <div className="greetings">Hello,</div>
              <div className="name pt-1">Jonathan!</div>
              <div className="info-text pt-1">
                Copy your bio link and paste it in your profile to let people
                find you.
              </div>
            </div>
            <div className="">
              <img src={user} className="img-class" />
            </div>
          </div>
        </div>

        <div className="copy-palet pt-5">
          <div className="d-flex">
            <div class="">
              <div class="copy-cap">
                <span class="copy-img ">
                  {' '}
                  | <img src={copy} className="pl-2" />
                </span>
                <input
                  type="text"
                  className="input-copy"
                  placeholder="scheddo.com/jonathan"
                ></input>
              </div>
            </div>
            <div class="pl-4">
              <div class="pt-1">
                <div
                  className="pt-2 text-center"
                  style={{
                    width: '90px',
                    height: '42px',
                    background: '#322A7D 0% 0% no-repeat padding-box',
                    borderRadius: '100px',
                    opacity: '0.3',
                  }}
                >
                  <span className="text-link">Edit Link</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-5">
          <div className="border-blue">
            <div className="border-bluebg">
              <div class="d-flex justify-content-between align-items-center">
                <div class="pro-text">Upgrade to PRO</div>
                <div class="pro-logo-area">
                  <div class="logo-pro">
                      <img src={crown}  className="logo-pro-box img-color-white" />
                  </div>
                </div>
              </div>{' '}
              <div class="pro-sub">For more Profile Control</div>
            </div>
          </div>
        </div>

        <div className="reminders pt-5">
          <div className="d-flex justify-content-between alxign-items-center">
            <div class="left-head">Reminders</div>
            <div class="right-head">
              View All <i className="fa fa-angle-right pl-1"></i>{' '}
            </div>
          </div>
          <div className="pt-3">
            <div className="d-flex justify-content align-items-center">
              <div className="reminder-box-1"></div>
              <div className="pl-3">
                <div className="reminder-detail">Booking Reminder</div>
                <div className="reminder-detail-sub pt-2">
                  Lorem ipsum dolor sit amet, consetetur
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-2">
            <div className="d-flex justify-content align-items-center">
              <div className="reminder-box-2">
                <div className="r-box">
                  <i className="fa fa-envelope"></i>{' '}
                </div>
              </div>
              <div className="pl-3">
                <div className="reminder-detail">New Message</div>
                <div className="reminder-detail-sub pt-2">
                  Lorem ipsum dolor sit amet, consetetur
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-3">
            <div className="d-flex justify-content align-items-center">
              <div className="reminder-box-3"></div>
              <div className="pl-3">
                <div className="reminder-detail-last">Upcoming Book</div>
                <div className="reminder-detail-sub pt-2">
                  Lorem ipsum dolor sit amet, consetetur
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
