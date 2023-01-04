import React from "react";

import Card from "../UI/Card";
import styles from "../Users/UserList.module.css";

function UserList(props) {
  if (props.users.length > 0) {
    return (
      <Card className={styles.users}>
        <ul>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.age} years old)
            </li>
          ))}
        </ul>
      </Card>
    );
  }
}

export default UserList;
