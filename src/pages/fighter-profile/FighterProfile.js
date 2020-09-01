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
import ProfileCard from "../../components/ProfileCard";
import Drawer from "../../components/layouts/drawer";
import SelectionForm from "../../components/form/SelectionForm";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
const FighterProfile = () => {
    const [fighter, setFighter] = useState(null);
    const history = useHistory()
    let params = new URLSearchParams(history.location.search);
    console.log(history.location)
    const handleFormSubmit = (values) => {
        history.push(`/comparison?fighter=${params.get('fighter')}&fighter2=${values.fighter}`);
    }
    useEffect(()=>{
        if(history.location.search){
            httpClient.get('/fighter/info_and_detail',{fighter_name: params.get('fighter')}).then(res=>{
                console.log(res.data)
                setFighter(res.data)
            }).catch(err=>{console.error(err)})
        }
    },[history.location])


    return <section id="fighter-profile-page">
        <Drawer/>
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <ProfileCard className="fighter-bio" fighter={fighter}/>
                </div>
                <div className="col-md-5">
                    <SelectionForm handleFormSubmit={handleFormSubmit}/>

                </div>
            </div>
        </div>
    </section>

}

export default FighterProfile;