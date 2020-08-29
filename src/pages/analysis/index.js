import React from "react";
import khabib from '../../assets/img/khabib.png';
import logo from '../../assets/img/logo.png';
import realCombatAnalysis from '../../assets/img/realtime-combat-analysis.png';
import championship from '../../assets/img/championship.png';
import combatAnalysis from '../../assets/img/combat-analysis.png';
const Analysis = () => {

    return(
        <div className="container">
            <div className="logo" style={{marginTop: '5%', marginBottom: '30px'}}>
                <a href="index.php"><img src={logo} /></a>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <div className="analysis-item-left">
                        <a href="#">
                            <figure style={{marginBottom: '30px'}}>
                                <img src={combatAnalysis} alt="profile" />
                                    <figcaption>post - combat analysis</figcaption>
                            </figure>
                        </a>
                        <div className="row">
                            <div className="col-md-6">
                                <a href="#">
                                    <figure>
                                        <img src={championship} alt="profile" style={{height: '320px'}} />
                                            <figcaption>championship</figcaption>
                                    </figure>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="#">
                                    <figure>
                                        <img src={realCombatAnalysis} alt="profile" style={{height: '320px'}} />
                                            <figcaption style={{width: '225px', marginTop: '-37%'}}>real-time combat
                                                analysis
                                            </figcaption>
                                    </figure>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="analysis-item-right">
                        <a href="#">
                            <figure>
                                <img src={khabib} alt="profile" />
                                    <figcaption>Fighter Profiling</figcaption>
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Analysis;