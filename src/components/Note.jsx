import React from "react";
import "../styles/components/Note.scss"
function Note(props) {
    return <i className={`fa-solid fa-star rate ${props.color}`}></i>;
  }
  
  export default Note;