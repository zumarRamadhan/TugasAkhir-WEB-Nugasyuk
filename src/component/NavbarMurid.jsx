import "../cssAll/murid/BerandaMurid.css";
import ImgProfil from "../assets/profil-murid.svg";
import { Icon } from "@iconify/react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import apiurl from "../api/api";

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
      .get(`${apiurl}murid/profile`, {
        headers: {
          "ngrok-skip-browser-warning":"any",
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataNavbar(responseAPI.data);
        // setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
      });
  }, []);

    return (
      <div>
        <nav>
          <div className="navbar">
            {/* <h2>{dataNavbar}</h2> */}
            <h1>{textNavigasi}</h1>
            <div className="nav-right">
              {dataNavbar.map((navData) =>
              <div className="img-profile" style={{ cursor: "pointer" }}>
                <img
                  src={`https://wondrous-squirrel-blatantly.ngrok-free.app/${navData.foto_profile || <Skeleton circle/>}`}
                  alt={dataNavbar.foto_profile}
                  onClick={showDetail}
                  style={{objectFit: "cover", objectPosition: "25% 25%"}}
                />
              </div>
              )}
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
