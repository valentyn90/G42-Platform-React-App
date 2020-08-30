import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import logo from '../../assets/img/logo.png';
import menuToggle from '../../assets/img/menu-toggle.png';
import httpClient from '../../api/api';
import { countryList } from '../../assets/data';

const FighterProfile = () => {
  const [weightClassOption, setweightClassOption] = useState([]);
  const [activeYearsOption, setActiveYearsOption] = useState([]);
  const [fighterOption, setFighterOptions] = useState([]);
  const formik = useFormik({
    initialValues: {
      weight_class: '',
      active_years: '',
      stance: '',
      country: '',
      fighter: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  function openNav() {
    document.getElementById('g42sidenav').style.width = '350px';
  }

  function closeNav() {
    document.getElementById('g42sidenav').style.width = '0';
  }
  useEffect(() => {
    httpClient
      .get('/rank/weight')
      .then((res) => {
        setweightClassOption(res.data);
      })
      .catch((err) => {
        console.error(err);
      });

    httpClient
      .get('/socialmedia/all')
      .then((res) => {
        setFighterOptions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  useEffect(() => {
    if (formik.values.weight_class !== '') {
      httpClient
        .get(`/rank/date?weight_class=${formik.values.weight_class}`)
        .then((res) => {
          setActiveYearsOption(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [formik.values.weight_class]);

  return (
    <section id="profiling-page">
      <div id="g42sidenav" className="sidenav">
        <a className="closebtn" onClick={() => closeNav()}>
          &times;
        </a>
        <a href="#">fighter profiling</a>
        <a href="#">post - combat analysis</a>
        <a href="#">real-time combat analysis</a>
        <a href="#">championship</a>
      </div>
      <span style={{ cursor: 'pointer' }} onClick={() => openNav()}>
        <img src={menuToggle} className="toggle-icon" />
      </span>
      <span>
        <img src={logo} />
      </span>
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="profiling-page-title">
              <h1>
                fighter <br />
                <span>profiling</span>
              </h1>
            </div>
          </div>
          <div className="col-md-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="fighter-selection">
                <h3>select fighter</h3>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.weight_class}
                  name="weight_class"
                >
                  <option value="" selected disabled hidden>
                    Weight class
                  </option>
                  {weightClassOption.map((wc) => (
                    <option key={wc}>{wc}</option>
                  ))}
                </select>
                <select
                  className="active-years"
                  onChange={formik.handleChange}
                  value={formik.values.active_years}
                  name="active_years"
                >
                  <option value="" selected disabled hidden>
                    active years
                  </option>
                  {activeYearsOption.map((activeYear) => (
                    <option key={activeYear}>{activeYear}</option>
                  ))}
                </select>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.stance}
                  name="stance"
                >
                  <option value="" selected disabled hidden>
                    stance
                  </option>
                  <option>orthodox</option>
                  <option>southpaw</option>
                </select>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  name="country"
                >
                  <option value="" selected disabled hidden>
                    country
                  </option>
                  {countryList.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
                <select
                  onChange={formik.handleChange}
                  value={formik.values.fighter}
                  name="fighter"
                >
                  <option value="" selected disabled hidden>
                    fighter
                  </option>
                  {fighterOption.map((fighter) => (
                    <option key={fighter.athlete}>{fighter.athlete}</option>
                  ))}
                </select>
                <button type="submit" className="fight-on" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FighterProfile;
