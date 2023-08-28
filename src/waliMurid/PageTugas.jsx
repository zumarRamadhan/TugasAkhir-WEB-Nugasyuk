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
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";
import CardSkeletonListTask from "../componentSkeleton/CardSkeletonListTask";
import apiurl from "../api/api";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";
import SkeletonFilter from "../componentSkeleton/SkeletonFilter";

function PageTugas() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataTugas, setDataTugas] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterValue, setFilterValue] = useState("all");

  useEffect(() => {
    handleSearch();
  }, [searchQuery, filterValue]);
  
  useEffect(() => {
    setFilteredData(dataTugas);
  }, [dataTugas]);

  const handleSearch = () => {
    const filteredData = dataTugas.filter((value) => {
      // const lowerCaseSearchQuery = searchQuery.toLowerCase();
      const lowerCaseStatusMapel = value.status
        ? value.status.toLowerCase()
        : "";

      return (
        (filterValue === "all" || filterValue === lowerCaseStatusMapel) &&
        ((value &&
          value.soal &&
          value.soal.toLowerCase().includes(searchQuery.toLowerCase())) ||
          (value &&
            value.nama_guru &&
            value.nama_guru
              .toLowerCase()
              .includes(searchQuery.toLowerCase())) ||
          (value &&
            value.status &&
            value.status.toLowerCase().includes(searchQuery.toLowerCase())))
      );
    });
    setFilteredData(filteredData);
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    // jika filter value nya tidak ada maka akan menampilkan data not found
    setFilterValue(e.target.value);
  };
  console.log("filter value", dataTugas);

  const renderData = filteredData.length > 0 ? filteredData : dataTugas;
  const dataNotFound =
    searchQuery !== "" && filteredData.length === 0 && !isLoading;

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/tugas`, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;

        setDataTugas(result.data.tugas);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);
  // console.log(dataTugas);
  // if (!dataTugas) return <h3>Loading...</h3>;

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  // else if (dataTugas && !isError)

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
            <li onClick={() => navigate("/walimurid/pagetugas")}  className="active">
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
          <NavbarWaliMurid navigasiOrtu={"Tugas"} />
        )}
        <div className="main">
          <div className="header-task-student">
            <div className="header-task-student-left">
              {isLoading ? (
                <SkeletonFilter />
              ) : (
                <select
                  id="task"
                  name="task"
                  value={filterValue}
                  onChange={handleFilterChange}
                >
                  <option value="all" selected>
                    -- Semua Tugas --
                  </option>
                  <option value="selesai_dalam_deadline">
                    Tugas selesai dalam deadline
                  </option>
                  <option value="selesai_lebih_deadline">
                    Tugas selesai lewat deadline
                  </option>
                  <option value="belum_selesai_dalam_deadline">
                    Tugas belum selesai dalam deadline
                  </option>
                  <option value="belum_selesai_luar_deadline">
                    Tugas belum selesai lewat deadline
                  </option>
                  <option value="menunggu_dalam_deadline">
                    Menunggu konfirmasi guru
                  </option>
                  <option value="menunggu_lebih_deadline">
                    Menunggu konfirmasi guru lewat deadline
                  </option>
                </select>
              )}

              {/* {isLoading ? (
                <SkeletonFilter />
              ) : (
                <select
                  id="task"
                  name="task"
                  value={filterValue}
                  onChange={handleFilterChange}
                >
                  <option value="task" selected>
                    -- Semua Mapel --
                  </option>
                  <option value="produktif">Produktif</option>
                  <option value="normadaf">Normadaf</option>
                </select>
              )} */}

              {isLoading ? (
                <SkeletonFilter />
              ) : (
                <form className="search-box" onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Cari..."
                    value={searchQuery}
                    onChange={handleChange}
                  />
                  <button type="submit">
                    <Icon
                      icon="material-symbols:search-rounded"
                      width="20"
                    ></Icon>
                  </button>
                </form>
              )}
            </div>
          </div>

          {isLoading ? (
            <div className="content-task">
              <CardSkeletonListTask />
              <CardSkeletonListTask />
              <CardSkeletonListTask />
              <CardSkeletonListTask />
            </div>
          ) : (
            <div>
              {dataNotFound ? (
                <div className="dataNotFound">
                  <p className="text-notfound">Data Tidak Ditemukan</p>
                </div>
              ) : (
                <div>
              {filteredData.length > 0 ? (
                <div className="content-task">
                  {renderData.map((listTugas) => (
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
                          {listTugas.status ===
                            "belum_selesai_dalam_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#DDDDDD" }}
                            >
                              <Icon
                                icon="ic:round-pending-actions"
                                width="35"
                                style={{ color: "#797979" }}
                              />
                            </div>
                          )}
                          {listTugas.status ===
                            "belum_selesai_luar_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="ic:round-pending-actions"
                                width="30"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}
                          {listTugas.status === "menunggu_dalam_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#FFFA87" }}
                            >
                              <Icon
                                icon="uiw:time-o"
                                width="30"
                                style={{ color: "#CBC41A" }}
                              />
                            </div>
                          )}
                          {listTugas.status === "menunggu_lebih_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="uiw:time-o"
                                width="30"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}
                          {listTugas.status === "selesai_dalam_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#D5FFC6" }}
                            >
                              <Icon
                                icon="material-symbols:check-small-rounded"
                                width="50"
                                style={{ color: "#84E063" }}
                              />
                            </div>
                          )}
                          {listTugas.status === "selesai_lebih_deadline" && (
                            <div
                              className="icon-indie-information"
                              style={{ background: "#FFC6C6" }}
                            >
                              <Icon
                                icon="material-symbols:check-small-rounded"
                                width="50"
                                style={{ color: "#FF3F3F" }}
                              />
                            </div>
                          )}

                          <div className="desc-indie">
                            <p className="title-indie-information">
                              {listTugas.nama_tugas}
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
                  <br />
                  <br />
                  <br />
                </div>
              ) : (
                <div className="dataNotFound">
                <p className="text-notfound">
                  Maaf, Tugas Yang Kamu Cari Tidak Ada
                </p>
              </div>
              )}
            </div>
              )}
            </div>
          )}
        </div>
      </div>

      <DetailOrtu />

      <NotifOrtu />
    </div>
  );
  // else {
  //   return <h1>Something Went Wrong</h1>;
  // }
}

export default PageTugas;
