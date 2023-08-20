import "../cssAll/murid/BerandaMurid.css";
import { Icon } from "@iconify/react";
import { useNavigate, useHistory } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import AssetsHead from "../assets/assets-header.svg";
import GifHead from "../assets/119593-agenda.gif";
import React, { useEffect, useState } from "react";
import axios from "axios";
import apiurl from '../api/api';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import CardSkeletonBeranda from "../componentSkeleton/CardSkeletonBeranda";
import NameStudent from "../componentSkeleton/NameStudent";
import CardSkeletonInfoTask from "../componentSkeleton/CardSkeletonInfoTask";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";
import SkeletonHeaderHome from "../componentSkeleton/SkeletonHeaderHome";

function BerandaMurid() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataBerandaMurid, setDataBerandaMurid] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}murid/datamurid`, {
        headers: {
          "ngrok-skip-browser-warning":"any",
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataBerandaMurid(responseAPI.data);
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
  // else if (dataBerandaMurid && !isError)
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
          <li
            className="active"
            onClick={() => navigate("/murid/berandamurid")}
          >
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
          {/* <li onClick={() => navigate("/murid/pagekonseling")}>
            <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
            Konseling
          </li> */}
        </ul>
      </aside>
      <div className="container-content">
        {isLoading ? (
          <SkeletonNavbar />
        ) : (
          <NavbarMurid textNavigasi={"Beranda 11 PPLG 1"} />
        )}
        <main className="main">
          {dataBerandaMurid && dataBerandaMurid.nama ? (

          <div className="header-dashboard-home-student">
            <div className="head-left-home-student">
              <h1 className="intro-head-student">
                Halo{" "}
                  <span className="student-name">{dataBerandaMurid.nama}</span>
                
              </h1>

              <p className="desc-head-home-student" style={{ width: "550px" }}>
                Selamat datang di nugasyuk, anda bisa memonitoring tugas dan
                materi yang diberikan oleh guru.
              </p>
            </div>
            <div className="head-right-home-student">
              {/* <div className="reactangle-1">
                <img src={AssetsHead} alt="" />
                <img className="gif-head" src={GifHead} alt="" />
              </div> */}
            </div>
          </div>
          ) : (
            <SkeletonHeaderHome/>
          )}

          <div className="con-content">
            {dataBerandaMurid && dataBerandaMurid.jumlah_siswa ? (
              <div
                className="content-indiecator"
                style={{ background: "#2AB6D5", cursor: "pointer" }}
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
                    <span>{dataBerandaMurid.jumlah_siswa}</span> Siswa
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBeranda />
            )}

            {dataBerandaMurid && dataBerandaMurid.jumlah_mapel ? (
              <div
                className="content-indiecator"
                style={{ background: "#585CC4", cursor: "pointer" }}
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
                    <span>{dataBerandaMurid.jumlah_mapel}</span> Mata Pelajaran
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBeranda />
            )}

            {dataBerandaMurid && dataBerandaMurid.wali_kelas ? (
              <div
                className="content-indiecator"
                style={{ background: "#B462D0", cursor: "pointer" }}
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
                    <span>{dataBerandaMurid.wali_kelas}</span>
                  </p>
                </div>
              </div>
            ) : (
              <CardSkeletonBeranda />
            )}
          </div>

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
                          {dataBerandaMurid.belum_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
                          {dataBerandaMurid.belum_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
                          {dataBerandaMurid.menunggu_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
                          {dataBerandaMurid.menunggu_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
              {dataBerandaMurid &&
              dataBerandaMurid.selesai_dalamdeadline ? (
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
                          {dataBerandaMurid.selesai_dalamdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
                          {dataBerandaMurid.selesai_lebihdeadline}
                        </span>{" "}
                        Tugas
                      </p>
                      <p className="value-indie-information">
                        Dari <span>{dataBerandaMurid.jumlah_tugas}</span> Tugas
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
        </main>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
}

export default BerandaMurid;
