import '../cssAll/murid/BerandaMurid.css';
import ImgProfil from '../assets/profil-murid.svg';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';

function NavbarMurid(props){
    const showDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(0px)';
    }

    const showNotif = () => {
        const detailNotification = document.querySelector('.detail-notif');
        detailNotification.style.transform = 'translateX(0px)';
    }

    return(
        <div>
            <nav>
                <div className="navbar">
                    <h1>{props.text}</h1>
                    <div className="nav-right">
                        <div className="img-profile" style={{ cursor: "pointer" }}>
                            <img src={ImgProfil} alt="img-profile" onClick={showDetail} />
                        </div>
                        <div className="btn-notification" style={{ cursor: "pointer" }} onClick={showNotif}>
                            <Icon icon="mdi:bell-notification-outline" width="24"/>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavbarMurid