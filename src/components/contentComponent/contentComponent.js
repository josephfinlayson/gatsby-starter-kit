import React from 'react'
import { data } from "../../helpers/content"
import "./contentComponent.scss"


const ContentComponent = props => (
      <div className="was-ist-versichert__content row">
        <div className="col-xs-24 col-sm-24 col-md-24 col-lg-24">
          <div className="was-ist-versichert-box">
            <div className="row">
              <div className="col-xs-20 col-sm-20 col-md-20 col-lg-20">
                <h3 className="was-ist-versichert-box__title">
                  {props.headline}
                </h3>
                <p className="was-ist-versichert-box__content">
                  {props.text}

                </p>
              </div>
              <div className="was-ist-versichert-box__icon-container text-center col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <img className="was-ist-versichert-box__icon icon--big img-responsive text-center" src={props.iconpath}
                     alt="Cyberkriminalität Icon" />
              </div>
            </div>
            <div className="">
              <div className="collapse" id="cyber-collapse">
                <ul className="list--tick-circle">
                  <li>
                    <p>
                      Phishing nennt man es, wenn Täter sich mit Hilfe gefälschter E-Mails Zugangs- und Identifikationsdaten
                      verschaffen.
                    </p>
                  </li>
                  <li>
                    <p>
                      Versichert ist die unmittelbar resultierende Vermögenseinbuße bzw. der abgebuchte Geldbetrag.
                    </p>
                  </li>
                </ul>
                <a className="link link--plus link__more-info" data-toggle="modal" data-target="#cyberkriminalitaetModal">
                  Mehr zu Cyberkriminalität
                </a>
              </div>
              <p className="text-center was-ist-versichert__mehr-erfahren">
                <a className="collapsed link link--plus link__more-info link__more-info--collapse" data-toggle="collapse"
                   href="#cyber-collapse"
                   role="button" aria-expanded="false" aria-controls="cyber-collapse">
                  Mehr erfahren
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

)

export default ContentComponent
