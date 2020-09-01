import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import weightClassIcon from '../../assets/img/weight-class-icon.png';
import activeYearsImg from '../../assets/img/active-years.png';
import stanceIcon from '../../assets/img/stance-icon.png';
import countryIcon from '../../assets/img/country-icon.png';
import { countryList } from '../../assets/data';
import httpClient from '../../api/api';

const weightClassOptions = [
  'Bantamweight',
  'Featherweight',
  'Flyweight',
  'Heavyweight',
  'Light Heavyweight',
  'Lightweight',
  'Middleweight',
  'Pound-for-Pound',
  'Welterweight',
  "Women's Bantamweight",
  "Women's Strawweight",
  "Women's Flyweight",
  "Women's Featherweight",
];

const yearOptions = (startYear) => {
  const currentYear = new Date().getFullYear();
  const years = [];
  let tempYear = startYear || 1950;
  while (tempYear <= currentYear) {
    years.push(`${tempYear}-${tempYear++}`);
  }
  return years;
};

const SelectionForm = ({ handleFormSubmit }) => {
  const [tempFighters, setTempFighters] = useState([]);
  const [fighterOptions, setFighterOptions] = useState([]);
  useEffect(() => {
    httpClient
      .get('/socialmedia/all')
      .then((res) => {
        console.log(tempFighters);
        setFighterOptions(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const formik = useFormik({
    initialValues: {
      weight_class: '',
      active_years: '',
      stance: '',
      country: '',
      fighter: '',
    },
    onSubmit: (values) => {
      handleFormSubmit(values);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="fighter-selection">
      <h2>walter weight</h2>
      <h3>select opponent</h3>
      <img src={weightClassIcon} className="weight-icon" />
      <select
        onChange={formik.handleChange}
        value={formik.values.weight_class}
        name="weight_class"
      >
        <option value="" selected disabled hidden>
          WEIGHT CLASS
        </option>
        {weightClassOptions.map((wc) => (
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
          ACTIVE YEARS{' '}
        </option>
        {yearOptions(1950).map((year) => (
          <option key={year}>{year}</option>
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
      <select>
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
            fighterOptions.filter((f) =>
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
              setTempFighters([]);
            }}
            style={{ color: '#fff' }}
            key={fighter.athlete}
          >
            {fighter.athlete}
          </li>
        ))}
      </ul>
      <button type="submit" className="fight-on" />
    </form>
  );
};

SelectionForm.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  fighterOptions: PropTypes.array.isRequired,
};
export default SelectionForm;
