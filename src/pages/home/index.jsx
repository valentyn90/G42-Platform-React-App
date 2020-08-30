import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import video from '../../assets/video/vid.mp4';

class Home extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <h3 className="home-title">UFC Data Intelligence Platform</h3>
          <div className="fight-btn-div">
            <Link to="/analysis" className="fight-btn" />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
