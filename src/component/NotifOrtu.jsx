import "../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ImgProfil from "../assets/profil-walimurid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";

function notifOrtu() {

  const closeDetailNotif = () => {
    const detailProfile = document.querySelector(".detail-notif");
    detailProfile.style.transform = "translateX(350px)";
  };

  return (
    <div>
      <div className="detail-notif">
        <div className="content-detail-notif">
          <div className="navbar-detail-notif">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer", color: "#4b4b4b" }}
              onClick={closeDetailNotif}
            />
            <h2>Notifikasi</h2>
          </div>
          <p className="day">Hari Ini</p>
          <div className="notif">
            <div className="icon-notif">
              <Icon icon="tabler:clipboard-text" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>Application Letter</p>
              </div>
              <div className="teacher">
                <p>Budiono, S.Pd</p>
              </div>
            </div>
          </div>
          <div className="notif">
            <div className="icon-notif">
              <Icon icon="tabler:clipboard-text" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>Sejarah Gojek</p>
              </div>
              <div className="teacher">
                <p>Rini, S.Pd</p>
              </div>
            </div>
          </div>
          <div className="notif">
            <div className="icon-notif">
              <Icon icon="ri:book-line" width="30" />
            </div>
            <div className="content-notif">
              <div className="name-notif">
                <p>Sejarah Gojek</p>
              </div>
              <div className="teacher">
                <p>Rini, S.Pd</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default notifOrtu;
