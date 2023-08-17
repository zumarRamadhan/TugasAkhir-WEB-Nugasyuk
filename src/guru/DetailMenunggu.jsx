import "../cssAll/guru/DetailMenunggu.css";
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
import axios from "axios";
import apiurl from "../api/api";

function DetailMenunggu() {
  const navText = "Pengumpulan";
  const navigate = useNavigate();

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

  // message

  // popup card loading
  const showPopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    background.style.display = "flex";
    const PopupLoading = document.querySelector(".body-loading");
    PopupLoading.style.display = "grid";
    PopupLoading.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closePopupLoading = () => {
    const background = document.querySelector(".popup-loading");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const PopupLoading = document.querySelector(".body-loading");
    setTimeout(() => (PopupLoading.style.display = "none"), 250);
    PopupLoading.style.animation = "slide-up 0.3s ease-in-out";
  };
  // end popup card loading

  const showSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = (id) => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate(`/guru/pagepengumpulan/detail/${id}`);
  };

  const showFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  // end message

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

  const { id } = useParams();
  const saveToken = sessionStorage.getItem("token");
  const [detailMenunggu, setDetailMenunggu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleKonfirmasi = (id) => {
    showPopupLoading();
    axios
      .get(`${apiurl}guru/pengumpulan/konfirmasi/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        // Penanganan ketika penghapusan berhasil
        console.log("Data berhasil Dikonfirmasi");
        // Refresh halaman atau ambil ulang data setelah penghapusan
        // window.location.reload();
        // setisShowNotifSucces(true);
        showSuccess();
        closePopupLoading();
      })
      .catch((error) => {
        // Penanganan ketika terjadi kesalahan saat menghapus data
        console.log("Terjadi kesalahan saat mengkonfirmasi :", error);
        showFailed();
        closePopupLoading();
      });
  };

  useEffect(() => {
    axios
      .get(`${apiurl}guru/pengumpulan/tugas/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDetailMenunggu(responseAPI.tugas[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  // Fungsi untuk mengambil data detail tugas dari API
  function fetchDetailTugas(id, saveToken) {
    return axios.get(`${apiurl}guru/pengumpulan/tugas/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${saveToken}`,
        "ngrok-skip-browser-warning": "any",
      },
    });
  }

  function generateFileIcons(item) {
    let fileIcon;
    let fileExtension = "";

    if (item.soal_file) {
      fileExtension = item.soal_file.substring(
        item.soal_file.lastIndexOf(".") + 1
      );
      switch (fileExtension) {
        case "pdf":
          fileIcon = "mdi:file-pdf-box";
          break;
        case "docx":
          fileIcon = "mdi:file-word-box";
          break;
        case "xlsx":
          fileIcon = "file-icons:microsoft-excel";
          break;
        default:
          fileIcon = "";
          break;
      }
    }

    return (
      <>
        {fileExtension && (
          <>
            <div className="icon-value-file">
              <Icon icon={fileIcon} width={45} />
            </div>
            <div>
              <h1 className="title-value-file">{item.nama_tugas}</h1>
              <p className="file-detailMenunggu">
                {fileExtension.toUpperCase()} <span>Klik</span>
              </p>
            </div>
          </>
        )}
      </>
    );
  }

  // start funsi generate file link elements
  function generateFileLinkElements(detailMenunggu) {
    const item = detailMenunggu;

    if (item.soal_link && item.soal_file) {
      let linkElement = [];
      if (item.soal_link.includes("youtube.com")) {
        let youtubeLink = item.soal_link.replace("watch?v=", "embed/");
        linkElement = (
          <a href={youtubeLink} className="value-link" id="value-link">
            <iframe src={youtubeLink} frameborder="0" allowFullScreen></iframe>
            <div>
              <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
              <p className="link-detailMenunggu">
                YouTube <span>Klik</span>
              </p>
            </div>
          </a>
        );
      } else if (item.soal_link.includes("youtu.be")) {
        let youtubeLink = `https://www.youtube.com/embed/${item.soal_link
          .split("/")
          .pop()}`;
        linkElement = (
          <a href={youtubeLink} className="value-link" id="value-link">
            <iframe src={youtubeLink} frameborder="0" allowFullScreen></iframe>
            <div>
              <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
              <p className="link-detailMenunggu">
                YouTube <span>Klik</span>
              </p>
            </div>
          </a>
        );
      } else {
        linkElement = (
          <a href={item.soal_link} className="btn-openSitus">
            Buka Situs
          </a>
        );
      }

      return (
        <div className="con-value-fileOrlink" key={item.pengumpulan_id}>
          {linkElement}
          <a
            href={`https://www.nugasyuk.my.id/public/${item.soal_file}`}
            className="value-file"
            id="value-file"
          >
            {generateFileIcons(item)}
          </a>
        </div>
      );
    } else if (item.soal_link) {
      if (item.soal_link.includes("youtube.com")) {
        let youtubeLink = item.soal_link.replace("watch?v=", "embed/");
        return (
          <div className="con-value-fileOrlink" key={item.pengumpulan_id}>
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameborder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          </div>
        );
      } else if (item.soal_link.includes("youtu.be")) {
        let youtubeLink = `https://www.youtube.com/embed/${item.soal_link
          .split("/")
          .pop()}`;
        return (
          <div className="con-value-fileOrlink" key={item.pengumpulan_id}>
            <a href={youtubeLink} className="value-link" id="value-link">
              <iframe
                src={youtubeLink}
                frameborder="0"
                allowFullScreen
              ></iframe>
              <div>
                <h1 className="title-fileOrlink">{item.nama_tugas}</h1>
                <p className="link-detailMenunggu">
                  YouTube <span>Klik</span>
                </p>
              </div>
            </a>
          </div>
        );
      } else {
        return (
          <div className="con-value-fileOrlink" key={item.pengumpulan_id}>
            <a href={item.soal_link} className="btn-openSitus">
              Buka Situs
            </a>
          </div>
        );
      }
    } else if (item.soal_file) {
      return (
        <div className="con-value-fileOrlink" key={item.pengumpulan_id}>
          <a
            href={`https://www.nugasyuk.my.id/public/${item.soal_file}`}
            className="value-file"
            id="value-file"
          >
            {generateFileIcons(item)}
          </a>
        </div>
      );
    }

    return null;
  }
  // end funsi generate file link elements

  // Panggil fungsi generateFileLinkElements untuk menghasilkan elemen-elemen yang sesuai
  const fileLinkElements = generateFileLinkElements(detailMenunggu);

  if (detailMenunggu && !isError)
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
          <li onClick={() => navigate("/guru/pagekbm")}>
            <Icon icon="ph:chalkboard-teacher" width="20" />
            KBM
          </li>
          <li
            className="active"
            onClick={() => navigate("/guru/pagepengumpulan")}
          >
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
          <div className="header-content-DetailMenunggu">
            <div className="card-DetailMenunggu-Guru">
              <div className="card-DetailMenunggu-Guru-left">
                <div className="img-DetailMenunggu-Guru">
                  <img
                    src={damiImgMurid}
                    alt=""
                    className="image-DetailMenunggu-Guru"
                  />
                </div>
                <div className="desc-card-DetailMenunggu-Guru">
                  <p className="name-card-DetailMenunggu-Guru">
                    Ahmad Aziz Wira Widodo
                  </p>
                  <p className="email-card-DetailMenunggu-Guru">
                    ahmadaziz@smkrus.sch.id
                  </p>
                </div>
              </div>
              <div className="detaiKelas-DetailMenunggu-Guru">
                <p>11 PPLG 1</p>
              </div>
            </div>
          </div>

          <div className="content-DetailMenunggu">
            <div className="con-card-detailMenunggu">
              <div className="header-card-detailMenunggu">
                <div className="left-header-card-detailMenunggu">
                  <div className="icon-header-card-detailMenunggu">
                    <Icon icon="uiw:time-o" width={40} />
                  </div>
                  <div className="text-header-card-detailMenunggu">
                    <h1 className="title-header-card-detailMenunggu">
                      {detailMenunggu.nama_tugas}
                    </h1>
                    <p className="guru-header-card-detailMenunggu">
                      {detailMenunggu.nama_guru}
                    </p>
                  </div>
                </div>
                <div className="right-header-card-detailMenunggu">
                  <p className="date-header-card-detailMenunggu">
                    {detailMenunggu.date}
                  </p>
                  {/* <div className="icon-options" style={{ cursor: "pointer" }}>
                    <Icon icon="mi:options-vertical" width={40} />
                  </div> */}
                </div>
              </div>

              <p className="desc-card-detailMenunggu">{detailMenunggu.soal}</p>

              <p className="infoDeadline">
                Deatline : {detailMenunggu.deadline}
              </p>

              <div>{fileLinkElements}</div>

              <div className="sectionJawaban">
                <h1 className="title-sectionJawaban">Jawaban</h1>
                <div className="value-file" id="value-file">
                  <div className="icon-value-file">
                    <Icon icon="mdi:file-word-box" width={45} />
                  </div>
                  <div>
                    <h1 className="title-value-file">29_Muhammad_Zum...</h1>
                    <p className="file-detailMenunggu">
                      DOCX <span>Klik</span>
                    </p>
                  </div>
                </div>
                <button className="btn-collection-confirmation" onClick={() => handleKonfirmasi(detailMenunggu.pengumpulan_id)}>
                  Konfirmasi
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

      {/* message */}
      <div id="popup-success">
        <div className="detail-success">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeSuccess}
          />
          <div className="image-success">
            <img src={ImgSuccess} alt="Success" className="img-success" />
          </div>
          <p className="desc-success">Tugas Berhasil Di Konfirmasi</p>
          <button className="btn-success" onClick={() => closeSuccess(detailMenunggu.murid_id)}>
            Kembali
          </button>
        </div>
      </div>

      <div id="popup-Failed">
        <div className="detail-Failed">
          <Icon
            icon="radix-icons:cross-circled"
            width="30"
            style={{ cursor: "pointer" }}
            onClick={closeFailed}
          />
          <div className="image-Failed">
            <img src={ImgFailed} alt="Failed" className="img-Failed" />
          </div>
          <p className="desc-Failed">Tugas Gagal Di konfirmasi</p>
          <button className="btn-Failed" onClick={closeFailed}>
            Kembali
          </button>
        </div>
      </div>

      {/* end message */}

      {/* card loading */}
      <div className="popup-loading">
        <div className="body-loading" id="body-loading">
          <svg
            class="pl"
            viewBox="0 0 200 200"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="pl-grad1" x1="1" y1="0.5" x2="0" y2="0.5">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
              <linearGradient id="pl-grad2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="hsl(313,90%,55%)" />
                <stop offset="100%" stop-color="hsl(223,90%,55%)" />
              </linearGradient>
            </defs>
            <circle
              class="pl__ring"
              cx="100"
              cy="100"
              r="82"
              fill="none"
              stroke="url(#pl-grad1)"
              stroke-width="36"
              stroke-dasharray="0 257 1 257"
              stroke-dashoffset="0.01"
              stroke-linecap="round"
              transform="rotate(-90,100,100)"
            />
            <line
              class="pl__ball"
              stroke="url(#pl-grad2)"
              x1="100"
              y1="18"
              x2="100.01"
              y2="182"
              stroke-width="36"
              stroke-dasharray="1 165"
              stroke-linecap="round"
            />
          </svg>
        </div>
      </div>
      {/* end loading */}
    </div>
  );
}

export default DetailMenunggu;
