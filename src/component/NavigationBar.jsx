// import '../component/Component.css';
import ImgProfil from '../assets/img-profil.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
// import '../admin/main.js';

function Navigation(props) {

  return (
    <div>
      <nav>
        <div className="navbar">
          <h1>{props.text}</h1>
          <div className="img-profile" style={{ cursor: "pointer" }}>
            <img src={ImgProfil} alt="img-profile"/>
          </div>
        </div>
      </nav>
    </div>
  );
}

// function DetailProfile(){

//   return(
    
//   );
// }

export default Navigation;