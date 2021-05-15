import React, { useContext } from "react";
import "../App.css";
import { Row, Col } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";

const Resume = () => {
  const userDetailContext = useContext(UserDetailContext);

  return (
    <div>
      <Row>
        <Col md="4"></Col>
        <Col md="4">
          <Row style={{ minHeight: "1000px" }}>
            <Col style={{ background: "#335384" }}>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "30px 0px",
                }}
              >
                <img
                  src=""
                  alt="profileImg"
                  style={{
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                  }}
                />
              </Row>
              <div style={{ margin: "20px 10px" }}>
                <h4
                  style={{
                    textAlign: "center",
                    color: "#fff",
                  }}
                >
                  CONTACT ME
                </h4>
                <Row
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <p
                    style={{
                      lineHeight: "1.2em",
                      marginBottom: "1rem",
                      fontSize: "0.8em",
                      color: "white",
                      fontWeight: "200",
                    }}
                  >
                    {userDetailContext.userDetail.profile.line1}, <br />
                    {userDetailContext.userDetail.profile.line2}, <br />
                    {userDetailContext.userDetail.profile.city}
                  </p>
                </Row>
              </div>
            </Col>
            <Col>Right</Col>
          </Row>
        </Col>
        <Col md="4"></Col>
      </Row>
    </div>
  );
};

export default Resume;
