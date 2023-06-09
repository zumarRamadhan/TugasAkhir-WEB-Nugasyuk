import "../cssAll/walimurid/JadwalKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useEffect } from "react";
import ImgProfil from "../assets/profil-walimurid.svg";
import ProfilGuru from "../assets/guru-sapari.svg";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";
import axios from "axios";

function PageMapel() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataListJadwal, setDataListJadwal] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/jadwal", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataListJadwal(responseAPI.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  else if (dataListJadwal && !isError)
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
          <NavbarWaliMurid navigasiOrtu={"Jadwal KBM 11 PPLG 1"} />
          <div className="main">
            <div className="content-jadwalKBM">
              <div className="con-card-jadwalKBM">
                {dataListJadwal &&
                  dataListJadwal.map((jadwalList) => (
                    <div className="cardJadwalKbm" key={jadwalList.id}>
                      <div className="titleJadwalKbm">
                        <p>Jadwal KBM</p>
                        <h1>{jadwalList.hari}</h1>
                      </div>
                      <div className="bottomjadwalKbm">
                        <div className="conImgGuru-Kbm">
                          <div className="imgGuru-Kbm">
                            <img
                              src={ImgProfil}
                              alt=""
                              className="imageGuru-Kbm"
                            />
                          </div>
                        </div>
                        <div className="btnDetail-Kbm">
                          <Icon
                            icon="ic:round-navigate-next"
                            width="30"
                            className="iconDetail-Kbm"
                            // onClick={''}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default PageMapel;
