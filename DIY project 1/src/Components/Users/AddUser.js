import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      console.log("Please enter a valid name or age");
      setError({
        title: "Invalid input",
        message: "Pleaae enter a valid name and age (non-empty values) ",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      console.log("Enter an age greater than 1");
      setError({
        title: "Invalid input",
        message: "Pleaae enter a valid age. (> 0) ",
      });
      return;
    }
    console.log(enteredUserAge, enteredName);

    const newUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredUserAge,
    };

    if (enteredName !== undefined && enteredUserAge !== undefined) {
      props.onAdd(newUser);

      nameInputRef.current.value = "";
      ageInputRef.current.value = "";
    }
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="name"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" placeholder="age" ref={ageInputRef} />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}

export default AddUser;
