import React, { useState } from "react";

import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  function userInformationHandler(enteredInformation) {
    setUserInfo((previousInfo) => [enteredInformation, ...previousInfo]);
  }


  return (
    <div>
      <AddUser onAdd={userInformationHandler} />
      <UserList users={userInfo} />
    </div>
  );
}

export default App;
