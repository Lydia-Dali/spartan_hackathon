import React, { Component } from "react";

import { Link } from "react-router-dom";

import image5 from "../../images/image_5.jpg";
import logoSmall from "../../images/harmonia21_small.png";

import "./page3.css";

export default class page3 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
          </div>
        </header>
        <div className="blue-container">
          <div class="container">
            <div class="login-form-compte">
              <form id="Login" className="login">
                <div classN="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Mot de passe"
                  />
                </div>
                <div class="forgot">
                  <a href="reset.html">Mot de passe oublié?</a>
                </div>
                <button type="submit" class="btn btn-primary">
                  ME CONNECTER
                </button>
                <Link to="/Page4">
                  <button type="submit" class="btn btn-warning btn-compte">
                    Créer un compte
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <img className="image-femme-assise" src={image5} alt="femme-assise" />
      </div>
    );
  }
}
