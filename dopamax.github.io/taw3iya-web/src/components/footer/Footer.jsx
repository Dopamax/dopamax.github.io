import { Component} from 'react';
import logo from '../../assets/img/logo_taw3iya.webp';
import playtorepng from "../../assets/img/download-playstore-png.png";
import { Link } from 'react-router-dom';

const Footer=()=>{
    return (
<div> 
    <div className="monfooter mt-5">
      <div className="row">
          <div className="col-md-4">
              <img src={logo} className="img-fluid w-50 mx-4 p-3" alt="Taw3iya"/>
              <p className="text-white p-3 m-3 text-justify">Taw3iya est une plateforme avec accès WEB contient un dossier médical digital de référence et ce projet va aider à sensibiliser les gens et la plateforme va aider le corps médical et les urgentistes à connaitre rapidement si le patient souffre d'une allergie ou il a une maladie chronique, aussi le groupe  sanguin, poids et toutes les informations principales.</p>
          </div>
          <div className="col-md-4 my-auto">
                <div className="row my-auto">
                    <div className="col-md-12">
                    <ul className="list-unstyled d-flex align-items-start flex-column h5">
          <li className="mb-4 pb-2"><Link className="text-start text-white text-decoration-none" to="/Nouveaudossier">Nouveau dossier</Link></li>
          <li className="mb-4 pb-2"><a className="text-start text-white text-decoration-none" href="#">Se connecter</a></li>
          <li className="mb-4 pb-2"><a className="text-white text-decoration-none" href="#">A propos du dossier médical</a></li>
          <li className="mb-4 pb-2"><Link className="text-white text-decoration-none" to="/Conditions">Conditions d'utilisation</Link></li>
        </ul>
                    </div>
                </div>
          </div>
          <div className="col-md-4 my-auto">
                <div className="row my-auto">
                    <div className="col-md-12">
                    <ul className="list-unstyled d-flex align-items-start flex-column h5">
          <li className="mb-4 pb-2"><a className="text-start text-white text-decoration-none" href="#">Télécharger l'application</a></li>
          <li className="mb-4 pb-2"><a className="text-start text-white text-decoration-none" href="https://play.google.com/store/apps/details?id=com.sensibilisationapp.com" target="_blank">
           <img src={playtorepng} width="180px" alt="Télécharger Taw3iya" />
           </a></li>
        </ul>
                    </div>
                </div>
          </div>
      </div>
  </div>
  <div className="border p-5 pt-3 bg-primary" fluid="true">
      <div className="row">
          <div className="col-md-12">
              <h6 className="text-center fontCentury text-white"> Tous droits réservés &copy; Développé par <a className="text-warning" href="http:\\www.devbinary.c1.biz" target="_blank" rel="noopener noreferrer"> Devbinary</a> 2021</h6>
          </div>
      </div>
                  
  </div>
</div>
 
    );

}

export default Footer;