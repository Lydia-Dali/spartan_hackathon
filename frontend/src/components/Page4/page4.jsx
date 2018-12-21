import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./page4.css";

import image5 from "../../images/welcome.jpg";
import logoSmall from "../../images/harmonia21_small.png";


export default class page4 extends Component {
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
            <div class="login-form">
              <form id="Login" className="login">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Nom"
                  />
                </div>
                <div class="form-group">
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
                <div class="form-group">
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="Retapez mot de passe"
                  />
                </div>
                <Link to="/Page5">
                  <button
                    type="submit"
                    class="btn btn-warning-compte btn-compte-compte"
                  >
                    CREER MON COMPTE
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
