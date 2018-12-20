import React, { Component } from "react";

import image1 from "../../images/image_accueil1.jpg";

import "./Accueil.css";

export default class Accueil extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <div className="proverbe">
          <h2>
            " Celui qui deplace la montagne, c'est celui qui commence à enlever
            les petites pierres. "
          </h2>
          <h3 className="auteur-proverbe">(Confucius)</h3>
        </div>
        <img className="image-enfant" src={image1} alt="enfant" />
        <p className="p-top">
          Vous voulez donner une nouvelle destination à vos impôts ?
        </p>
        <p>Une dimension humaine !</p>
        <div className="bouton-orange">
          <a href="#" class="btn btn-primary btn-warning">
            POURQUOI PAS >>
          </a>
          <p className="p-impacter">Impacter le monde !</p>
        </div>
      </div>
    );
  }
}
