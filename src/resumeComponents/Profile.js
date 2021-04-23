import React, { useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";

const Profile = ({ setActive }) => {
  const userDetailContext = useContext(UserDetailContext);

  const handleOnChange = name => e => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.profile[name] = e.target.value;
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  return (
    <div>
      <h1>Profile</h1>
      <input
        type="text"
        placeholder="Full Name"
        value={userDetailContext.userDetail.profile.fullName}
        onChange={handleOnChange("fullName")}
      />
      <input
        type="email"
        placeholder="Email Address"
        value={userDetailContext.userDetail.profile.email}
        onChange={handleOnChange("email")}
      />
      <input
        type="text"
        placeholder="Contact No"
        value={userDetailContext.userDetail.profile.contactNo}
        onChange={handleOnChange("contactNo")}
      />
      <h2>Address</h2>

      <input
        type="text"
        placeholder="Line 1"
        value={userDetailContext.userDetail.profile.line1}
        onChange={handleOnChange("line1")}
      />
      <input
        type="text"
        placeholder="Line 2"
        value={userDetailContext.userDetail.profile.line2}
        onChange={handleOnChange("line2")}
      />
      <input
        type="text"
        placeholder="City"
        value={userDetailContext.userDetail.profile.city}
        onChange={handleOnChange("city")}
      />
      <input
        type="text"
        placeholder="State"
        value={userDetailContext.userDetail.profile.state}
        onChange={handleOnChange("state")}
      />
      <input
        type="text"
        placeholder="Country"
        value={userDetailContext.userDetail.profile.country}
        onChange={handleOnChange("country")}
      />
      <h2>About Me</h2>

      <textarea
        name="intro"
        value={userDetailContext.userDetail.profile.intro}
        onChange={handleOnChange("intro")}
      ></textarea>

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
    </div>
  );
};

export default Profile;
