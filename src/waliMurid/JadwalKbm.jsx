import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../cssAll/walimurid/JadwalKbm.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarOrtu from "../component/NavbarWaliMurid";
import { useState, useEffect } from "react";
import ProfileSiswa from "../component/ProfileWaliMurid";
import NotifSiswa from "../component/NotifOrtu";
import axios from "axios";
import CardSkeletonJadwal from "../componentSkeleton/CardSkeletonJadwal";
import SkeletonPopupJadwal from "../componentSkeleton/SkeletonPopupJadwal";
import apiurl from "../api/api";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";

function PageMapel() {
  const navigate = useNavigate();
  const [detailJadwal, setDetailJadwal] = useState([]);
  const [selectedKbmId, setSelectedKbmId] = useState(null);

  const closeDetailKbm = () => {
    const popupLogout = document.querySelector(".popup-kbm");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showDetailKbm = (id) => {
    setPopupLoad(true);
    setSelectedKbmId(id);
    console.log("ID:", id);
    const popupForget = document.querySelector(".popup-kbm");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
    setisLoading(false);
    console.log(setisLoading);
    axios
      .get(`${apiurl}ortu/jadwal/${id}`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        setDetailJadwal(result.data);
        setisLoading(false);
        setPopupLoad(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
        setPopupLoad(false);
      });
  };

  const saveToken = sessionStorage.getItem("token");

  // const [dataJadwal, setDataJadwal] = useState([]);
  const [dataListJadwal, setDataListJadwal] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isPopupLoad, setPopupLoad] = useState(true);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/jadwal`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        setDataListJadwal(result.data.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataListJadwal && !isError)
    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/walimurid/berandamurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/walimurid/berandawalimurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li onClick={() => navigate("/walimurid/pagetugas")}>
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li
              className="active"
              onClick={() => navigate("/walimurid/pagekbm")}
            >
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li onClick={() => navigate("/walimurid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
          </ul>
        </aside>
        <div className="container-content">
          {isLoading ? (
            <SkeletonNavbarWali />
          ) : (
            <NavbarOrtu navigasiOrtu={"Jadwal KBM 11 PPLG 1"} />
          )}
          <div className="main">
            <div className="content-jadwalKBM">
              {isLoading ? (
                <div className="con-card-jadwalKBM-ortu">
                  <CardSkeletonJadwal />
                  <CardSkeletonJadwal />
                  <CardSkeletonJadwal />
                  <CardSkeletonJadwal />
                  <CardSkeletonJadwal />
                  <CardSkeletonJadwal />
                </div>
              ) : (
                <div className="con-card-jadwalKBM-ortu">
                  {dataListJadwal.map((listJadwal) => (
                    <div
                      className="cardJadwalKbm"
                      key={listJadwal.id}
                      onClick={() => showDetailKbm(listJadwal.id)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="titleJadwalKbm">
                        <p>Jadwal KBM</p>
                        <h1>{listJadwal.hari}</h1>
                      </div>
                      <div className="bottomjadwalKbm">
                        <div className="conImgGuru-Kbm">
                          {listJadwal.detail.map((items) => (
                            <div className="imgGuru-Kbm">
                              <img
                                src={`https://www.nugasyuk.my.id/public/${items.foto_profile}`}
                                alt=""
                                className="imageGuru-Kbm"
                              />
                            </div>
                          ))}
                        </div>
                        <div className="btnDetail-Kbm">
                          <Icon
                            icon="ic:round-navigate-next"
                            width="30"
                            className="iconDetail-Kbm"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className="popup-kbm"
          style={{ display: selectedKbmId ? "flex" : "none" }}
        >
          <div className="detail-popup-kbm">
            <div className="nav-popup-kbm">
              <Icon
                icon="radix-icons:cross-circled"
                width="30"
                style={{ cursor: "pointer", color: "#4b4b4b" }}
                className="btn-close"
                onClick={closeDetailKbm}
              />
              {isPopupLoad ? (
                <h2 className="day-schedule">Loading...</h2>
              ) : (
                <h2 className="day-schedule">{detailJadwal.hari}</h2>
              )}
            </div>
            {isPopupLoad ? (
              <div className="con-popup-kbm">
                <SkeletonPopupJadwal />
                <SkeletonPopupJadwal />
                <SkeletonPopupJadwal />
                <SkeletonPopupJadwal />
              </div>
            ) : (
              <div className="con-popup-kbm">
                {detailJadwal.data?.map((jadwalDetail) => (
                  <div className="popup-card-kbm">
                    <div className="test1">
                      <img
                        src={`https://www.nugasyuk.my.id/public/${jadwalDetail.foto_profile}`}
                        alt=""
                        className="image-card-kbm"
                      />
                      <div className="mapel-card-kbm">
                        <p>{jadwalDetail.nama_mapel}</p>
                        <p className="guruPengampu">{jadwalDetail.nama_guru}</p>
                      </div>
                    </div>
                    <div className="test2">
                      <div className="jamMengajar">
                        <span>{jadwalDetail.waktu_mulai}</span> -{" "}
                        <span>{jadwalDetail.waktu_selesai}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <ProfileSiswa />

        <NotifSiswa />
      </div>
    );
}

export default PageMapel;
