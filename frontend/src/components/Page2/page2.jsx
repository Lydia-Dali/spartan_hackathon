import React, { Component } from 'react'

import { Link } from "react-router-dom";

import './page2.css'

import image3 from '../../images/image_page_2.jpg'
import logoSmall from "../../images/harmonia21_small.png";

export default class page2 extends Component {
  render() {
    return (
      <div className="min-view">
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
            <img className="logo-harmonia-small" src={logoSmall} alt="logo-small"/>
          </div>
        </header>
        <img className="image-meeting" src={image3} alt="diplomés" />

          <div className="container-fluid">
          <h1 className="title_impot">Je donne mes impots</h1>
          
                    <div className="row gap">
                    <div className="col-5 checkBox">
                     <h5 className="page2Title">Montant</h5>

                     <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">0 €</label>
  </div>

  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">10 €</label>
  </div>
          
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">100 €</label>
  </div>
<p className="ceQueVousVoulez"></p>
  <div class="form-group cashbutton">
        <label for="money" class="col-sm-2 control-label"></label>
        <div class="col-sm-2">
        <select id="money1">
          <option>200 €</option>
          <option>250 €</option>
          <option>500 €</option>
          <option>1000 €</option>
          <option>2000 €</option>
          <option>3000 €</option>
          <option>4000 €</option>

        </select>          
          
        </div>
        </div>



  <div className="row gap">
                    <div className="col-5 "></div>
                    <div className="col-5 "></div>

                    </div> 
                    </div> 

                     <div className="col-5 checkBox">
                     <h5 className="page2Title"> Options</h5>
                     
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

          <h1 className="title_impot">Je donne mes impots</h1>

          <div className="row gap">
            <div className="col-5 checkBox">
              <h3>Montant</h3>

              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">0 €</label>
              </div>

              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">10 €</label>
              </div>

              <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
                <label class="form-check-label" for="exampleCheck1">100 €</label>
              </div>

              <div class="form-group">
                <label for="money" class="col-sm-2 control-label"></label>
                <div class="col-sm-2">
                  <select id="money1">
                    <option>Ce que vous voulez</option>
                    <option>150 €</option>
                    <option>200 €</option>
                    <option>250 €</option>
                    <option>500 €</option>
                    <option>1000 €</option>
                    <option>2000 €</option>
                    <option>3000 €</option>
                    <option>4000 €</option>
                  </select>
                </div>
              </div>

              <div className="row gap">
                <div className="col-5 "><button type="button">valider</button></div>
                <div className="col-5 "></div>
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
      </div>
      </div>

    )
  }
}
