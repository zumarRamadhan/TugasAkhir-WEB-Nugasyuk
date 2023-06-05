import '../App.css';
import ImgProfil from '../assets/profil-walimurid.svg';
import { Icon } from '@iconify/react';
import React, { useState, useEffect} from 'react';

function NavbarWaliMurid(props){

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

    const showNotif = () => {
        const detailNotification = document.querySelector('.detail-notif');
        detailNotification.style.transform = 'translateX(0px)';
    }

    return(
        <div>
            <nav>
                <div className={isScrolled ? "navbar shadow" : "navbar"}>
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

export default NavbarWaliMurid