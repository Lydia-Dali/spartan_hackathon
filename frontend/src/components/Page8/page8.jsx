import React, { Component } from 'react'

import image9 from '../../images/image_9.jpg'

import './page8.css'

export default class page8 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <img className="image-accolade" src={image9} alt="accolade-ronde" />
        <p className="p-top">Etre ambassadeur c'est s'impliquer dans le
développement de l'école HARMONIA21 en partageant la philosophie d'entraide au
 développement d'activité dans l'économie sociale et solidaire.</p>
        <form className="form-checkbox">
          <label class="container-label">
            <label for="accepter">J'autorise les publications</label>
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
          <label class="container-label">
            <label for="accepter">J'accepte les conditions générales</label>
            <input type="checkbox"/>
            <span class="checkmark"></span>
          </label>
        </form>

        <div className="bouton-orange">
          <a href="#" class="btn btn-primary btn-warning">VALIDER</a>
          <p className="p-impacter">Impacter le monde !</p>
        </div>
      </div>
    )
  }
}
