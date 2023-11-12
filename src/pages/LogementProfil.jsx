import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { logementList } from "../datas/logementList";
import Header from "../components/Header";
import FlecheBanner from "../components/FlecheBanner";
import Collapse from "../components/Collapse";
import LogementBanner from "../components/LogementBanner";
import LogementTitre from "../components/LogementTitre";
import LogementHote from "../components/LogementHote";
import Note from "../components/Note";
import Tag from "../components/Tag";
import Footer from "../components/Footer";
import Error404 from "./Error404";
import "../styles/pages/LogementProfil.scss"

function LogementProfile() {
    const { id } = useParams();
    const logement = logementList.find((logement) => logement.id === id);
    const rates = [1, 2, 3, 4, 5];
    const [activeBanner, setActiveBanner] = useState(0);
  
    const handleClickNextBanner = () => {
      if (activeBanner === logement.pictures.length - 1) {
        setActiveBanner(0);
      } else {
        setActiveBanner(activeBanner + 1);
      }
    };
  
    const handleClickPreviousBanner = () => {
      if (activeBanner === 0) {
        setActiveBanner(logement.pictures.length - 1);
      } else {
        setActiveBanner(activeBanner - 1);
      }
    };
  
    if (!logement) {
      return <Error404 />;
    }
    return (
      <div>
        <Header />
        <div className="logement-banner">
          <div className="arrows-banner-zone">
            <FlecheBanner
              onClick={handleClickPreviousBanner}
              className={
                logement.pictures.length > 1
                  ? "arrow-left fa-solid fa-chevron-up"
                  : null
              }
            />
            <FlecheBanner
              onClick={handleClickNextBanner}
              className={
                logement.pictures.length > 1
                  ? "arrow-right fa-solid fa-chevron-up"
                  : null
              }
            />
          </div>
          {logement.pictures.map((e, index) => (
            <LogementBanner
              className={`img-banner ${
                index === activeBanner ? "active-banner" : ""
              }`}
              key={index}
              imgSrc={e}
              title={`${logement.title} - Bannière n°${activeBanner + 1}`}
            />
          ))}
          <span className="counter">
            {logement.pictures.length > 1
              ? `${activeBanner + 1}/${logement.pictures.length}`
              : null}
          </span>
        </div>
        <div className="description-zone">
          <div className="logement-title-and-description">
            <LogementTitre title={logement.title} location={logement.location} />
            <div className="tag-zone">
              {logement.tags.map((e, index) => (
                <Tag key={index} tag={e} />
              ))}
            </div>
          </div>
          <div className="logement-host-and-rates">
            <div className="host-zone">
              <LogementHote
                hostPicture={logement.host.picture}
                hostName={logement.host.name}
              />
            </div>
            <div className="rates-zone">
              {rates.map((e, index) => (
                <Note
                  key={index}
                  color={parseInt(logement.rating) >= e ? "colored" : ""}
                />
              ))}
            </div>
          </div>
        </div>
        <ul className="collapses">
          <Collapse
            label="Description"
            description={logement.description}
            openByDefault={false}
          />
          <Collapse
            label="Équipements"
            description={logement.equipments.map((e, index) => (
              <span key={index}>{e}</span>
            ))}
            openByDefault={false}
          />
        </ul>
        <Footer />
      </div>
    );
  }
  
  export default LogementProfile;