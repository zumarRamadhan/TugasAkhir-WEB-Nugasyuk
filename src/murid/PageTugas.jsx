import "../cssAll/murid/PageTugas.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import { useState, useEffect } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import CardSkeletonListTask from "../componentSkeleton/CardSkeletonListTask";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";
import SkeletonFilter from "../componentSkeleton/SkeletonFilter";
import apiurl from "../api/api";

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
    // setFilterValue(e.target.value);
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
      .get(`${apiurl}murid/tugas`, {
        headers: {
          "ngrok-skip-browser-warning":"any",
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;

        setDataTugas(result.data.data);
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
          <li className="active" onClick={() => navigate("/murid/pagetugas")}>
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
          <li onClick={() => navigate("/murid/pagekonseling")}>
            <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
            Konseling
          </li>
        </ul>
      </aside>
      <div className="container-content">
        {isLoading ? (
          <SkeletonNavbar />
        ) : (
          <NavbarMurid textNavigasi={"Tugas"} />
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
                  <option value="selesai">Tugas selesai dalam deadline</option>
                  <option value="selesai">Tugas selesai lewat deadline</option>
                  <option value="belum_selesai">
                    Tugas belum selesai dalam deadline
                  </option>
                  <option value="belum_selesai">
                    Tugas belum selesai lewat deadline
                  </option>
                  <option value="menunggu">Menunggu konfirmasi guru</option>
                </select>
              )}

              {isLoading ? (
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
              )}

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
                          {/* buat beginian all status trs ceknya di commend command misal ngecek konfirmasi, yaudah selain konfirmasi di command dulu */}
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
              )}
            </div>
          )}
        </div>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
  // else {
  //   return <h1>Something Went Wrong</h1>;
  // }
}

export default PageTugas;
