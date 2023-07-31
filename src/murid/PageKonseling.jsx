import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import "../cssAll/murid/BerandaMurid.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import { useState } from "react";
import CardChat from "../assets/card-chat-bk.svg";
import CardCounseling from "../assets/card-counseling.svg";
import ProfilBk from "../assets/profil-bk.svg";
import ImgHubBk from "../assets/img-chatbk.svg";
import ImgJanji from "../assets/img-janjikonseling.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";

function PageKonseling() {
  const navigate = useNavigate();

  return (
    <div>
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/murid/berandamurid")}
        >
          <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
          nugasyuk
        </h1>
        <ul>
          <li onClick={() => navigate("/murid/berandamurid")}>
            <Icon icon="iconoir:home-simple" width="20" />
            Beranda
          </li>
          <li onClick={() => navigate("/murid/pagetugas")}>
            <Icon
              icon="fluent:clipboard-bullet-list-rtl-20-regular"
              width="25"
            />
            Tugas
          </li>
          <li onClick={() => navigate("/murid/pagekbm")}>
            <Icon icon="uiw:date" width="18" />
            Jadwal KBM
          </li>
          <li onClick={() => navigate("/murid/pagemapel")}>
            <Icon icon="fluent-mdl2:education" width="18" />
            Mata Pelajaran
          </li>
          <li
            className="active"
            onClick={() => navigate("/murid/pagekonseling")}
          >
            <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
            Konseling
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarMurid textNavigasi={"Bimbingan Konseling"} />
        <div className="main">
          <div className="con-content-counseling">
            <div className="content-counseling-left">
              <div className="header-counseling">
                <div className="head-left">
                  <h1 className="intro-head-counseling">
                    Halo <span className="name-student">Wira</span>
                  </h1>
                  <p className="desc-head-counseling">
                    Selamat datang di nugasyuk, anda bisa memonitoring tugas
                    tugas anak anda.
                  </p>
                </div>
              </div>
            </div>
            <div className="header-counseling-right">
              <img src={CardChat} alt="" className="card-chat-counseling" />
              <div className="content-card-chat-bk">
                <div className="card-chat-bk-left">
                  <p className="title-chat-bk">
                    Jika ada yang ingin ditanyakan kepada guru BK melalui chat
                  </p>
                  <button className="btn-chat-bk" style={{ cursor: "pointer" }}>
                    <Icon icon="ph:chat-circle-dots" width="20" />
                    Hubungi BK
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="con-content-counseling-bottom">
            <div className="content-counseling-left">
              <div
                className="history-counseling"
                onClick={() =>
                  navigate("/murid/pagekonseling/riwayatkonseling")
                }
                style={{ cursor: "pointer" }}
              >
                <div className="head-history-counseling">
                  <p className="title-history-counseling">Janji Konseling</p>
                  <Icon
                    icon="ic:round-navigate-next"
                    className="navigate-next-icon"
                    width={30}
                  />
                </div>
                <div className="card-counseling">
                  <div className="teacher-bk">
                    <img src={ProfilBk} alt="" className="img-bk" />
                    <div className="name-teacher-bk">
                      <p>Sumijah, S.Pd</p>
                    </div>
                  </div>
                  <div className="information-counseling">
                    <div className="date-counseling">
                      <Icon
                        icon="uiw:date"
                        width="15"
                        style={{ color: "#2A93D5" }}
                      />
                      <p>Kam, 2 April 2023</p>
                    </div>
                    <div className="information-counseling-bottom">
                      <div className="time-counseling">
                        <Icon
                          icon="material-symbols:nest-clock-farsight-analog-outline-rounded"
                          width="15"
                          style={{ color: "#2A93D5" }}
                        />
                        <p>Jam 4</p>
                      </div>
                      <div className="location-counseling">
                        <p>Ruang BK</p>
                        <Icon
                          icon="material-symbols:location-on-outline-rounded"
                          width="15"
                          style={{ color: "#797979" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-counseling-right">
              <img
                src={CardCounseling}
                alt=""
                className="card-chat-counseling"
              />
              <div className="content-card-chat-bk">
                <div className="card-chat-bk-left">
                  <p className="title-promise-bk">
                    Buat janji bertemu dengan guru BK jika anda ingin bimbingan
                    konseling secara langsung.
                  </p>
                  <button
                    className="btn-promise-bk"
                    onClick={() => navigate("/murid/pagekonseling/buatjanji")}
                  >
                    <Icon icon="uiw:date" width="20" />
                    Buat Janji
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
}

export default PageKonseling;
