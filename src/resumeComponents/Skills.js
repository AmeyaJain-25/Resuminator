import React, { useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const Skills = ({ setActive }) => {
  const userDetailContext = useContext(UserDetailContext);

  const createSkill = () => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.skills.push({
      skill: "",
      id: uuidv4(),
    });
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const handleOnChange = (e, name, skId) => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.skills.map((sk, i) => {
      if (sk.id == skId) {
        return (sk[name] = e.target.value);
      }
    });
    console.log(newObj);
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const skillComp = sk => {
    return (
      <div key={sk.id}>
        <input
          type="text"
          placeholder="Skill"
          value={sk.skill}
          onChange={e => handleOnChange(e, "skill", sk.id)}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>Skills</h2>

      <Button onClick={createSkill}>Add</Button>
      {userDetailContext.userDetail.skills.map((sk, index) => {
        return skillComp(sk);
      })}

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Link to="/resume">
        <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
      </Link>
    </div>
  );
};

export default Skills;
