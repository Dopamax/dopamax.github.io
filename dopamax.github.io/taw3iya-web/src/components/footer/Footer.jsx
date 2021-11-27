import { Component} from 'react';
import logo from '../../assets/img/logo_taw3iya.webp';

const Footer=()=>{
    return (
<div> 
    <div className="monfooter mt-5">
      <div className="row">
          <div className="col-md-4">
              <img src={logo} className="img-fluid w-50 mx-4 p-3" alt="Taw3iya"/>
              <p className="text-white p-3 m-3 text-justify">Taw3iya est une plateforme avec accès WEB contient un dossier médical digital de référence et ce projet va aider à sensibiliser les gens et la plateforme va aider le corps médical et les urgentistes à connaitre rapidement si le patient souffre d'une allergie ou il a une maladie chronique, aussi le groupe  sanguin, poids et toutes les informations principales.</p>
          </div>
          <div className="col-md-4">
          <div className="mx-auto my-auto mx-5 px-5 my-5 py-5">
                  <h3 className="text-white">Info</h3>
                  <a href="https://www.jobbsmaroc.com/" target="_blank" rel="noopener noreferrer"><h5 className="text-white">www.jobbsmaroc.com</h5></a>
          </div>
          </div>
          <div className="col-md-4">
              <div className="mx-auto my-auto mx-5 px-5 my-5 py-5">
                  <h4 className="text-white">Suivez-nous</h4>
                  <a href="https://www.facebook.com/Jobbsmaroc-103540531642199/" target="_blank" rel="noopener noreferrer">
                  <span className="fa-stack fa-lg text-white">
                  <i className="fa fa-facebook-square fa-3x" aria-hidden="true"></i>
                  </span>
                  </a>
                  <h4 className="text-white mt-5 ">Email: </h4>
                  <h5 className="text-white fontCentury">contact@jobbsmaroc.com</h5>
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