import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import * as XLSX from "xlsx";
import Modal from "react-bootstrap/Modal";
//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import { AuthContext } from "../context-auth/auth";
import Details from "./Details";
import { GET_ALL_USER_APPLICATIONS } from "../../../Graphql/Queries";
import { GET_ALL_APPROVED } from "../../../Graphql/Queries";
import { GET_ALL_DECLINED } from "../../../Graphql/Queries";
import { GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT } from "../../../Graphql/Queries";
import { GET_ALL_EXCEL_APPLICATIONS } from "../../../Graphql/Queries";
const Home = () => {
  const { user } = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [municipality, setMunicipality] = useState();
  const { changeBackground } = useContext(ThemeContext);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  const { data: totalApplications } = useQuery(GET_ALL_USER_APPLICATIONS);
  const { data: allApproved } = useQuery(GET_ALL_APPROVED);
  const { data: allDeclined } = useQuery(GET_ALL_DECLINED);

  function successPercentage(success, fail) {
    return (success * 100) / fail;
  }

  function failurePercentage(success, fail) {
    return (fail * 100) / success;
  }

  var successCount = 0;
  var failureCount = 0;

  if (allDeclined && allDeclined.getAllDeclinedCount) {
    failureCount = allDeclined.getAllDeclinedCount;
  }

  if (allApproved && allApproved.getAllApprovedCount) {
    successCount = allApproved.getAllApprovedCount;
  }

  function handleDetails(municipality) {
    setMunicipality(municipality);
    setShow(true);
  }

  const { data: totalJhbMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "City of Johannesburg Metropolitan",
      },
    }
  );

  const { data: totalBuffaloMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "Buffalo City Metropolitan",
      },
    }
  );

  const { data: totalEkurhuleniMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "City of Ekurhuleni Metropolitan",
      },
    }
  );

  const { data: totalTshwaneMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "City of Tshwane Metropolitan",
      },
    }
  );

  const { data: totalMangaungMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "Mangaung Metropolitan",
      },
    }
  );

  const { data: totalCtMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "City of Cape Town Metropolitan",
      },
    }
  );

  const { data: totalEthekwiniMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "eThekwini Metropolitan",
      },
    }
  );

  const { data: totalNelsonMandelaMunicipalityApplications } = useQuery(
    GET_TOTAL_MUNICIPALITY_APPLICATIONS_COUNT,
    {
      pollInterval: 4000,
      variables: {
        municipality: "Nelson Mandela Bay Metropolitan",
      },
    }
  );

  const { data, loading, error } = useQuery(GET_ALL_EXCEL_APPLICATIONS);

  const excelData = data?.getAllExcelApplications || [];

  console.log("Excel Data:", JSON.stringify(excelData));

  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    XLSX.writeFile(wb, "applications" + ".xlsx");
  };
  return (
    <>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{municipality}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Details municipality={municipality} />
        </Modal.Body>
      </Modal>
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
                            style={{ fontSize: "22px", color: "#009BD7" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">
                            {totalApplications &&
                              totalApplications.getAllUserApplicationsCount}
                          </h2>
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
                            style={{ fontSize: "22px", color: "#009BD7" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">
                            {allApproved && allApproved.getAllApprovedCount}
                          </h2>
                          <p className="mb-0 text-nowrap ">Total Approved</p>
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
                            style={{ fontSize: "22px", color: "#009BD7" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600">
                            {allDeclined && allDeclined.getAllDeclinedCount}
                          </h2>
                          <p className="mb-0">Total Declined</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-3 col-sm-6">
                  <div
                    className="card booking"
                    style={{ backgroundColor: "#EEF5FC", cursor: "pointer" }}
                    onClick={() => downloadExcel()}>
                    <div className="card-body">
                      <div className="booking-status d-flex align-items-center">
                        <span>
                          <i
                            className="fas fa-file-excel"
                            style={{ fontSize: "22px", color: "#009BD7" }}
                          />
                        </span>
                        <div className="ms-4">
                          <h2 className="mb-0 font-w600"></h2>
                          <p className="mb-0" style={{ color: "#03BA27" }}>
                            Download{" "}
                          </p>
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
                      <div
                        className="card"
                        style={{ backgroundColor: "#2AD45E" }}>
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Total Approvals
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>
                              {successCount}
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">
                                {successPercentage(successCount, failureCount)}%
                                Complete
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                      <div
                        className="card"
                        style={{ backgroundColor: "#AD0900" }}>
                        >
                        <div className="card-body">
                          <div className="d-flex align-items-end pb-4 justify-content-between">
                            <span className="fs-14 font-w500 text-white">
                              Declined
                            </span>
                            <span className="fs-20 font-w600 text-white">
                              <span className="pe-2"></span>
                              {failureCount}
                            </span>
                          </div>
                          <div className="progress default-progress h-auto">
                            <div
                              className="progress-bar bg-white progress-animated"
                              style={{ width: "0%", height: "13px" }}>
                              <span className="sr-only">
                                {failurePercentage(successCount, failureCount)}%
                                Complete
                              </span>
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
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("Buffalo City Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalBuffaloMunicipalityApplications &&
                            totalBuffaloMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16">Buffalo City Metropolitan</span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("City of Cape Town Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalCtMunicipalityApplications &&
                            totalCtMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16">
                          City of Cape Town Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("City of Ekurhuleni Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalEkurhuleniMunicipalityApplications &&
                            totalEkurhuleniMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16">
                          City of Ekurhuleni Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("City of Johannesburg Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalJhbMunicipalityApplications &&
                            totalJhbMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16 wspace-no">
                          City of Johannesburg Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("City of Tshwane Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalTshwaneMunicipalityApplications &&
                            totalTshwaneMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16 wspace-no">
                          City of Tshwane Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDetails("eThekwini Metropolitan")}>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalEthekwiniMunicipalityApplications &&
                            totalEthekwiniMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16 wspace-no">
                          eThekwini Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDetails("Mangaung Metropolitan")}>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalMangaungMunicipalityApplications &&
                            totalMangaungMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16 wspace-no">
                          Mangaung Metropolitan
                        </span>
                      </div>
                    </div>
                    <div
                      className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6"
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleDetails("Nelson Mandela Bay Metropolitan")
                      }>
                      <div className="text-center">
                        <h3 className="fs-28 font-w600">
                          {totalNelsonMandelaMunicipalityApplications &&
                            totalNelsonMandelaMunicipalityApplications.getTotalMunicipalityApplicationsCount}
                        </h3>
                        <span className="fs-16 wspace-no">
                          Nelson Mandela Bay Metropolitan
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
