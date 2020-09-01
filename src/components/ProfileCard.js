/* eslint-disable */
import React from "react";
import australiaFlag from "../assets/img/australia-flag.png";

const ProfileCard = ({fighter, className}) =>{
    return(
        <div className={className}>
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
    )
}
export default ProfileCard