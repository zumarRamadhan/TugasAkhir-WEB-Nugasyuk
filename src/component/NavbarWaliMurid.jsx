import axios from 'axios';
import '../App.css';
import ImgProfil from '../assets/profil-walimurid.svg';
import { Icon } from '@iconify/react';
import React, { useState, useEffect } from 'react';


function NavbarWaliMurid(props){

    const showDetail = () => {
        const detailProfile = document.querySelector('.detail-profile');
        detailProfile.style.transform = 'translateX(0px)';
    }

    const showNotif = () => {
        const detailNotification = document.querySelector('.detail-notif');
        detailNotification.style.transform = 'translateX(0px)';
    }

    const {navigasiOrtu} = props;

    const saveToken = sessionStorage.getItem("token");

    const [dataProfileOrtu, setDataProfileOrtu] = useState([]);
    const [isError, setisError] = useState(false);
  
    useEffect(() => {
      axios
        .get("https://www.nugasyuk.my.id/api/ortu/profile", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${saveToken}`,
          },
        })
        .then((result) => {
          console.log("data API", result.data);
          const responseAPI = result.data;
  
          setDataProfileOrtu(responseAPI.data);
        })
        .catch((err) => {
          console.log("terjadi kesalahan: ", err);
          setisError(true);
        });
    }, []);

    return(
        <div>
            <nav>
                <div className="navbar">
                    <h1>{navigasiOrtu}</h1>
                    <div className="nav-right">
                        {dataProfileOrtu.map((ortuProfile) =>
                            <div className="img-profile" style={{ cursor: "pointer" }}>
                                <img src={`https://www.nugasyuk.my.id/public/${ortuProfile.foto_profile}`}alt="img-profile" onClick={showDetail} />
                            </div>
                        )}
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