import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import menuToggle from '../../assets/img/menu-toggle.png';
import australiaFlag from '../../assets/img/australia-flag.png';
import weightClassIcon from '../../assets/img/weight-class-icon.png';
import activeYearsImg from '../../assets/img/active-years.png';
import stanceIcon from '../../assets/img/stance-icon.png';
import countryIcon from '../../assets/img/country-icon.png';
import whitteker from '../../assets/img/whitteker.png';
import httpClient from '../../api/api';
import { countryList } from '../../assets/data';

const FighterProfiling = () => {
  const history = useHistory();
  const [weightClassOption, setweightClassOption] = useState([]);
  const [activeYearsOption, setActiveYearsOption] = useState([]);
  const [fighterOption, setFighterOptions] = useState([]);
  const [tempFighters, setTempFighters] = useState([]);
  const formik = useFormik({
    initialValues: {
      weight_class: '',
      active_years: '',
      stance: '',
      country: '',
      fighter: '',
    },
    onSubmit: (values) => {
      history.push(`/fighter-profile?fighter=${values.fighter}`);
      // alert(JSON.stringify(values, null, 2));
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
        console.log(res.data);
        console.log(tempFighters);
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
                fighter 
{' '}
<br />
                <span>profiling</span>
              </h1>
            </div>
          </div>
          <div className="col-md-5">
            <form onSubmit={formik.handleSubmit}>
              <div className="fighter-selection">
                <h3>select fighter</h3>
                <img src={weightClassIcon} className="weight-icon" />
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
                <img src={activeYearsImg} className="weight-icon" />
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
                <img src={stanceIcon} className="weight-icon" />
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
                <img src={countryIcon} className="weight-icon" />
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

                <input
                  onChange={(e) => {
                    setTempFighters(
                      fighterOption.filter((f) =>
                        f.athlete
                          .toLowerCase()
                          .match(new RegExp(e.target.value.toLowerCase()))
                      )
                    );
                    console.log(tempFighters);
                    formik.handleChange('fighter');
                    formik.setFieldValue('fighter', e.target.value);
                  }}
                  value={formik.values.fighter}
                  name="fighter"
                  type="text"
                  placeholder="type fighter name"
                />
                <ul>
                  {tempFighters.map((fighter) => (
                    <li
                      onClick={() => {
                        formik.handleChange('fighter');
                        formik.setFieldValue('fighter', fighter.athlete);
                        setTempFighters([])
                      }}
                      style={{ color: '#fff' }}
                      key={fighter.athlete}
                    >
                      {fighter.athlete}
                    </li>
                  ))}
                </ul>
                <button type="submit" className="fight-on" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FighterProfiling;
