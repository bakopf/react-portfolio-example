import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faLaptopCode, faMobileAlt, faCode } from '@fortawesome/free-solid-svg-icons';


function Welcome() {
  return (
    <section id="welcome" className="welcome d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text-container">
              <h1> Welcome to Your Website</h1>
              <p> Your welcome text goes here.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="box-container d-flex justify-content-between">
              <div className="box text-center bg-transparent">
                <FontAwesomeIcon icon={faDesktop} className="icon orange-text mb-2" />
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet</p>
              </div>
              <div className="box text-center bg-transparent">
                <FontAwesomeIcon icon={faLaptopCode} className="icon orange-text mb-2" />
                <h3>Headline Lorem</h3>
                <p>Quid igitur dubitamus in tota eius</p>
              </div>
              <div className="box text-center bg-transparent">
                <FontAwesomeIcon icon={faMobileAlt} className="icon orange-text mb-2" />
                <h3>Headline Example</h3>
                <p>Venit ad extremum</p>
              </div>
              <div className="box text-center bg-transparent">
                <FontAwesomeIcon icon={faCode} className="icon orange-text mb-2" />
                <h3>This is a longer headline</h3>
                <p>Qui ita affectus - beatum esse</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
