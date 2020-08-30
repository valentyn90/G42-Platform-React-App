import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import khabib from '../../assets/img/khabib.png';
import logo from '../../assets/img/logo.png';
import realCombatAnalysis from '../../assets/img/realtime-combat-analysis.png';
import championship from '../../assets/img/championship.png';
import combatAnalysis from '../../assets/img/combat-analysis.png';
import wave from '../../assets/img/wave.gif';

const Analysis = () => {


  return (
    <>
      <div className="container">
        <div className="logo" style={{ marginTop: '5%', marginBottom: '30px' }}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="row">
          <div className="col-md-8">
            <div className="analysis-item-left">
              <Link to="#">
                <figure style={{ marginBottom: '30px' }}>
                  <img src={combatAnalysis} alt="profile" />
                  <figcaption>post - combat analysis</figcaption>
                </figure>
              </Link>
              <div className="row">
                <div className="col-md-6">
                  <Link to="#">
                    <figure>
                      <img
                        src={championship}
                        alt="profile"
                        style={{ height: '320px' }}
                      />
                      <figcaption>championship</figcaption>
                    </figure>
                  </Link>
                </div>
                <div className="col-md-6">
                  <Link to="#">
                    <figure>
                      <img
                        src={realCombatAnalysis}
                        alt="profile"
                        style={{ height: '320px' }}
                      />
                      <figcaption style={{ width: '225px', marginTop: '-37%' }}>
                        real-time combat analysis
                      </figcaption>
                    </figure>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="analysis-item-right">
              <Link to="/fighter-profile">
                <figure>
                  <img src={khabib} alt="profile" />
                  <figcaption>Fighter Profiling</figcaption>
                </figure>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section id="wave">
        <img src={wave} alt="wave" />
      </section>
    </>
  );
};

export default Analysis;
