import React from "react";
import ReactDom from "react-dom";

import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

function Backdrop (props){
   return <div className={styles.backdrop} onClick={props.onConfirm}></div>
}

function ModalOverlay(props){
    return     <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
}

function ErrorModal(props) {
  return (
    <React.Fragment>
    {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById("backdrop-root"))}
    {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm ={props.onConfirm}></ModalOverlay>, document.getElementById("overlay-root"))}
    </React.Fragment>
  );
}

export default ErrorModal;
