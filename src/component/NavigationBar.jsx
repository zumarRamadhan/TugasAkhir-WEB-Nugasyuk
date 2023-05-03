// import '../component/Component.css';
import ImgProfil from '../assets/img-profil.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
// import '../admin/main.js';

function Navigation(props) {

  const [isDetailShown, setIsDetailShown] = useState(false);

  const showDetail = () => {
    const detailProfile = document.querySelector('.detail-profile');
    detailProfile.style.transform = 'translateX(0px)';
    setIsDetailShown(true);
  }

  return (
    <div>
      <nav>
        <div className="navbar">
          <h1>{props.text}</h1>
          <div className="img-profile" style={{ cursor: "pointer" }}>
            <img src={ImgProfil} alt="img-profile" onClick={showDetail}/>
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