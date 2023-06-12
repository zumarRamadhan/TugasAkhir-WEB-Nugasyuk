import "../cssAll/murid/BerandaMurid.css";
import ImgProfil from "../assets/profil-murid.svg";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import axios from "axios";

function NavbarMurid(props) {
  const showDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(0px)";
  };

  const showNotif = () => {
    const detailNotification = document.querySelector(".detail-notif");
    detailNotification.style.transform = "translateX(0px)";
  };

  const { textNavigasi } = props;

  const saveToken = sessionStorage.getItem("token");

  const [dataNavbar, setDataNavbar] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/profil", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;

        setDataNavbar(result.data.data);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
      });
  }, []);

    return (
      <div>
        <nav>
          <div className="navbar">
            <h1>{textNavigasi}</h1>
            <div className="nav-right">
              <div className="img-profile" style={{ cursor: "pointer" }}>
                <img
                  src={`https://www.nugasyuk.my.id/public/${dataNavbar.foto_profile}`}
                  alt="img-profile"
                  onClick={showDetail}
                />
              </div>
              <div
                className="btn-notification"
                style={{ cursor: "pointer" }}
                onClick={showNotif}
              >
                <Icon icon="mdi:bell-notification-outline" width="24" />
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
}

export default NavbarMurid;
