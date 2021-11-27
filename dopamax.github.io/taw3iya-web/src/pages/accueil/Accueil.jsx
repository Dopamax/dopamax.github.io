import { Component } from 'react';
import Layout from '../../components/layout/Layout';
import doctor_img from '../../assets/img/doctor.svg';
import scr_app1 from '../../assets/img/scr_app1.png';
import scr_app2 from '../../assets/img/scr_app2.png';
import { Link } from 'react-router-dom';

const Accueil =() =>{


    return (
        <div>
            <Layout>
                <div className="jumbotron mt-5">
                    <div className="row mt-4">
                        <div className="col-md-6 my-auto">
                            <div className="row">
                                <div className="col-md-12">
                                <h2 className="display-3 fontCentury">
                                    Dossier médical
                                </h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p className="text-muted">
                                        Vous pouvez dès maintenant déposer votre inscription dans le dossier médical en toute sécurité et en toute confidentialité
                                    </p>
                                </div>
                            </div>
                            
                        </div>

                        <div className="col-md-6">
                            <img src={doctor_img} className="img-fluid" alt="doctor" />
                        </div>
                    </div>
                </div>

                <div className="jumbotron monheader">
                    <div className="row my-3">
                        <div className="col-md-12 d-flex justify-content-center">
                            <h4 className="display-7 text-white">
                                Evidement, Notre priorité est de vous protéger, pour cela nous avons mis à votre disposition un outil pour cet objectif
                            </h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mx-auto d-flex justify-content-center">
                            <Link to={""} className="btn btn-primary mx-auto px-5 border border-dark">S'inscrire</Link>
                        </div>
                    </div>
                </div>

<div class="row my-auto">
    <div class="col-md-12">
        <div class="jumbotron">
            <div class="row mx-auto my-5 py-4 d-flex justify-content-center">
    <div class="col-12">
        <div class="row">
            <div class="col-md-6 my-auto">
                <div class="row">
                    <div class="col-12">
                        <h2 class="text-center fontCentury my-5">Téléchargez l'application</h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <h4 class="fontCentury text-center my-4">Apprenez et téléchargez une application de sensibilisation pour prévenir le virus corona</h4>
                    </div>
                </div>
              
            </div>
            <div class="col-md-6">
                <div className="row d-flex justify-content-between">
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={scr_app1} className="p-2" alt="screen 1" height="450px" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src={scr_app2} className="p-2" alt="screen 2" height="450px" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
            </Layout>
        </div>
    )
}

export default Accueil;