import "../cssAll/walimurid/DetailMateri.css";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import AssetsBinggris from "../assets/img-ilustration-binggris.svg";
import imgGuru from "../assets/profil-guru.svg";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";

function MatapelajaranMateri() {
  const navText = "B. Inggris";
  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState("detailMateriKbm");

  const showMateri = () => {
    setActiveContent("detailMateriKbm");
  };

  const showTugas = () => {
    setActiveContent("detailTugasKbm");
  };

  return (
    <div>
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/walimurid/berandawalimurid")}
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
          <li onClick={() => navigate("/walimurid/pagekbm")}>
            <Icon icon="uiw:date" width="18" />
            Jadwal KBM
          </li>
          <li
            className="active"
            onClick={() => navigate("/walimurid/pagemapel")}
          >
            <Icon icon="fluent-mdl2:education" width="18" />
            Mata Pelajaran
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarWaliMurid text={navText} />
        <div className="main">
          <div className="con-content-subject">
            <div
              className="content-subject"
              style={{
                background:
                  "linear-gradient(to bottom right, #8287F8, #555AD3)",
              }}
            >
              <div className="content-subject-left">
                <p className="name-subject">B.Inggris</p>
                <p className="name-teacher">Budiono, S.Pd</p>
              </div>
              <img src={AssetsBinggris} alt="" className="img-assets-subject" />
            </div>
            <div className="content-subject-2">
              <img src={imgGuru} alt="" className="img-subject-2" />
              <p className="name-teacher-2">Budiono, S.Pd</p>
            </div>
          </div>
          <div className="switch-container">
            <button
              id="btn-materiKbm"
              className={
                activeContent === "detailMateriKbm" ? "activeDetailKbm" : ""
              }
              onClick={showMateri}
            >
              Materi
            </button>
            <button
              id="btn-tugasKbm"
              className={
                activeContent === "detailTugasKbm" ? "activeDetailKbm" : ""
              }
              onClick={showTugas}
            >
              Tugas
            </button>
          </div>
          <div className="dropdown-task">
            <select id="tugas" name="tugas">
              <option value="semua" selected>
                -- Semua Tugas --
              </option>
              <option value="tugas">Tugas selesai dalam deaadline</option>
              <option value="tugas">Tugas selesai lewat deadline</option>
              <option value="tugas">Tugas belum selesai dalam deadline</option>
              <option value="tugas">Tugas belum selesai lewat deadline</option>
            </select>

            <form className="search-box">
              <input type="text" placeholder="Cari..." />
              <button type="submit">
                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
              </button>
            </form>
          </div>

          <div className="con-material">
            <div
              className="card-material"
              style={{ cursor: "pointer" }}
              onClick={() =>
                navigate("/walimurid/pagemapel/mapelmateri/detailmateri")
              }
            >
              <div className="indiecator-left">
                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                  <Icon
                    icon="ri:book-line"
                    width="30"
                    style={{ color: "#2A93D5" }}
                  />
                </div>
                <div className="desc-indie">
                  <p className="material-name">Materi Application Letter</p>
                  <p className="teacher-name">Budiono, S.Pd</p>
                </div>
              </div>
              <div className="indiecator-right">
                <p className="time-upload">8 Mar 2023</p>
                <Icon
                  icon="ic:round-navigate-next"
                  width="30"
                  className="icon-navigate"
                />
              </div>
            </div>

            <div className="card-material" style={{ cursor: "pointer" }}>
              <div className="indiecator-left">
                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                  <Icon
                    icon="ri:book-line"
                    width="30"
                    style={{ color: "#2A93D5" }}
                  />
                </div>
                <div className="desc-indie">
                  <p className="material-name">Materi Reading</p>
                  <p className="teacher-name">Budiono, S.Pd</p>
                </div>
              </div>
              <div className="indiecator-right">
                <p className="time-upload">5 Mar 2023</p>
                <Icon
                  icon="ic:round-navigate-next"
                  width="30"
                  className="icon-navigate"
                />
              </div>
            </div>

            <div className="card-material" style={{ cursor: "pointer" }}>
              <div className="indiecator-left">
                <div className="icon-indie" style={{ background: "#D8F0FF" }}>
                  <Icon
                    icon="ri:book-line"
                    width="30"
                    style={{ color: "#2A93D5" }}
                  />
                </div>
                <div className="desc-indie">
                  <p className="material-name">Materi Laporan B. Inggris</p>
                  <p className="teacher-name">Budiono, S.Pd</p>
                </div>
              </div>
              <div className="indiecator-right">
                <p className="time-upload">1 Mar 2023</p>
                <Icon
                  icon="ic:round-navigate-next"
                  width="30"
                  className="icon-navigate"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DetailOrtu />

      <NotifOrtu />
    </div>
  );
}

export default MatapelajaranMateri;
