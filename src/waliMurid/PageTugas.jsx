import "../cssAll/walimurid/PageTugas.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useEffect } from "react";
import ImgProfil from "../assets/profil-walimurid.svg";
import axios from "axios";
import DetailOrtu from '../component/ProfileWaliMurid';
import NotifOrtu from '../component/NotifOrtu';

function PageTugas() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataListTugas, setDataListTugas] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/tugas", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;

        setDataListTugas(result.data.tugas);
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
  else if (dataListTugas && !isError)

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
            <li
              className="active"
              onClick={() => navigate("/walimurid/pagetugas")}
            >
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
            <li onClick={() => navigate("/walimurid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
          </ul>
        </aside>
        <div className="container-content">
          <NavbarWaliMurid navigasiOrtu={"Tugas"} />
          <div className="main">
            <div className="header-task">
              <div className="header-task-left">
                <select id="task" name="task">
                  <option value="semua" selected>
                    -- Semua Tugas --
                  </option>
                  <option value="task">Tugas selesai dalam deadline</option>
                  <option value="task">Tugas selesai lewat deadline</option>
                  <option value="task">
                    Tugas belum selesai dalam deadline
                  </option>
                  <option value="task">
                    Tugas belum selesai lewat deadline
                  </option>
                  <option value="task">Menunggu konfirmasi guru</option>
                </select>

                <select id="task" name="task">
                  <option value="task" selected>
                    -- Semua Mapel --
                  </option>
                  <option value="task">Produktif</option>
                  <option value="task">Normadaf</option>
                </select>

                <form className="search-box">
                  <input type="text" placeholder="Cari..." />
                  <button type="submit">
                    <Icon
                      icon="material-symbols:search-rounded"
                      width="20"
                    ></Icon>
                  </button>
                </form>
              </div>
            </div>
            <div className="content-task">
              {dataListTugas &&
                dataListTugas.map((listTugas) => (
                  <Link
                    className="link-navigate"
                    to={"/murid/detailtugas/" + listTugas.id}
                  >
                    <div
                      className="card-task"
                      style={{ cursor: "pointer" }}
                      key={listTugas.id}
                      onClick={() => navigate("/murid/detailtugas/${id}")}
                      id="123"
                    >
                      <div className="indiecator-left">
                        <div
                          className="icon-indie-information"
                          style={{ background: "#DDDDDD" }}
                        >
                          <Icon
                            icon="uiw:time-o"
                            width="30"
                            style={{ color: "#797979" }}
                          />
                        </div>
                        <div className="desc-indie">
                          <p className="title-indie-information">
                            {listTugas.soal}
                          </p>
                          <p className="value-indie-information">
                            {listTugas.nama_guru}
                          </p>
                        </div>
                      </div>
                      <div className="indiecator-right">
                        <p className="time-upload">{listTugas.date}</p>
                        <p
                          className="deadline-time"
                          style={{ color: "#2A93D5" }}
                        >
                          Deadline : <span>{listTugas.deadline}</span>
                        </p>
                        <Icon
                          icon="ic:round-navigate-next"
                          width="30"
                          className="icon-navigate"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>

        <DetailOrtu/>

        <NotifOrtu/>
        
      </div>
    );
}

export default PageTugas;
