import React from "react";
import "../styles/components/LogementHote.scss"

function LogementHote(props) {
    return (
      <div className="logement-host">
        <span>{props.hostName}</span>
        <img src={props.hostPicture} alt={`portrait de ${props.hostName}`} />
      </div>
    );
  }
  
  export default LogementHote;
  