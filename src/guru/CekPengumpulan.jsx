import "../cssAll/guru/CekPengumpulan.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useEffect } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import damiImgMurid from "../assets/damiImgMurid.png";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import apiurl from "../api/api";
import axios from "axios";

function CekPengumpulan() {
  const navText = "KBM 11 PPLG 1";
  const navigate = useNavigate();

  const { id } = useParams();
  const saveToken = sessionStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [listPengumpulan, setListPengumpulan] = useState([]);
  const [detailMenunggu, setDetailMenunggu] = useState([]);
  const [detailSelesai, setDetailSelesai] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiurl}guru/detail/pengumpulan/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API detail tugas", result.data);
        const responseAPI = result.data;

        setListPengumpulan(responseAPI.pengumpulan[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  //   API menunggu dan selesai
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          setIsLoading(true);

          // Pemanggilan API guru/pengumpulan/menunggu/${id}
          const responseMenunggu = await axios.get(
            `${apiurl}guru/cek/pengumpulan/menunggu/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${saveToken}`,
                "ngrok-skip-browser-warning": "any",
              },
            }
          );

          console.log("Data API Menunggu:", responseMenunggu.data);
          const responseDataMenunggu = responseMenunggu.data;

          setDetailMenunggu(responseDataMenunggu.pengumpulan);

          // Pemanggilan API guru/pengumpulan/selesai/${id}
          const responseSelesai = await axios.get(
            `${apiurl}guru/cek/pengumpulan/selesai/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${saveToken}`,
                "ngrok-skip-browser-warning": "any",
              },
            }
          );

          console.log("Data API Selesai:", responseSelesai.data);
          const responseDataSelesai = responseSelesai.data;

          setDetailSelesai(responseDataSelesai.pengumpulan);

          setIsLoading(false);
        } catch (error) {
          console.log("Terjadi kesalahan: ", error);
          setIsError(true);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [id, saveToken]);

  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  const showLogoutPopup = () => {
    const popupLogout = document.querySelector("#popup-logout");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeLogoutPopup = () => {
    const popupLogout = document.querySelector("#popup-logout");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showForgetPopup = () => {
    const popupForget = document.querySelector("#popup-forget");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeForgetPopupAndClearInput = () => {
    const popupForget = document.querySelector("#popup-forget");
    setTimeout(() => (popupForget.style.display = "none"), 250);
    popupForget.style.animation = "slide-up 0.3s ease-in-out";
    const clearpassword = document.querySelector(
      "#password",
      "#newPassword",
      "#confirmPassword"
    );
    clearpassword.value = "";
    const clearpasswordNew = document.querySelector("#newPassword");
    clearpasswordNew.value = "";
    const clearpasswordConfirm = document.querySelector("#confirmPassword");
    clearpasswordConfirm.value = "";
  };

  const [passwordType, setPasswordType] = useState("password");
  const [passwordTypeNew, setPasswordTypeNew] = useState("password");
  const [passwordTypeConfirm, setPasswordTypeConfirm] = useState("password");

  function togglePasswordVisibility() {
    setPasswordType(passwordType === "password" ? "text" : "password");
  }

  function togglePasswordVisibilityNew() {
    setPasswordTypeNew(passwordTypeNew === "password" ? "text" : "password");
  }

  function togglePasswordVisibilityConfirm() {
    setPasswordTypeConfirm(
      passwordTypeConfirm === "password" ? "text" : "password"
    );
  }

  const [activeContent, setActiveContent] = useState(
    "detailMenungguPengumpulan"
  );

  const showMenunggu = () => {
    setActiveContent("detailMenungguPengumpulan");
  };

  const showSelesai = () => {
    setActiveContent("detailSelesaiPengumpulan");
  };

  return (
    <div>
      <aside>
        <h1
          className="title-form-login"
          onClick={() => navigate("/guru/berandaguru")}
        >
          <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
          nugasyuk
        </h1>
        <ul>
          <li onClick={() => navigate("/guru/berandaguru")}>
            <Icon icon="iconoir:home-simple" width="20" />
            Beranda
          </li>
          <li className="active" onClick={() => navigate("/guru/pagekbm")}>
            <Icon icon="ph:chalkboard-teacher" width="20" />
            KBM
          </li>
          <li onClick={() => navigate("/guru/pagepengumpulan")}>
            <Icon icon="uiw:date" width="18" />
            Pengumpulan
          </li>
          <li onClick={() => navigate("/guru/pageJadwalKbm")}>
            <Icon icon="fluent-mdl2:education" width="18" />
            Jadwal KBM
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <NavbarGuru text={navText} />
        <div className="main">
          <div className="con-card-detailTugas">
            <div className="header-card-detailTugas">
              <div className="left-header-card-detailTugas">
                <div className="icon-header-card-detailTugas">
                  <Icon icon="tabler:clipboard-text" width={40} />
                </div>
                <div className="text-header-card-detailTugas">
                  <h1 className="title-header-card-detailTugas">
                    {listPengumpulan.nama_tugas}
                  </h1>
                  <p className="guru-header-card-detailTugas">
                    {listPengumpulan.nama_guru}
                  </p>
                </div>
              </div>
              <div className="right-header-card-detailTugas">
                <p className="date-header-card-detailTugas">
                  {listPengumpulan.date}
                </p>
              </div>
            </div>

            <p className="desc-card-detailTugas">{listPengumpulan.soal}</p>

            <p className="infoDeadline">
              Deatline : {listPengumpulan.deadline}
            </p>
          </div>

          <div className="switch-container">
            <button
              id="btn-MenungguPengumpulan"
              className={
                activeContent === "detailMenungguPengumpulan"
                  ? "activeDetailPengumpulan"
                  : ""
              }
              onClick={showMenunggu}
            >
              Menunggu
            </button>
            <button
              id="btn-SelesaiPengumpulan"
              className={
                activeContent === "detailSelesaiPengumpulan"
                  ? "activeDetailPengumpulan"
                  : ""
              }
              onClick={showSelesai}
            >
              Selesai
            </button>
          </div>

          <div
            className="con-DetailPengumpulan"
            style={{
              display:
                activeContent === "detailMenungguPengumpulan"
                  ? "block"
                  : "none",
            }}
          >
            <div className="con-DetailPengumpulan-Menunggu">
              {isLoading ? (
                <div className="con-DetailPengumpulan-Menunggu">
                  <div className="skeleton-card-DetailPengumpulan-Menunggu"></div>
                  <div className="skeleton-card-DetailPengumpulan-Menunggu"></div>
                  <div className="skeleton-card-DetailPengumpulan-Menunggu"></div>
                  <div className="skeleton-card-DetailPengumpulan-Menunggu"></div>
                </div>
              ) : detailMenunggu.length === 0 ? (
                <div className="card-DetailPengumpulan-Menunggu-noData">
                  <p>Tidak ada data menunggu konfirmasi</p>
                </div>
              ) : (
                detailMenunggu.map((data) => (
                  <div
                    className="card-Pengumpulan-Guru"
                    style={{ cursor: "pointer" }}
                    key={data.id} // Tambahkan key prop untuk mencegah pesan warning
                  >
                    <div className="card-Pengumpulan-Guru-left">
                      <div className="img-Pengumpulan-Guru">
                        <img
                          src={damiImgMurid} // Anda bisa gunakan data.foto_profile jika data tersebut tersedia
                          alt={data.foto_profile}
                          className="image-Pengumpulan-Guru"
                        />
                      </div>
                      <div className="desc-card-Pengumpulan-Guru">
                        <p className="name-card-Pengumpulan-Guru">
                          {data.nama_siswa}
                        </p>
                        <p className="email-card-Pengumpulan-Guru">
                          {data.email}
                        </p>
                      </div>
                    </div>
                    <div className="detaiKelas-Pengumpulan-Guru">
                      <p>
                        {data.tingkat_ke +
                          " " +
                          data.nama_jurusan +
                          " " +
                          data.nama_kelas}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div
            className="con-DetailPengumpulan"
            style={{
              display:
                activeContent === "detailSelesaiPengumpulan" ? "block" : "none",
            }}
          >
            <div className="con-DetailPengumpulan-Selesai">
              {isLoading ? (
                <div className="con-DetailPengumpulan-Selesai">
                  <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                  <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                  <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                  <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                </div>
              ) : detailSelesai.length === 0 ? (
                <div className="card-DetailPengumpulan-Selesai-noData">
                  <p>Tidak ada data tugas selesai</p>
                </div>
              ) : (
                detailSelesai.map((data) => (
                  <div
                    className="card-Pengumpulan-Guru"
                    style={{ cursor: "pointer" }}
                    key={data.id} // Tambahkan key prop untuk mencegah pesan warning
                  >
                    <div className="card-Pengumpulan-Guru-left">
                      <div className="img-Pengumpulan-Guru">
                        <img
                          src={damiImgMurid} // Anda bisa gunakan data.foto_profile jika data tersebut tersedia
                          alt={data.foto_profile}
                          className="image-Pengumpulan-Guru"
                        />
                      </div>
                      <div className="desc-card-Pengumpulan-Guru">
                        <p className="name-card-Pengumpulan-Guru">
                          {data.nama_siswa}
                        </p>
                        <p className="email-card-Pengumpulan-Guru">
                          {data.email}
                        </p>
                      </div>
                    </div>
                    <div className="detaiKelas-Pengumpulan-Guru">
                      <p>
                        {data.tingkat_ke +
                          " " +
                          data.nama_jurusan +
                          " " +
                          data.nama_kelas}
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* end body */}

      <div className="popup-logout" id="popup-logout">
        <div className="detail-logout">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeLogoutPopup}
          />
          <div className="image-logout">
            <img src={ImgLogout} alt="" className="img-logout" />
          </div>
          <p className="desc-logout">Anda yakin ingin keluar?</p>
          <div className="con-btn-logout">
            <button type="button" className="btn-batal">
              Batal
            </button>
            <button type="button" className="btn-keluar">
              Keluar
            </button>
          </div>
        </div>
      </div>

      <div className="popup-forget" id="popup-forget">
        <form action="" className="detail-forget-password">
          <div className="navbar-detail-forget">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeForgetPopupAndClearInput}
            />
            <h2>Ganti Password</h2>
          </div>
          <p className="judul-form">Sandi lama</p>
          <div className="con-form-password">
            <img src={passIcon} alt="" />
            <input
              type={passwordType}
              id="password"
              placeholder="*********"
              className="input-password"
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibility}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>
          <p className="judul-form">Sandi baru</p>
          <div className="con-form-password">
            <img src={passIcon} alt="" />
            <input
              type={passwordTypeNew}
              id="newPassword"
              placeholder="*********"
              className="input-password"
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibilityNew}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>
          <p className="judul-form">Konfirmasi sandi baru</p>
          <div className="con-form-password">
            <img src={passIcon} alt="" />
            <input
              type={passwordTypeConfirm}
              id="confirmPassword"
              placeholder="*********"
              className="input-password"
            />
            <button
              type="button"
              className="btn-mata"
              onClick={togglePasswordVisibilityConfirm}
            >
              <img src={mataIcon} alt="" />
            </button>
          </div>

          <button type="submit" className="btn-simpan">
            Simpan sandi baru
          </button>
        </form>
      </div>

      <div className="detail-profile">
        <div className="content-detail">
          <div className="navbar-detail">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeDetail}
            />
            <h2>Profil</h2>
          </div>
          <div className="detail-image-profile">
            <img src={ImgProfil} alt="" className="detail-img-profile" />
          </div>
          <p className="judul-detail">Email</p>
          <p className="value-detail">budiono@smkrus.sch.id</p>
          <p className="judul-detail">Nama</p>
          <p className="value-detail">Budiono, S.Pd</p>
          <p className="judul-detail">Pengampu</p>
          <p className="value-detail">Bahasa Inggris</p>
        </div>
        <div className="con-btn-detail-profile">
          <button
            className="forget-password"
            id="btn-forget-pass"
            onClick={showForgetPopup}
          >
            <Icon icon="material-symbols:key-outline-rounded" width="30" />
            <p>Ganti Password</p>
          </button>
          <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
            <Icon icon="material-symbols:logout-rounded" width="30" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CekPengumpulan;
