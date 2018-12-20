import React, { Component } from "react";

import { Link } from "react-router-dom";

import imageLogo from "../../images/logo-Harmonia21.png";
import imageEnfant from "../../images/image_accueil2.jpg";
import imageMontagne1 from "../../images/harmonia21.png";
import imageMontagne2 from "../../images/harmonia21_2.png";


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
        <div className="logo-centre">
          <img className="image-logo-centre" src={imageLogo} alt="enfant" />          
        </div>        
        <div class="container container-slide">
          <div class="row row-slide">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-slide">
              <br />

              <div
                id="carousel-example-generic"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="0"
                    class="active"
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="1"
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to="2"
                  />
                </ol>
                <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                    <img className="img-slide"
                      src={imageEnfant}
                      alt="First Slide"
                    />
                    <div class="carousel-caption">                      
                      <p className="slide-slogan">Tout le monde a le droit au bohneur.</p>
                    </div>
                  </div>

                  <div class="carousel-item">
                    <img className="img-slide"
                      src={imageMontagne1}
                      alt="Second Slide"
                    />                    
                  </div>

                  <div class="carousel-item">
                    <img className="img-slide"
                      src={imageMontagne2}
                      alt="Third Slide"
                    />
                  </div>
                </div>

                <a
                  class="left carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="prev"
                >
                  <span class="icon-prev" aria-hidden="true" />
                  <span class="sr-only">Previous</span>
                </a>

                <a
                  class="right carousel-control"
                  href="#carousel-example-generic"
                  role="button"
                  data-slide="next"
                >
                  <span class="icon-next" aria-hidden="true" />
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="p-top">
          Vous voulez donner une nouvelle destination à vos impôts ?
        </p>
        <p>Une dimension humaine !</p>
        <div className="bouton-orange">
          <Link to="/Page1">
            <a href="#" class="btn btn-primary btn-warning">
              POURQUOI PAS >>
            </a>
          </Link>
          <p className="p-impacter">Impacter le monde !</p>
        </div>
      </div>
    );
  }
}
