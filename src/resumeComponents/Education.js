import React, { useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";
import { v4 as uuidv4 } from "uuid";

const Education = ({ setActive }) => {
  const userDetailContext = useContext(UserDetailContext);

  const createEducation = () => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.education.push({
      InstName: "",
      grade: "",
      PassYear: "",
      id: uuidv4(),
    });
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const handleOnChange = (e, name, eduId) => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.education.map((ed, i) => {
      if (ed.id == eduId) {
        return (ed[name] = e.target.value);
      }
    });
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const educationComp = edu => {
    return (
      <div key={edu.id}>
        <input
          type="text"
          placeholder="Institute name"
          value={edu.InstName}
          onChange={e => handleOnChange(e, "InstName", edu.id)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={edu.grade}
          onChange={e => handleOnChange(e, "grade", edu.id)}
        />
        <input
          type="text"
          placeholder="Passing Year"
          value={edu.PassYear}
          onChange={e => handleOnChange(e, "PassYear", edu.id)}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Education</h1>

      <Button onClick={createEducation}>Add</Button>
      {userDetailContext.userDetail.education.map((edu, index) => {
        return educationComp(edu);
      })}

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
    </div>
  );
};

export default Education;
