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
        
        {/* <form className="marginRowGender">
  <div class="form-row align-items-center ">
    <div class="col-auto my-1">
      <label class="mr-sm-2 sr-only" for="inlineFormCustomSelect">Preference</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Madame/Monsieur</option>
        <option value="1">Madame</option>
        <option value="2">Monsieur</option>
        
      </select>
    </div>
    </div>
    </form> */}
         

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
          <Link to="/Page7"><a href="#" class="btn btn-primary btn-warning">VALIDER </a></Link>
        </div>

       
        </div>
      </div>
    )
  }
}
