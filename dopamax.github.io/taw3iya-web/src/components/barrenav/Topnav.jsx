import { Component} from 'react';
import logo from '../../assets/img/logo_taw3iya.webp';
import Menubtn from '../../assets/img/three-dots-vertical.svg';
const Topnav=()=>{

    return (
      <nav className="navbar navbar-expand-lg navbar-light monheader fixed-top py-3">
      <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={logo} className="d-inline-block align-top p-2 bg-white" width="80" alt="Logo Taw3iya" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <img src={Menubtn} className="border-none" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mr-auto ul-element">
              <li className="nav-item">
              <a className="nav-link active mx-3 li-element a-class text-white" aria-current="page" href="/"><i className="mx-1 fa fa-home" aria-hidden="true"></i>Acceuil</a>
              </li>
              <li className="nav-item">
              <a className="nav-link mx-3 li-element a-class text-white" ><i className="mx-1 fa fa-briefcase" aria-hidden="true"></i>Nouveau dossier</a>
              </li>
              <li className="nav-item">
              <a className="nav-link mx-3 li-element a-class text-white"><i className="mx-1 fa fa-bullhorn" aria-hidden="true"></i>Application Taw3iya</a>
              </li>
              <li className="nav-item">
              <a className="nav-link mx-3 li-element a-class text-white" ><i className="mx-1 fa fa-bullhorn" aria-hidden="true"></i>A propos du dossier médical</a>
              </li>
             
          </ul>
          
         
          <ul className="navbar-nav me-3">
          <li className="nav-item dropdown myshadow-blur border-r-15 p-1">
              <a className="nav-link text-white fontCentury" href="#">
                  Se connecter
              </a>
          </li>
          </ul>
         </div>
      </div>
      </nav>
  
    );
}

export default Topnav;