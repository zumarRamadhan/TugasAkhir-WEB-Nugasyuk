// import '../component/Component.css';
import ImgProfil from '../assets/img-profil.svg';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';
// import '../admin/main.js';

function Navigation(props) {

  const showDetail = () => {
    const detailProfile = document.querySelector('.detail-profile');
    detailProfile.style.transform = 'translateX(0px)';
  }
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav>
        <div className={isScrolled ? "navbar shadow" : "navbar"}>
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