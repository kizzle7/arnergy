import React from "react";
import Tabs from "../components/Tabs";
import "./tab.css";

function App() {
  return (
    <div className="pt-4">
      <Tabs>
        <div label="Bookings">
          <div className="d-flex justify-content-between align-items-center pt-4">
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">Amanda Chavez</span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">Fiona Wade</span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">
                Beatrice Carrol
              </span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center pt-4">
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">Jasmine Palmer</span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">Randy Elliot</span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
            <div className="tab-box-stats">
              <span className="tabs-stats-title pl-3 pt-5">
                Christine Powell
              </span>
              <div className="tab-stats-sub">Service</div>
              <div className="tab-box-title">Physiotherapy</div>

              <div class="tab-box-body">
                <div class="d-flex justify-content-between align-items-center">
                  <div className="">
                    <div>Date</div>
                    <div className="pt-1">25 Jul 2020</div>
                  </div>
                  <div>
                    <div className="">Time</div>
                    <div className="pt-1">11:00 - 12:00</div>
                  </div>
                </div>
              </div>
              <div class="tab-box-divider"></div>
              <div class="d-flex justify-content align-items">
                <div class="footer-text">Accept Booking</div>
                <div class="footer-decline">Decline</div>
              </div>
            </div>
          </div>
        </div>
        <div label="Enquiries"></div>
        <div label="My Services"></div>
      </Tabs>
    </div>
  );
}

export default App;
