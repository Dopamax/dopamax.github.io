import { Component } from 'react';
import Layout from '../../components/layout/Layout';
//import doctor_img from '../../assets/img/doctor.svg';

const Nouveaudossier=()=>{

    return (
        <div>
            <Layout>
                <div className="row my-5">
                    <div className="col-md-12 mt-5 pt-5">
                        <h2 className="h1 text-center">Nouveau dossier</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <form action="">
                            <div className="mb-3">
                              <input type="text" name="telephone" id="telephone" className="form-control" placeholder="Téléphone" aria-describedby="telephoneHelp"/>
                            </div>
                            <div className="mb-3">
                              <input type="text" name="nomprenom" id="nomprenom" className="form-control" placeholder="Nom et prénom" aria-describedby="nomprenomHelp"/>
                            </div>
                            <div className="mb-3">
                              <input type="email" name="email" id="email" className="form-control" placeholder="Email" aria-describedby="emailHelp"/>
                            </div>
                            <div className="mb-3">
                              <input type="password" name="motdepasse" id="motdepasse" className="form-control" placeholder="Mot de passe" aria-describedby="motdepasseHelp"/>
                            </div>
                            <div className="mb-3">
                              <input type="password" name="motdepasse_check" id="motdepasse_check" className="form-control" placeholder="Confirmer le mot de passe" aria-describedby="MotdepasseHelp"/>
                            </div>
                            <div className="mb-3">
                              <label for="maladie_chronique" className="form-label my-1 mr-5">Avez-vous une maladie chronique ?</label>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="maladie_chronique" id="maladie_chronique_oui" value="oui"/>
                                <label className="form-check-label" for="maladie_chronique_oui">Oui</label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="maladie_chronique" id="maladie_chronique_non" value="non"/>
                                <label className="form-check-label" for="maladie_chronique_non">Non</label>
                                </div>
                            </div>
                            <div className="mb-3">
                              <label for="" className="form-label my-1 mr-5">Avez-vous une allergie ?</label>
                              <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="allergie" id="allergie_oui" value="oui"/>
                                <label className="form-check-label" for="allergie_oui">Oui</label>
                                </div>
                                <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="allergie" id="allergie_non" value="non"/>
                                <label className="form-check-label" for="allergie_non">Non</label>
                                </div>
                            </div>
                            <div className="mb-3">
                              <select className="form-control" name="" id="">
                                <option>Votre groupe sanguin</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                                <option>B+</option>
                                <option>B-</option>
                              </select>
                            </div>

                            <button type="submit" className="btn btn-primary px-5 mb-3">Enregistrer</button>
                        </form>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </Layout>
        </div>
    );
}

export default Nouveaudossier;