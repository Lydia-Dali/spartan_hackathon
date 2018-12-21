import React, { Component } from "react";

import { Link } from "react-router-dom";

import "./page7.css";

import logoSmall from "../../images/harmonia21_small.png";

export default class page7 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
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

              </form>
              <div className="bouton-orange">
                <Link to="/Page7"><a href="#myModal" class="btn btn-primary btn-warning trigger-btn" data-toggle="modal">VALIDER </a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bouton-orange">
          <p className="p-impacter impacter-parrainage">Impacter le monde !</p>
        </div>

        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-confirm">
            <div class="modal-content">
              <div class="modal-header">
                <div class="icon-box-parain">
                  <h4 className="text-center">2</h4>
                </div>
              </div>
              <div class="modal-body">
                <h6 className="text-center">Niveau Parrain</h6>
                <h4 class="modal-title">Merci d'avoir parrainé vos amis !</h4>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success btn-block" data-dismiss="modal" onClick={() => this.props.history.push("/Page8")}>OK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
