import React, { useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";

const Url = ({ setActive }) => {
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
      <h2>Profile URLS</h2>

      <input
        type="url"
        placeholder="Enter your Website URL"
        value={userDetailContext.userDetail.education.websiteURL}
        onChange={handleOnChange("websiteURL")}
      />
      <input
        type="url"
        placeholder="Enter your LinkedIn-Profile URL"
        value={userDetailContext.userDetail.education.linkedInURL}
        onChange={handleOnChange("linkedInURL")}
      />
      <input
        type="url"
        placeholder="Enter your Github-Profile URL"
        value={userDetailContext.userDetail.education.githubURL}
        onChange={handleOnChange("githubURL")}
      />
      <input
        type="url"
        placeholder="Enter your Twitter-Profile URL"
        value={userDetailContext.userDetail.education.twitterURL}
        onChange={handleOnChange("twitterURL")}
      />

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
    </div>
  );
};

export default Url;
