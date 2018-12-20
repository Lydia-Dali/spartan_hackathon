import React, { Component } from 'react'

import image5 from '../../images/image_5.jpg'

import './page3.css'

export default class page3 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <div className="blue-container">
          <div class="container">
            <div class="login-form">        
              <form id="Login" className="login">
                <div classN="form-group">
                  <input type="email" class="form-control" id="inputEmail" placeholder="Adresse Email" />
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="inputPassword" placeholder="Mot de passe" />
                </div>
                <div class="forgot">
                  <a href="reset.html">Mot de passe oublié?</a>
                </div>
                <button type="submit" class="btn btn-primary">ME CONNECTER</button>
                <button type="submit" class="btn btn-warning btn-compte">Créer un compte</button>
              </form>
            </div>
          </div>
        </div>
        <img className="image-femme-assise" src={image5} alt="femme-assise"/>
      </div>
    )
  }
}
