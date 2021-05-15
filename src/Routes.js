import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import GetStarted from "./core/GetStarted";
import { UserDetailContext } from "./context/UserDetailContext";
import Resume from "./core/Resume";

const Routes = () => {
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
    <Router>
      <Switch>
        <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
          <Route exact path="/" component={App} />
          <Route exact path="/getstarted" component={GetStarted} />
          <Route exact path="/resume" component={Resume} />
        </UserDetailContext.Provider>
      </Switch>
    </Router>
  );
};

export default Routes;
