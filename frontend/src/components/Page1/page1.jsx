import React, { Component } from 'react'

import { Link } from "react-router-dom";

import './page1.css'

import image2 from '../../images/image_page_1.jpg'
import image2bis from '../../images/Anatole_France_1921.png'

export default class page1 extends Component {
  render() {
    return (
      <div>
        <header>
          <div className="header-nav">
            <h1 className="title-header">HARMONIA21.ORG</h1>
          </div>
        </header>
        <div className="margin">
          <div>
            <h1 className="title_description">Ecole Harmonia 21</h1>
            <p>Harmonia21 est l'école du 21 ème siècle qui forme et accompagne chaque année 100 élèves répartis par classe de 20.</p>
            <h1 className="title_description">Former à la réussite</h1>
            <p>Former des créateurs d'activité à fort potentiel d'emploi dans le monde de l'Economie Sociale et Solidaire ESS.</p>

            <div className="bouton-orange">
              <Link to="/Page2"><a href="#" class="btn btn-primary btn-warning">JE DONNE MES IMPOTS </a></Link>
              <p className="p-impacter">Impacter le monde !</p>
            </div>
          </div>

          <img className="image-diplome" src={image2} alt="diplomés" />

          <div>
            <h1 className="title_description">De l'idée au projet</h1>
            <p>Concrétiser des idées est le but de la formation. donner les moyens de le faire est la méthode.
                Construire un financement participatif, gérer la communication, le marketing,adapter le produit au marché et à la demande.
            </p>

            <h1 className="title_description">Un parcours en 5 années</h1>

            <ul>
              <li className="liste_decimal">Internat: 1 an.</li>
              <li className="liste_decimal">Apprentissage terrain: 3 x 2 mois.</li>
              <li className="liste_decimal">Mentorat: 3 ans.</li>
            </ul>

            <p>Aprés une année de cours lélève est mis en situation dans des structures de même style que son projet dans 3 entreprises partenaires dont les responsables deviendront les mentors ressources pour les 3 années de démarage du projet.</p>

            <h1 className="title_description">Une bourse starter</h1>
            <p>Pour aider chaque élève Harmonia21 donne une bourse en capital d'amorçage complémentaire au financement participatif de l'étudiant ainsi qu'un cautionnement bancaire si nécessaire.
                Chaque étudiant démarre sont projet avec 10 000 € son site internet et son application web.
  
                    </p>

            <div className="bouton-orange">
              <Link to="/Page2"><a href="#" class="btn btn-primary btn-warning">JE DONNE MES IMPOTS </a></Link>
              <p className="p-impacter">Impacter le monde !</p>
            </div>

            

          </div>
          </div> 
          <div className="anatoleFrance">
          <p className="france">" Pour accomplir de grandes choses, il ne suffit pas uniquement d'agir, mais aussi de rêveranatoleFrance ; pas seulement de planifier mais aussi d'y croire" <br/> (Anatole France) #Harmonia21</p>
          </div>
          

        </div>
       



      
    )
  }
}
