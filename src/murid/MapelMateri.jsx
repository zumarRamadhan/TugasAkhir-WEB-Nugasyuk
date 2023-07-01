import "../cssAll/murid/MapelMateri.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import AssetsBinggris from "../assets/img-ilustration-binggris.svg";
import NavbarMurid from "../component/NavbarMurid";
import imgGuru from "../assets/profil-guru.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import axios from "axios";
import CardSkeletonDetailTugas from "../componentSkeleton/CardSkeletonDetailTugas";
import CardSkeletonListTask from "../componentSkeleton/CardSkeletonListTask";

function MapelMateri() {
  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState("material-kbm");

  const showMaterial = () => {
    setActiveContent("material-kbm");
  };

  const showTask = () => {
    setActiveContent("task-kbm");
  };

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailMapel, setDataDetailMapel] = useState([]);
  const [dataMaterial, setDataMaterial] = useState([]);
  const [dataTask, setDataTask] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetailMapel();
    dataMateri();
    dataTugas();
  }, [id]);

  function getDetailMapel() {
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataDetailMapel(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function dataMateri() {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/materi/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataMaterial(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function dataTugas() {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran/tugas/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataTask(response.data.data);
        setisLoading(false);
      })
      .catch((error) => console.error(error));
  }

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  // else if (dataDetailMapel && !isError)
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
        {dataDetailMapel.map((detailMapel) => (
          <NavbarMurid textNavigasi={detailMapel.nama_mapel} />
        ))}
        <div className="main">
          {dataDetailMapel &&
            dataDetailMapel.map((detailMapel) => (
              <div className="con-content-subject">
                <div
                  className="content-subject"
                  style={{
                    background: `linear-gradient(${detailMapel.color})`,
                  }}
                >
                  <div className="content-subject-left">
                    <p className="name-subject">{detailMapel.nama_mapel}</p>
                    <p className="name-teacher">{detailMapel.nama_guru}</p>
                  </div>
                  <img
                    src={`https://www.nugasyuk.my.id/public/${detailMapel.file_vector}`}
                    alt=""
                    className="img-assets-subject"
                  />
                </div>
                <div className="content-subject-2">
                  <img
                    src={`https://www.nugasyuk.my.id/public/${detailMapel.foto_profile}`}
                    alt=""
                    className="img-subject-2"
                  />
                  <p className="name-teacher-2">{detailMapel.nama_guru}</p>
                </div>
              </div>
            ))}

          <div className="dropdown-task">
            <div className="switch-container">
              <button
                id="btn-materiKbm"
                className={
                  activeContent === "material-kbm" ? "activeDetailKbm" : ""
                }
                onClick={showMaterial}
              >
                Materi
              </button>
              <button
                id="btn-tugasKbm"
                className={
                  activeContent === "task-kbm" ? "activeDetailKbm" : ""
                }
                onClick={showTask}
              >
                Tugas
              </button>
            </div>

            <form className="search-box">
              <input type="text" placeholder="Cari..." />
              <button type="submit">
                <Icon icon="material-symbols:search-rounded" width="20"></Icon>
              </button>
            </form>
          </div>

          {isLoading ? (
            <div className="con-material material-kbm">
              <CardSkeletonListTask />
              <CardSkeletonListTask />
            </div>
          ) : (
            <div
              className="con-material material-kbm"
              style={{
                display: activeContent === "material-kbm" ? "block" : "none",
              }}
            >
              {dataMaterial &&
                dataMaterial.map((apiMateri) => (
                  <div
                    className="card-material"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(
                        "/murid/pagemapel/mapelmateri/detailmateri/" +
                          apiMateri.id
                      )
                    }
                  >
                    <div className="indiecator-left">
                      <div
                        className="icon-indie"
                        style={{ background: "#D8F0FF" }}
                      >
                        <Icon
                          icon="ri:book-line"
                          width="30"
                          style={{ color: "#2A93D5" }}
                        />
                      </div>
                      <div className="desc-indie">
                        <p className="material-name">{apiMateri.nama_materi}</p>
                        <p className="teacher-name">{apiMateri.nama_guru}</p>
                      </div>
                    </div>
                    <div className="indiecator-right">
                      <p className="time-upload">{apiMateri.tanggal_dibuat}</p>
                      <Icon
                        icon="ic:round-navigate-next"
                        width="30"
                        className="icon-navigate"
                      />
                    </div>
                  </div>
                ))}
            </div>
          )}

          {/* tugas */}
          {isLoading ? (
            <div className="con-material taskKbm">
              <CardSkeletonListTask />
            </div>
          ) : (
            <div
              className="con-material taskKbm"
              style={{
                display: activeContent === "task-kbm" ? "block" : "none",
              }}
            >
              {dataTask &&
                dataTask.map((apiTugas) => (
                  <div
                    className="card-material"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate("/murid/detailtugas/" + apiTugas.id)
                    }
                  >
                    <div className="indiecator-left">
                      <div
                        className="icon-indie"
                        style={{ background: "#FFFA87" }}
                      >
                        <Icon
                          icon="uiw:time-o"
                          width="30"
                          style={{ color: "#CBC41A" }}
                        />
                      </div>
                      <div className="desc-indie">
                        <p className="material-name">{apiTugas.nama_tugas}</p>
                        <p className="teacher-name">{apiTugas.nama_guru}</p>
                      </div>
                    </div>
                    <div className="indiecator-right">
                      <p className="time-upload">{apiTugas.date}</p>
                      <p className="deadline-time" style={{ color: "#2A93D5" }}>
                        Deadline : <span>{apiTugas.deadline}</span>
                      </p>
                      <Icon
                        icon="ic:round-navigate-next"
                        width="30"
                        className="icon-navigate"
                      />
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

export default MapelMateri;
