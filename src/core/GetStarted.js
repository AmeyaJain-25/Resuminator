import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Profile from "../resumeComponents/Profile";
import Education from "../resumeComponents/Education";
import { UserDetailContext } from "../context/UserDetailContext";
import Url from "../resumeComponents/Url";
import Skills from "../resumeComponents/Skills";

const GetStarted = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(1);
  }, []);

  const [exp, setExp] = useState([]);

  const [skills, setSkills] = useState([]);

  const [acheivements, setAcheivements] = useState([]);

  const [projects, setProjects] = useState([]);

  const history = useHistory();

  const [userDetail, setUserDetail] = useState({
    profile: {
      fullName: "",
      email: "",
      contactNo: "",
      line1: "",
      line2: "",
      city: "",
      state: "",
      country: "",
      intro: "",
    },
    education: [],
    url: [],
    skills: [],
  });

  //Input fields

  //Profile*** (DONE)
  //Full Name, Email, Address, Phone No. , Short Intro(About me)

  //URLS*** (DONE)
  //LinkedIn, Github, Twitter, Website

  //Education*** (DONE)

  //Exp***

  //Skills*** (DONE)

  //Acheivements / Publications***

  //Projects (TOP 3)***

  return (
    <>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        <header className="App-header">
          <Button color="warning" size="sm" onClick={() => history.goBack()}>
            Go Back
          </Button>

          <h1>Input Form</h1>

          {active === 1 && <Profile setActive={setActive} />}
          {active === 2 && <Education setActive={setActive} />}
          {active === 3 && <Url setActive={setActive} />}
          {active === 4 && <Skills setActive={setActive} />}

          {/* <Button color="success" size="lg">
          Submit
        </Button> */}
        </header>
      </UserDetailContext.Provider>
    </>
  );
};

export default GetStarted;
