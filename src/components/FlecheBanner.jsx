import React from "react";
import "../styles/components/FlecheBanner.scss"
function FlecheBanner(props) {
    return <i onClick={props.onClick} className={props.className}></i>;
  }
  
  export default FlecheBanner;
  