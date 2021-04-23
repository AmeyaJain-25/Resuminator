import React, { useState, useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";

const Education = ({ setActive }) => {
  const userDetailContext = useContext(UserDetailContext);

  const handleOnChange = name => e => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.education[name] = e.target.value;
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  return (
    <div>
      <h1>Education</h1>

      <h3>Secondary Edu.</h3>
      <input
        type="text"
        placeholder="Clg name"
        value={userDetailContext.userDetail.education.clgName}
        onChange={handleOnChange("clgName")}
      />
      <input
        type="text"
        placeholder="Grade"
        value={userDetailContext.userDetail.education.grade}
        onChange={handleOnChange("grade")}
      />
      <input
        type="text"
        placeholder="Passing Year"
        value={userDetailContext.userDetail.education.passingYear}
        onChange={handleOnChange("passingYear")}
      />

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
    </div>
  );
};

export default Education;
