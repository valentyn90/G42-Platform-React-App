/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import { useFormik } from 'formik';
import Select from 'react-select'
import logo from '../../assets/img/logo.png';
import menuToggle from '../../assets/img/menu-toggle.png';
import australiaFlag from '../../assets/img/australia-flag.png';
import weightClassIcon from '../../assets/img/weight-class-icon.png';
import activeYearsImg from '../../assets/img/active-years.png';
import stanceIcon from '../../assets/img/stance-icon.png';
import countryIcon from '../../assets/img/country-icon.png';
import httpClient from "../../api/api";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const FighterProfile = () => {
    const [fighter, setFighter] = useState(null);
    const history = useHistory()
    console.log(history.location.search)
    useEffect(()=>{
        if(history.location.search){
            httpClient.get('/fighter/info_and_detail',{fighter_name: history.location.search}).then(res=>{
                console.log(res.data)
                setFighter(res.data)
            }).catch(err=>{console.error(err)})
        }
    },[history.location.search])
  function openNav() {
    document.getElementById('g42sidenav').style.width = '350px';
  }

  function closeNav() {
    document.getElementById('g42sidenav').style.width = '0';
  }

    return <section id="fighter-profile-page">
        <div id="g42sidenav" className="sidenav">
            <a href="javascript:void(0)" className="closebtn" onClick={()=>closeNav()}>&times;</a>
            <a href="#">fighter profiling</a>
            <a href="#">post - combat analysis</a>
            <a href="#">real-time combat analysis</a>
            <a href="#">championship</a>
        </div>
        <span style={{cursor:'pointer'}} onClick={()=>openNav()}>
			<img src={menuToggle} className="toggle-icon" />
		</span>
        <span>
			<img src={logo} />
		</span>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="fighter-bio">
                        <div className="bio-content">
                            <h1>{fighter && fighter.info.fighter_name}</h1>
                            <hr />
                                <h3><img src={australiaFlag} /> the reaper</h3>
                                <hr />
                                    <div className="dob">
                                        Date of Birth <span>{fighter && fighter.info.dob}</span>
                                    </div>
                                    <div className="weight-class">
                                        <div>{fighter && fighter.detail.win_method_summary['ko/tko']}<span>ko/tko</span></div>
                                        <div>{fighter && fighter.detail.win_method_summary.submission}<span>submission</span></div>
                                        <div>{fighter && fighter.detail.win_method_summary.decision}<span>decision</span></div>
                                    </div>
                                    <div className="winning-percent">
                                        <p>Average Win <span>{Math.trunc(fighter && fighter.detail.win_rate * 100)}%</span></p>
                                    </div>
                                    <div className="others">
                                        <div>Stance <span>{fighter && fighter.info.stance}</span></div>
                                        <div>Height <span>{fighter && fighter.info.height}m</span></div>
                                        <div>Reach <span>{fighter && fighter.info.reach}m</span></div>
                                        <div>Leg Reach <span>{fighter && fighter.info.attack_leg}m</span></div>
                                    </div>
                        </div>
                        <button type="button" className="more-stat"></button>
                        <img src={fighter && fighter.info.bodyImageURL} className="fighter-pic" />
                    </div>
                </div>
                <div className="col-md-5">
                    <div  className="fighter-selection">
                        <h2>walter weight</h2>
                        <h3>select opponent</h3>
                        <img src={weightClassIcon} className="weight-icon" />
                        <select>
                            <option value="" selected disabled hidden>WEIGHT CLASS</option>
                            <option>flyweight</option>
                            <option>bantamweight</option>
                            <option>featherweight</option>
                        </select>
                        <img src={activeYearsImg} className="weight-icon" />
                        <select className="active-years">
                            <option value="" selected disabled hidden>ACTIVE YEARS </option>
                            <option>1993-2000</option>
                        </select>
                        <img src={stanceIcon} className="weight-icon" />
                        <select>
                            <option value="" selected disabled hidden>stance</option>
                            <option>orthodox</option>
                            <option>southpaw</option>
                        </select>
                        <img src={countryIcon} className="weight-icon" />
                            <select>
                                <option value="" selected disabled hidden>country</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                            </select>
                        <input type="text" placeholder="type fighter name" />
                        <button type="submit" className="fight-on"></button>
                    </div>
                </div>
            </div>
        </div>
    </section>

}

export default FighterProfile;