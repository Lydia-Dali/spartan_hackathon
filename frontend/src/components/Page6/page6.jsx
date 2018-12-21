import React, { Component } from 'react'

import { Link } from "react-router-dom";

import './page6.css'

import image8 from '../../images/profil fake.png'
import image9 from '../../images/video.jpg'

export default class page6 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <div className="blue-container-profil">
        <img className="image-profil" src={image8} alt="versement-cb" />
        <form>
        <div className="row marginRow">
            <div className="col">
              <input type="text" class="form-control" ></input>
            </div>
            <div className="col">
              <input type="text" className="form-control" ></input>
            </div>
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
            <div className="col-9">
              <input type="text" className="form-control" placeholder="Ville *"></input>
            </div>
            <div className="col-3">
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

        <div className="badges">
          <div className="badge1"></div>
          <div className="badge2"></div>
          <div className="badge3"></div>
          <div className="badge4"></div>
          <div className="badge5"></div>
          <div className="badge6"></div>
          <div className="badge7"></div>
        </div>

        <div className="bouton-orange">
          <Link to="/Page7"><a href="#" class="btn btn-primary btn-warning">VALIDER </a></Link>
        </div>

        <img className="image-movie" src={image9} alt="movie" />
        </div>
      </div>
    )
  }
}
