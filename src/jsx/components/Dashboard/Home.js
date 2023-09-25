import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../context-auth/auth";
const Home = () => {
  const { user } = useContext(AuthContext);
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-xl-12">
          <div className="row">
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-book"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">3</h2>
                          <p className="mb-0 text-nowrap">Total Requests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-clipboard"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">0</h2>
                          <p className="mb-0 text-nowrap ">Ward 60</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-users"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">1</h2>
                          <p className="mb-0">Ward 2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="card booking">
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-exclamation"
                            style={{ fontSize: "22px", color: "#E23428" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">0</h2>
                          <p className="mb-0">Rejected</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-6">
                  <div className="row">
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Total Approvals
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>0
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">0% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div className="card bg-secondary">
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Declined
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>0
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">0% Complete</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12">
          <div className="card">
            <div className="card-header border-0 pb-0">
              <h4 className="fs-20">Municipalities</h4>
            </div>
            <div className="card-body pt-0">{/*<LatestReview />*/}</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
