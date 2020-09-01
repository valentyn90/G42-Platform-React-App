import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import httpClient from '../../api/api';
import ProfileCard from '../../components/ProfileCard';
import Drawer from '../../components/layouts/drawer';
import Switch from '../../components/ToggleSwitch';

const Comparison = () => {
  const [fighter, setFighter] = useState(null);
  const [fighter1, setFighter1] = useState(null);
  const [enabled, setEnable] = useState(false);
  const [championEnabled, setChampionEnable] = useState(false);
  const history = useHistory();

  const toggleActivityEnabled = (value) => {
    console.log(value);
    setEnable(!enabled);
  };
  const toggleChampion = (value) =>{
    setChampionEnable(!championEnabled)
  }

  const params = new URLSearchParams(history.location.search);
  useEffect(() => {
    if (history.location) {
      httpClient
        .get('/fighter/info_and_detail', {
          fighter_name: params.get('fighter'),
        })
        .then((res) => {
          console.log(res.data);
          setFighter(res.data);
        })
        .catch((err) => {
          console.error(err);
        });

      httpClient
        .get('/fighter/info_and_detail', {
          fighter_name: params.get('fighter2'),
        })
        .then((res) => {
          console.log(res.data);
          setFighter1(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [history.location]);

  return (
    <section id="fighter-profile-page">
      <Drawer />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <ProfileCard className="fighter-comparison-bio" fighter={fighter} />
          </div>
          <div className="col-md-2">
            <div className="fight-type">
              <h1 className="name">welter weight</h1>
              <div className="d-flex switch-box">
                <Switch
                  theme=""
                  className="d-flex"
                  enabled={enabled}
                  onStateChanged={() => toggleActivityEnabled()}
                />
                <span className="switch-text">
                  {enabled ? '3 ROUND' : '5 ROUND'}
                </span>
              </div>
              <div className="d-flex switch-box">
                <Switch
                  theme=""
                  className="d-flex"
                  enabled={championEnabled}
                  onStateChanged={() => toggleChampion()}
                />
                {/* eslint-disable-next-line no-undef */}
                <span className="switch-text">
                  {championEnabled ? 'NON CHAMPIONSHIP' : 'CHAMPIONSHIP'}
                </span>
              </div>
              <button type="button" className="fight-btn" />
            </div>
          </div>
          <div className="col-md-5">
            <ProfileCard className="fighter2-bio" fighter={fighter1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
