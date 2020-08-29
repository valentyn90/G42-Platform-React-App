import React from 'react';
import logo from '../../assets/img/logo.png';
import {Link} from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="logo">
          <Link to="/">
              <img src={logo} alt="logo"/>
          </Link>
        </div>
        <h3 className="home-title">UFC Data Intelligence Platform</h3>
        <div className="fight-btn-div">
          <Link to="/analysis" className="fight-btn" />
        </div>
      </div>
    );
  }
}
export default Home;
