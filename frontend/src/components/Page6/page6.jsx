import React, { Component } from 'react'

import { Link } from "react-router-dom";

import './page6.css'

import image8 from '../../images/profil fake.png'
import logoSmall from "../../images/harmonia21_small.png";

export default class page6 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
          </div>
        </header>
        <div className="blue-container-profil">
        <img className="image-profil" src={image8} alt="versement-cb" />           

        <form>
          <div className="col">
            <form className="row marginRow flexboxedRadios">
              <div className="col colRadio"><input type="radio" name="gender" value="md" />Madamme</div>
              <div className="col"><input type="radio" name="gender" value="mr" />Monsieur</div>
            </form>
          </div>     
            
          <div className="row marginRow">
            <div className="col">
              <input type="text" class="form-control" placeholder="Nom *"></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Prénom *"></input>
            </div>
          </div>
          <div className="row marginRow">
            <div className="col">
              <input type="text" className="form-control" placeholder="Société"></input>
            </div>
            </div>

          <div className="row marginRow">
            <div className="col">
              <input type="text" className="form-control" placeholder="Adresse 1 *"></input>
            </div>
          </div>
          <div className="row marginRow">
            <div className="col">
              <input type="text" className="form-control" placeholder="Adresse 2"></input>
            </div>
          </div>
          <div className="row marginRow">
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Ville *"></input>
            </div>
            <div className="col-6">
              <input type="text" className="form-control" placeholder="Pays *"></input>
            </div>
          </div>
          <div className="row marginRow">
            <div className="col">
              <input type="text" className="form-control" placeholder="Téléphone"></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Portable"></input>
            </div>
          </div>
          <div className="row marginRow">
            <div className="col">
              <input type="text" className="form-control" placeholder="Date de naissance"></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Ville"></input>
            </div>
          </div>
        </form>
<h1 className="title-donateur">Vos récompenses</h1>
        <div className="badges">
          <div className="badge1 infobulle" aria-label="Donateur"></div>
          <div className="badge2 infobulle" aria-label="Parrain"></div>
          <div className="badge3 infobulle" aria-label="Ambassadeur"></div>
          <div className="badge4 infobulle" aria-label="Bronze"></div>
          <div className="badge5 infobulle" aria-label="Silver"></div>
          <div className="badge6 infobulle" aria-label="Gold"></div>
          <div className="badge7 infobulle" aria-label="Platinium"></div>
        </div>

        <div className="bouton-orange">
          <Link to="/Page7"><a href="#myModal" class="btn btn-primary btn-warning trigger-btn" data-toggle="modal">VALIDER </a></Link>
        </div>

        <div id="myModal" class="modal fade">
          <div class="modal-dialog modal-confirm">
            <div class="modal-content">
              <div class="modal-header">
                <div class="icon-box">
                  <h4 className="text-center">1</h4>
                </div>
              </div>
              <div class="modal-body">
                <h6 className="text-center">Niveau Donateur</h6>
                <h4 class="modal-title">Merci pour votre Don !</h4>
                <p class="text-center">Contrôlez vos emails, afin de récupérer votre reçu fiscal.</p>
              </div>
              <div class="modal-footer">
                <button type="submit" class="btn btn-success btn-block" data-dismiss="modal" onClick={() => this.props.history.push("/Page7")}>OK</button>
              </div>
            </div>
          </div>
        </div>       

        <iframe
          className="video-université" 
          width="100%" 
          height="240px" 
          margin-bottom="20px"
          src="https://www.youtube.com/embed/wFkp87xtft8" 
          frameborder="0" 
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>

      </div>
    </div>
    )
  }
}
