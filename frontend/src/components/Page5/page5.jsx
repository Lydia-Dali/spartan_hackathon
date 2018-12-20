import image6 from '../../images/carte bleu.PNG'
import image7 from '../../images/merci.jpg'
import React, { Component } from 'react'
import './page5.css'


export default class page5 extends Component {
  render() {
    return (
      <div>
          <header>
              <div className="header-nav">
              <h1 className="title-header">HARMONIA21.ORG</h1>
              </div>
          </header>   

          <img className="image-cb" src={image6} alt="versement-cb"/>

          <div className="row gap">
                    <div className="col-7 totalBox1">Montant du paiement</div>
                    <div className="col-2 "><input className="totalBox" placeholder="100 €" /></div>

                    </div> 

          <div className="bouton-orange">
<a href="#" class="btn btn-primary btn-warning">VALIDER </a>

</div>

          <img className="image-thankYou" src={image7} alt="thankYou"/>
        
      </div>
    )
  }
}
