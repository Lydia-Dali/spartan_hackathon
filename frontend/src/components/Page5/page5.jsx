import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./page5.css";

import image6 from "../../images/carte bleu large.jpg";
import image7 from "../../images/merci.jpg";
import logoSmall from "../../images/harmonia21_small.png";

export default class page5 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
          </div>
        </header>
        <img className="image-cb" src={image6} alt="versement-cb" />

        <div className="montant">
          <div className="montantPaiement">Montant du paiement</div>
          <div className="montantPlace">
            <input className="totalBox" placeholder="100 €" />
          </div>
        </div>
        <div className="bouton-orange">
          <Link to="/Page6">
            <a href="#" class="btn btn-primary btn-warning">
              VALIDER{" "}
            </a>
          </Link>
        </div>
        <img className="image-thankYou" src={image7} alt="thankYou" />
      </div>
    );
  }
}
