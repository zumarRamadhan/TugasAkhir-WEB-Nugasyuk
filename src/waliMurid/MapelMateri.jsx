import "../cssAll/walimurid/MapelMateri.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import AssetsBinggris from "../assets/img-ilustration-binggris.svg";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import imgGuru from "../assets/profil-guru.svg";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";
import axios from "axios";
import SkeletonMapelMateri from "../componentSkeleton/SkeletonMapelMateri";
import CardSkeletonListTask from "../componentSkeleton/CardSkeletonListTask";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";
import apiurl from "../api/api";
import SkeletonFilter from "../componentSkeleton/SkeletonFilter";

function PageMapel() {
  const navigate = useNavigate();

  const [activeContent, setActiveContent] = useState("material-kbm");

  const showMaterial = () => {
    setActiveContent("material-kbm");
  };

  const showTask = () => {
    setActiveContent("task-kbm");
  };

  const saveToken = sessionStorage.getItem("token");

  const [dataMapelDetail, setDataMapelDetail] = useState([]);
  const [dataListMateri, setDataListMateri] = useState([]);
  const [dataListTugas, setDataListTugas] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetailMapel();
    listDataMateri();
    listDataTugas();
  }, [id]);

  function getDetailMapel() {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/matapelajaran/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataMapelDetail(response.data.mapel);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

  function listDataMateri() {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/matapelajaran/materi/${id}`, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        setDataListMateri(response.data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

  function listDataTugas() {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/matapelajaran/tugas/${id}`, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataListTugas(response.data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDataMateri, setFilteredDataMateri] = useState([]);
  const [filteredDataTugas, setFilteredDataTugas] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
    filterData(dataListMateri, dataListTugas, event.target.value);
  };

  const filterData = (materialData, taskData, keyword) => {
    const filteredMaterial = materialData.filter((item) =>
      item.nama_materi.toLowerCase().includes(keyword.toLowerCase())
    );

    const filteredTask = taskData.filter((item) =>
      item.nama_tugas.toLowerCase().includes(keyword.toLowerCase())
    );

    setFilteredDataMateri(filteredMaterial);
    setFilteredDataTugas(filteredTask);
  };

  const renderDataMateri =
    filteredDataMateri.length > 0 ? filteredDataMateri : dataListMateri;
  const rendetDataTugas =
    filteredDataTugas.length > 0 ? filteredDataTugas : dataListTugas;
  const dataNotFound =
    searchTerm !== "" && filteredDataTugas.length === 0 && !isLoading;

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataMapelDetail && !isError)
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
          {isLoading ? (
            <SkeletonNavbarWali />
          ) : (
            <div>
              {dataMapelDetail.map((detailMapel) => (
                <NavbarWaliMurid navigasiOrtu={detailMapel.nama_mapel} />
              ))}
            </div>
          )}
          <div className="main">
            {isLoading ? (
              <SkeletonMapelMateri />
            ) : (
              <div>
                {dataMapelDetail &&
                  dataMapelDetail.map((detailMapel) => (
                    <div className="con-content-subject">
                      <div
                        className="content-subject"
                        style={{
                          background: `linear-gradient(${detailMapel.color})`,
                        }}
                      >
                        <div className="content-subject-left">
                          <p className="name-subject">
                            {detailMapel.nama_mapel}
                          </p>
                          <p className="name-teacher">
                            {detailMapel.nama_guru}
                          </p>
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
                        <p className="name-teacher-2">
                          {detailMapel.nama_guru}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            <div className="dropdown-task">
              {isLoading ? (
                <SkeletonFilter />
              ) : (
                <div className="switch-container-ortu">
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
              )}

              {isLoading ? (
                <SkeletonFilter />
              ) : (
                <form className="search-box">
                  <input
                    type="text"
                    placeholder="Cari..."
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                  />
                  <button
                    type="submit"
                    onClick={() =>
                      filterData(dataListMateri, dataListTugas, searchTerm)
                    }
                  >
                    <Icon
                      icon="material-symbols:search-rounded"
                      width="20"
                    ></Icon>
                  </button>
                </form>
              )}
            </div>

            {isLoading ? (
              <div className="con-material">
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
                {" "}
                {dataNotFound ? (
                  <div className="dataNotFound">
                    <p className="text-notfound">
                      Maaf Materi Yang Kamu Cari Tidak Ada!
                    </p>
                  </div>
                ) : (
                  <div>
                    {renderDataMateri.map((dataMateri) => (
                      <div
                        className="card-material"
                        style={{ cursor: "pointer" }}
                        key={dataMateri.id}
                        onClick={() =>
                          navigate(
                            "/walimurid/pagemapel/mapelmateri/detailmateri/" +
                              dataMateri.id
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
                            <p className="material-name">
                              {dataMateri.nama_materi}
                            </p>
                            <p className="teacher-name">
                              {dataMateri.nama_guru}
                            </p>
                          </div>
                        </div>
                        <div className="indiecator-right">
                          <p className="time-upload">
                            {dataMateri.tanggal_dibuat}
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
            )}

            {/* tugas */}
            <div
              className="con-material taskKbm"
              style={{
                display: activeContent === "task-kbm" ? "block" : "none",
              }}
            >
              {dataNotFound ? (
                <div className="dataNotFound">
                  <p className="text-notfound">
                    Maaf Tugas Yang Kamu Cari Tidak Ada!
                  </p>
                </div>
              ) : (
                <div>
                  {rendetDataTugas.map((dataTugas) => (
                    <div
                      className="card-material"
                      style={{ cursor: "pointer" }}
                      key={dataTugas.id}
                      onClick={() =>
                        navigate("/walimurid/detailtugas/" + dataTugas.id)
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
                          <p className="material-name">
                            {dataTugas.nama_tugas}
                          </p>
                          <p className="teacher-name">{dataTugas.nama_guru}</p>
                        </div>
                      </div>
                      <div className="indiecator-right">
                        <p className="time-upload">{dataTugas.date}</p>
                        <p
                          className="deadline-time"
                          style={{ color: "#2A93D5" }}
                        >
                          Deadline : <span>{dataTugas.deadline}</span>
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
        </div>

        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default PageMapel;
