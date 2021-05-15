import React, { useState, useEffect } from "react";
import "../App.css";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";
import Profile from "../resumeComponents/Profile";
import Education from "../resumeComponents/Education";
import Url from "../resumeComponents/Url";
import Skills from "../resumeComponents/Skills";
import Resume from "./Resume";

const GetStarted = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    setActive(1);
  }, []);

  const history = useHistory();

  return (
    <div className="App-header">
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
    </div>
  );
};

export default GetStarted;
