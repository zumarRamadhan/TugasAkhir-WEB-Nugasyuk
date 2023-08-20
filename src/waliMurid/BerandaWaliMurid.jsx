import "../cssAll/walimurid/BerandaWaliMurid.css";
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
import NameWaliMurid from "../componentSkeleton/NameWaliMurid";
import CardSkeletonBeranda from "../componentSkeleton/CardSkeletonBeranda";
import CardSkeletonBerandaInfo from "../componentSkeleton/CardSkeletonBerandaInformation";
import CardSkeletonInfoTask from "../componentSkeleton/CardSkeletonInfoTask";
import apiurl from "../api/api";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";
import SkeletonHomeHeader from "../componentSkeleton/SkeletonHomeHeader";

function BerandaWaliMurid() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataBerandaWaliMurid, setDataBerandaWaliMurid] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/dataortu`, {
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "any",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataBerandaWaliMurid(responseAPI.data);
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
  // else if (dataBerandaWaliMurid && !isError)

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
          <li
            className="active"
            onClick={() => navigate("/walimurid/berandawalimurid")}
          >
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
          <NavbarWaliMurid navigasiOrtu={"Beranda 11 PPLG 1"} />
        )}
        <main className="main">
          {isLoading ? (
            <SkeletonHomeHeader />
          ) : (
            <div className="header-dashboard">
              <div className="head-left">
                <h1 className="intro-head" style={{ display: "flex" }}>
                  Halo
                  <span className="walimurid-name">
                    {dataBerandaWaliMurid.nama}
                  </span>
                </h1>
                <p className="desc-head">
                  Selamat datang di nugasyuk, anda bisa memonitoring tugas tugas
                  anak anda.
                </p>
              </div>
              <div className="head-right">
                <div className="kotak1"></div>
              </div>
            </div>
          )}

          <div className="con-content">
            {dataBerandaWaliMurid && dataBerandaWaliMurid.jumlah_siswa ? (
              <div
                className="content-indiecator"
                style={{ background: "#2AB6D5" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#2AB6D5", background: "#fff" }}
                >
                  <Icon icon="mdi:account-group-outline" width="40" />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Jumlah Siswa</p>
                  <p className="value-indie">
                    <span>{dataBerandaWaliMurid.jumlah_siswa}</span> Siswa
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBerandaInfo />
            )}

            {dataBerandaWaliMurid && dataBerandaWaliMurid.jumlah_mapel ? (
              <div
                className="content-indiecator"
                style={{ background: "#585CC4" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#585CC4", background: "#fff" }}
                >
                  <Icon icon="fluent-mdl2:education" width="40" />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Jumlah Mapel</p>
                  <p className="value-indie">
                    <span>{dataBerandaWaliMurid.jumlah_mapel}</span> Mata
                    Pelajaran
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBerandaInfo />
            )}

            {dataBerandaWaliMurid && dataBerandaWaliMurid.wali_kelas ? (
              <div
                className="content-indiecator"
                style={{ background: "#B462D0" }}
              >
                <div
                  className="icon-indie"
                  style={{ color: "#B462D0", background: "#fff" }}
                >
                  <Icon
                    icon="material-symbols:person-outline-rounded"
                    width="40"
                  />
                </div>
                <div className="desc-indie">
                  <p className="title-indie">Wali Kelas</p>
                  <p className="value-indie">
                    <span>{dataBerandaWaliMurid.wali_kelas}</span>
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBerandaInfo />
            )}
          </div>

          {/* content information */}
          <div className="con-content-information">
            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">
                    Belum Selesai Dalam Deadline
                  </p>
                </div>
              )}
              {isLoading ? (
                <CardSkeletonInfoTask />
              ) : (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ background: "#DDDDDD" }}
                    >
                      <Icon icon="ic:round-pending-actions" width="30" style={{ color: "#797979" }}/>
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.belum_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              )}
            </div>

            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">
                    Belum Selesai Lebih Dari Deadline
                  </p>
                </div>
              )}
              {isLoading ? (
                <CardSkeletonInfoTask />
              ) : (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#FF3F3F", background: "#FFC6C6" }}
                    >
                      <Icon icon="ic:round-pending-actions" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.belum_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              )}
            </div>

            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">
                    Menunggu Konfirmasi Dalam Deadline
                  </p>
                </div>
              )}
              {isLoading ? (
                <CardSkeletonInfoTask />
              ) : (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#CBC41A", background: "#FFFA87" }}
                    >
                      <Icon icon="uiw:time-o" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.menunggu_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              )}
            </div>

            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">
                  Menunggu Konfirmasi Lebih Dari Deadline
                  </p>
                </div>
              )}
              {isLoading ? (
                <CardSkeletonInfoTask />
              ) : (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#FF3F3F", background: "#FFC6C6" }}
                    >
                      <Icon icon="uiw:time-o" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.menunggu_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              )}
            </div>

            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">Selesai Dalam Deadline</p>
                </div>
              )}
              {dataBerandaWaliMurid &&
              dataBerandaWaliMurid.selesai_dalamdeadline ? (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#84E063", background: "#D5FFC6" }}
                    >
                      <Icon icon="ph:check-bold" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.selesai_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              ) : (
                <CardSkeletonInfoTask />
              )}
            </div>

            <div className="content-status-task">
              {isLoading ? (
                <Skeleton
                  width={250}
                  height={25}
                  style={{ marginBottom: "20px" }}
                />
              ) : (
                <div>
                  <p className="text-status-task">
                    Selesai Lebih Dari Deadline
                  </p>
                </div>
              )}
              {isLoading ? (
                <CardSkeletonInfoTask />
              ) : (
                <div
                  className="content-indiecator-information"
                  style={{ background: "#fff", cursor: "pointer" }}
                >
                  <div className="indiecator-left">
                    <div
                      className="icon-indie-information"
                      style={{ color: "#FF3F3F", background: "#FFC6C6" }}
                    >
                      <Icon icon="ph:check-bold" width="30" />
                    </div>
                    <div className="desc-indie">
                      <p className="title-indie-information">
                        {" "}
                        <span>
                          {dataBerandaWaliMurid.selesai_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaWaliMurid.jumlah_tugas}</span> Tugas
                      </p>
                    </div>
                  </div>
                  {/* <div className="icon-navigate">
                    <Icon icon="ic:round-navigate-next" width="30" />
                  </div> */}
                </div>
              )}
            </div>
          </div>
          {/* end content information */}
        </main>
      </div>

      <DetailOrtu />

      <NotifOrtu />
    </div>
  );
}

export default BerandaWaliMurid;
