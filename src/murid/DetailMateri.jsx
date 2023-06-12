import "../cssAll/murid/DetailMateri.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import NavbarMurid from "../component/NavbarMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";

function DetailMateri() {
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
          <li className="active" onClick={() => navigate("/murid/pagemapel")}>
            <Icon icon="fluent-mdl2:education" width="18" />
            Mata Pelajaran
          </li>
          <li onClick={() => navigate("/murid/pagekonseling")}>
            <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
            Konseling
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarMurid textNavigasi={'B. Inggris'} />
        <div className="main">
          <div className="con-content-material">
            <div className="content-material">
              <div className="content-material-left">
                <div className="icon-material">
                  <Icon
                    icon="ri:book-line"
                    width="40"
                    style={{ color: "#2A93D5" }}
                  />
                </div>
                <div className="desc-material">
                  <p className="name-material ">Materi Application Letter</p>
                  <p className="teacher">Budiono, S.Pd</p>
                </div>
              </div>
              <div className="content-material-right">
                <p className="date-upload">7 Mar 2023</p>
              </div>
            </div>
            <p className="desc-content-material">
              Assalamualaikum wr wb, untuk kelas 11 PPLG 1 kalian bisa memahami
              materi mengenai pengertian application letter. Dibawah ini saya
              mencantumkan link youtube pengertian dari application letter,
              kalian bisa menyimak video tersebut. jika sudah selesai menyimak
              video kalian bisa mengerjakan tugas application letter yang saya
              upload pada halaman tugas. Terima kasih, sukses selalu...
            </p>
            <div className="file-material">
              <iframe
                width="330"
                height="150"
                src="https://www.youtube.com/embed/bkIumnXFQNI"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
}

export default DetailMateri;
