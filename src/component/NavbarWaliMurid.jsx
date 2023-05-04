import '../cssAll/BerandaMurid.css';
import ImgProfil from '../assets/profil-walimurid.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function NavbarWaliMurid(props){

    const showDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(0px)';
    }

    return(
        <div>
            <nav>
                <div className="navbar">
                    <h1>{props.text}</h1>
                    <div className="img-profile" style={{ cursor: "pointer" }}>
                        <img src={ImgProfil} alt="img-profile" onClick={showDetail} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarWaliMurid