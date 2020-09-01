import React from 'react';
import { useHistory } from 'react-router-dom';
import Drawer from '../../components/layouts/drawer';
import SelectionForm from '../../components/form/SelectionForm';

const FighterProfiling = () => {
  const history = useHistory();

  const handleFormSubmit = (values) => {
    history.push(`/fighter-profile?fighter=${values.fighter}`);
  };
  return (
    <section id="profiling-page">
      <Drawer />
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
            <SelectionForm handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FighterProfiling;
