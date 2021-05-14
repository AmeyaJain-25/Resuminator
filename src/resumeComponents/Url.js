import React, { useContext } from "react";
import { Button } from "reactstrap";
import { UserDetailContext } from "../context/UserDetailContext";
import { v4 as uuidv4 } from "uuid";

const Url = ({ setActive }) => {
  const userDetailContext = useContext(UserDetailContext);

  const createURL = () => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.url.push({
      urlLabel: "",
      url: "",
      id: uuidv4(),
    });
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const handleOnChange = (e, name, urlId) => {
    let newObj = { ...userDetailContext.userDetail };
    newObj.url.map((url, i) => {
      if (url.id == urlId) {
        return (url[name] = e.target.value);
      }
    });
    userDetailContext.setUserDetail({
      ...userDetailContext.userDetail,
      newObj,
    });
  };

  const urlComp = url => {
    return (
      <div key={url.id}>
        <input
          type="text"
          placeholder="URL Label"
          value={url.urlLabel}
          onChange={e => handleOnChange(e, "urlLabel", url.id)}
        />
        <input
          type="text"
          placeholder="Type your URL"
          value={url.url}
          onChange={e => handleOnChange(e, "url", url.id)}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>Profile URLS</h2>

      <Button onClick={createURL}>Add</Button>
      {userDetailContext.userDetail.url.map((url, index) => {
        return urlComp(url);
      })}

      <Button onClick={() => setActive(prev => prev - 1)}>Previous</Button>
      <Button onClick={() => setActive(prev => prev + 1)}>Next</Button>
    </div>
  );
};

export default Url;
