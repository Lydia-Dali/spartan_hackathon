import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./page7.css";

export default class page7 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <div className="blue-container-parrainage">
          <h3 className="h3-parrainage">Parrainer mes amis</h3>
          <div class="container">
            <div class="login-form">
              <form id="Login" className="login-parrainage login">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Prénom*"
                  />
                </div>
              </form>
              <form id="Login" className="login-parrainage login">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Prénom*"
                  />
                </div>
              </form>
              <form id="Login" className="login-parrainage login">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Prénom*"
                  />
                </div>
              </form>
              <form id="Login" className="login-parrainage login">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Prénom*"
                  />
                </div>
              </form>
              <form id="Login" className="login-parrainage login">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Adresse Email*"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail"
                    placeholder="Prénom*"
                  />
                </div>
                <Link to="/Page8"><button type="submit" class="btn btn-warning btn-compte-compte">
                  INFORMER MES AMIS
                </button></Link>
              </form>
            </div>
          </div>
        </div>
        <div className="bouton-orange">
          <p className="p-impacter impacter-parrainage">Impacter le monde !</p>
        </div>
      </div>
    );
  }
}
