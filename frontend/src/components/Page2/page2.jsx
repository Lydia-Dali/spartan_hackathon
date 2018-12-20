import React, { Component } from 'react'

import { Link } from "react-router-dom";

import './page2.css'

import image3 from '../../images/image_page_2.jpg'
import image4 from '../../images/gps-logo-png-1.png'

export default class page2 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <img className="image-meeting" src={image3} alt="diplomés"/>
        <div class="container-fluid">
          <div className="row gap">
            <div className="col-5 checkBox">
              <h3>Montant</h3>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">1 €</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">10 €</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">100 €</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Ce que vous voulez</label>
              </div>
              <div className="row gap">
                <div className="col-5 ">valider</div>
                <div className="col-5 "><img className="image-location" src={image4} alt="location" /></div>
              </div>
            </div>
            <div className="col-5 checkBox">
              <h3>Option</h3>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">1 fois</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Chaque mois</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Reçu fiscal</label>
              </div>
              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">Carte Donnateur</label>
              </div>
              <div className="row gap">
                <div className="col-2 ">Total</div>
                <div className="col-5 "><input className="totalBox"></input></div>
              </div>
            </div>
          </div>
          <div className="bouton-orange">
            <Link to="/Page3"><a href="#" class="btn btn-primary btn-warning">SUIVANT</a></Link>
            <p className="p-impacter">Impacter le monde !</p>
          </div>
        </div>
      </div>
    )
  }
}
