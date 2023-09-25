import React, { useState } from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/user.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import LogoutPage from "./Logout";

const Header = ({ onNote }) => {
  const [searchBut, setSearchBut] = useState(false);
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  return (
    <div className="header border-bottom">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}>
                {/*{finalName.join(" ").length === 0
                  ? "Dashboard"
                  : finalName.join(" ") === "dashboard dark"
                  ? "Dashboard"
                  : finalName.join(" ")}*/}
                IVERIFY
              </div>
            </div>
            <div className="nav-item d-flex align-items-center">
              <div className="input-group search-area">
                <input
                  type="text"
                  className={`form-control ${searchBut ? "active" : ""}`}
                  placeholder="Search.."
                />
                <span
                  className="input-group-text"
                  onClick={() => setSearchBut(!searchBut)}>
                  <Link to={"#"}>
                    <i className="flaticon-381-search-2"></i>
                  </Link>
                </span>
              </div>
            </div>
            <ul className="navbar-nav header-right">
              <Dropdown
                as="li"
                className="nav-item dropdown notification_dropdown">
                <Dropdown.Toggle
                  className="nav-link i-false c-pointer"
                  variant=""
                  as="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19.375"
                    height="24"
                    viewBox="0 0 19.375 24">
                    <g
                      id="_006-notification"
                      data-name="006-notification"
                      transform="translate(-341.252 -61.547)">
                      <path
                        id="Path_1954"
                        data-name="Path 1954"
                        d="M349.741,65.233V62.747a1.2,1.2,0,1,1,2.4,0v2.486a8.4,8.4,0,0,1,7.2,8.314v4.517l.971,1.942a3,3,0,0,1-2.683,4.342h-5.488a1.2,1.2,0,1,1-2.4,0h-5.488a3,3,0,0,1-2.683-4.342l.971-1.942V73.547a8.4,8.4,0,0,1,7.2-8.314Zm1.2,2.314a6,6,0,0,0-6,6v4.8a1.208,1.208,0,0,1-.127.536l-1.1,2.195a.6.6,0,0,0,.538.869h13.375a.6.6,0,0,0,.536-.869l-1.1-2.195a1.206,1.206,0,0,1-.126-.536v-4.8a6,6,0,0,0-6-6Z"
                        transform="translate(0 0)"
                        fill="#135846"
                        fill-rule="evenodd"
                      />
                    </g>
                  </svg>

                  <span className="badge light text-white bg-primary rounded-circle">
                    1
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="right"
                  className="mt-2 dropdown-menu dropdown-menu-end">
                  <PerfectScrollbar className="widget-media dlab-scroll p-3 height380">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media me-2"></div>
                          <div className="media-body">
                            <h6 className="mb-1">Updated Application</h6>
                            <small className="d-block">
                              29 July 2022 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </PerfectScrollbar>
                  <Link className="all-notification" to="#">
                    See all notifications <i className="ti-arrow-right" />
                  </Link>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown as="li" className="nav-item dropdown header-profile">
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link i-false c-pointer">
                  <i className="fas fa-user" style={{ color: "#E23428" }}></i>
                </Dropdown.Toggle>
                <Dropdown.Menu
                  align="right"
                  className="mt-3 dropdown-menu dropdown-menu-end">
                  <Link to="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary me-1"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                    <span className="ms-2">Profile </span>
                  </Link>

                  <LogoutPage />
                </Dropdown.Menu>
              </Dropdown>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
