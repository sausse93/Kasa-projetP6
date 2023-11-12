import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import "../styles/pages/Error404.scss"

function Error404() {
    return (
      <div>
        <Header />
        <main className="error404">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/">
            <span>Retourner sur la page d’accueil</span>
          </Link>
        </main>
      </div>
    );
  }
  
  export default Error404;