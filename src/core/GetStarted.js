import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Profile from "../resumeComponents/Profile";
import Education from "../resumeComponents/Education";
import { UserDetailContext } from "../context/UserDetailContext";

const GetStarted = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(1);
  }, []);

  const [url, setUrl] = useState({
    linkedInURL: "",
    githubURL: "",
    twitterURL: "",
  });

  const [exp, setExp] = useState([]);

  const [skills, setSkills] = useState([]);

  const [acheivements, setAcheivements] = useState([]);

  const [projects, setProjects] = useState([]);

  const { linkedInURL, githubURL, twitterURL } = url;

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
    education: {
      clgName: "",
      grade: "",
      passingYear: "",
    },
  });

  //Input fields

  //TODO: (DONE)
  //Profile***
  //Full Name, Email, Address, Phone No. , Short Intro(About me)

  //URLS***
  //LinkedIn, Github, Twitter

  //Education***

  //Exp***

  //Skills***

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

          {/* <h2>Profile URLS</h2>

        <input
          type="url"
          placeholder="Enter your LinkedIn-Profile URL"
          value={linkedInURL}
          onChange={handleOnChange("linkedInURL")}
        />
        <input
          type="url"
          placeholder="Enter your Github-Profile URL"
          value={githubURL}
          onChange={handleOnChange("githubURL")}
        />
        <input
          type="url"
          placeholder="Enter your Twitter-Profile URL"
          value={twitterURL}
          onChange={handleOnChange("twitterURL")}
        /> */}

          {/* <Button color="success" size="lg">
          Submit
        </Button> */}
        </header>
      </UserDetailContext.Provider>
    </>
  );
};

export default GetStarted;
