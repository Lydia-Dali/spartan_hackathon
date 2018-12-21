import React, { Component } from "react";

import image9 from "../../images/image_9.jpg";
import logoSmall from "../../images/harmonia21_small.png";

import "./page8.css";

export default class page8 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
          </div>
        </header>
        <img className="image-accolade" src={image9} alt="accolade-ronde" />
        <p className="p-top">
          Etre ambassadeur c'est s'impliquer dans le développement de l'école
          HARMONIA21 en partageant la philosophie d'entraide au développement
          d'activité dans l'économie sociale et solidaire.
        </p>
        <form className="form-checkbox">
          <label class="container-label">
            <label for="accepter">J'autorise les publications</label>
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
          <label class="container-label">
            <label for="accepter">J'accepte les conditions générales</label>
            <input type="checkbox" />
            <span class="checkmark" />
          </label>
        </form>

        <div className="bouton-orange">
          <a
            href="#myModal"
            class="btn btn-primary btn-warning trigger-btn"
            data-toggle="modal"
          >
            VALIDER{" "}
          </a>
          <p className="p-impacter">Impacter le monde !</p>
        </div>

        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-confirm">
            <div class="modal-content">
              <div class="modal-header">
                <div class="icon-box-ambassadeur">
                  <h4 className="text-center">3</h4>
                </div>
              </div>
              <div class="modal-body">
                <h6 className="text-center">Niveau Ambassadeur</h6>
                <h4 class="modal-title">Merci !</h4>                
              </div>
              <div class="modal-footer">
                <button
                  type="submit"
                  class="btn btn-success btn-block"
                  data-dismiss="modal" 
                  onClick={() => window.location="https://www.facebook.com/harmoniaschoolFR"}>
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
