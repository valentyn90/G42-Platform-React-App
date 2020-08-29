import React from 'react';
import logo from '../../assets/img/logo.png';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="logo">
          <a href="/">
              <img src={logo} />
          </a>
        </div>
        <h3 className="home-title">UFC Data Intelligence Platform</h3>
        <div className="fight-btn-div">
          <a href="/analysis" className="fight-btn" />
        </div>
      </div>
    );
  }
}
export default Home;
