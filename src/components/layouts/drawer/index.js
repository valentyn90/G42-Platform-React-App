import React from 'react';
import menuToggle from '../../../assets/img/menu-toggle.png';
import logo from '../../../assets/img/logo.png';

const Drawer = () => {
  function openNav() {
    document.getElementById('g42sidenav').style.width = '350px';
  }

  function closeNav() {
    document.getElementById('g42sidenav').style.width = '0';
  }
  return (
    <>
      <div id="g42sidenav" className="sidenav">
        <a
          href="javascript:void(0)"
          className="closebtn"
          onClick={() => closeNav()}
        >
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
    </>
  );
};

export default Drawer;
