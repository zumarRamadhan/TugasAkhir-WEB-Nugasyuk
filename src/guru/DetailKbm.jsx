import "../cssAll/guru/DetailKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useEffect } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";

function DetailKbm() {
  // const navText = "{KBM 'KELAS'}";
  const navigate = useNavigate();
  const saveToken = sessionStorage.getItem("token");

  if (!saveToken) {
    navigate("/login");
  }

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/login";
  };

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [listMateri, setListMateri] = useState([]);
  const [listTugas, setListTugas] = useState([]);
  const [titleKelas, setTitleKelas] = useState([]);
  const [kelasIdMateri, setKelasIdMateri] = useState([]);
  const [kelasIdTugas, setKelasIdTugas] = useState([]);

  const handleListMateri = (id) => {
    navigate(`/guru/pagekbm/detail/detailmateri/${id}`);
  };

  const handleListTugas = (id) => {
    navigate(`/guru/pagekbm/detail/detailtugas/${id}`);
  };

  const handleMateri = (id) => {
    navigate(`/guru/pagekbm/detail/formmateri/${id}`);
  };

  const handleTugas = (id) => {
    navigate(`/guru/pagekbm/detail/formtugas/${id}`);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  //   API menunggu dan selesai
  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
          setIsLoading(true);

          // Pemanggilan API guru/pengumpulan/menunggu/${id}
          const responseMateri = await axios.get(
            `${apiurl}guru/materi/kelas/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${saveToken}`,
                "ngrok-skip-browser-warning": "any",
              },
            }
          );

          console.log("Data API Materi:", responseMateri.data);
          const responseListMateri = responseMateri.data;

          setListMateri(responseListMateri.materi);
          setTitleKelas(responseListMateri.kelas);
          setKelasIdMateri(responseListMateri.kelas_id);

          // Pemanggilan API guru/pengumpulan/selesai/${id}
          const responseTugas = await axios.get(
            `${apiurl}guru/tugas/kelas/${id}`,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${saveToken}`,
                "ngrok-skip-browser-warning": "any",
              },
            }
          );

          console.log("Data API Tugas:", responseTugas.data);
          const responseListTugas = responseTugas.data;

          setListTugas(responseListTugas.tugas);
          setKelasIdTugas(responseListTugas.kelas_id);

          setIsLoading(false);
        } catch (error) {
          console.log("Terjadi kesalahan Tugas/Materi: ", error);
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
    const background = document.querySelector("#popup-forget");
    background.style.display = "flex";
    const popupForget = document.querySelector(".detail-forget-password");
    popupForget.style.display = "block";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeForgetPopupAndClearInput = () => {
    const background = document.querySelector("#popup-forget");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupForget = document.querySelector(".detail-forget-password");
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

  const [activeContent, setActiveContent] = useState("detailMateriKbm");

  const showMateri = () => {
    setActiveContent("detailMateriKbm");
  };

  const showTugas = () => {
    setActiveContent("detailTugasKbm");
  };

  // message popup & loading popup

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

  // end loading popup

  const showSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    background.style.display = "flex";
    const popupSuccess = document.querySelector("#detail-success-ChangesPass");
    popupSuccess.style.display = "flex";
    popupSuccess.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showFailedChangesPass = () => {
    const background = document.querySelector("#popup-Failed-ChangesPass");
    background.style.display = "flex";
    const popupFailed = document.querySelector("#detail-Failed-ChangesPass");
    popupFailed.style.display = "flex";
    popupFailed.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupSuccess = document.querySelector("#detail-success-ChangesPass");
    setTimeout(() => (popupSuccess.style.display = "none"), 250);
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";
  };

  const closeFailedChangesPass = () => {
    const background = document.querySelector("#popup-Failed-ChangesPass");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupFailed = document.querySelector("#detail-Failed-ChangesPass");
    setTimeout(() => (popupFailed.style.display = "none"), 250);
    popupFailed.style.animation = "slide-up 0.3s ease-in-out";
  };

  // end message popup

  // function changes password
  const [formPass, setformPass] = useState({
    password_lama: "",
    password_baru: "",
    konfirmasi_password_baru: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformPass((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitChangesPass = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formPass);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      showPopupLoading();
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.password_lama) {
      errors.password_lama = "Silahkan password lama anda";
    }

    if (data.password_baru.trim().length < 8) {
      errors.password_baru = "Password harus lebih dari 8 karakter";
    }

    if (!data.password_baru) {
      errors.password_baru = "Silahkan masukkan password baru anda";
    }

    if (data.password_baru !== data.konfirmasi_password_baru) {
      errors.konfirmasi_password_baru = "Pastikan password sama";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmitting) {
      const formData = new FormData();
      formData.append("password_lama", formPass.password_lama);
      formData.append("password_baru", formPass.password_baru);

      axios
        .post(`${apiurl}guru/ubahpassword`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Password berhasil diperbarui");

          showSuccessChangesPass();
          closeForgetPopupAndClearInput();
          closePopupLoading();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setformPass({
            password_lama: "",
            password_baru: "",
            konfirmasi_password_baru: "",
          });

          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui password:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui password" });
          setIsSubmitting(false);
          showFailedChangesPass();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formPass]);

  // end function changes password

  if (
    listMateri &&
    listTugas &&
    titleKelas &&
    kelasIdMateri &&
    kelasIdTugas &&
    !isError
  )
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
          <NavbarGuru text={"KBM" + " " + titleKelas} />
          <div className="main">
            <div className="header-content">
              <div className="switch-container-detailKbm">
                <button
                  id="btn-materiKbm"
                  className={
                    activeContent === "detailMateriKbm" ? "activeDetailKbm" : ""
                  }
                  onClick={showMateri}
                >
                  Materi
                </button>
                <button
                  id="btn-tugasKbm"
                  className={
                    activeContent === "detailTugasKbm" ? "activeDetailKbm" : ""
                  }
                  onClick={showTugas}
                >
                  Tugas
                </button>
              </div>

              <button
                className="btn-add-materi"
                style={{
                  display:
                    activeContent === "detailMateriKbm" ? "flex" : "none",
                }}
                onClick={() => handleMateri(kelasIdMateri)}
              >
                <Icon icon="ic:round-plus" width="20"></Icon>
                <p>Tambah Data</p>
              </button>

              <button
                className="btn-add-tugas"
                style={{
                  display: activeContent === "detailTugasKbm" ? "flex" : "none",
                }}
                onClick={() => handleTugas(kelasIdTugas)}
              >
                <Icon icon="ic:round-plus" width="20"></Icon>
                <p>Tambah Data</p>
              </button>
            </div>

            <div
              className="con-DetailKbm"
              style={{
                display: activeContent === "detailMateriKbm" ? "block" : "none",
              }}
            >
              <div className="con-DetailKbm-Materi">
                {isLoading ? (
                  /* Skeleton loading for list materi */
                  <div className="con-DetailKbm-Materi">
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                  </div>
                ) : listMateri.length === 0 ? (
                  <div className="card-DetailPengumpulan-Selesai-noData">
                    <p>Tidak ada materi diberikan</p>
                  </div>
                ) : (
                  listMateri.map((data) => (
                    <div
                      key={data.id}
                      className="card-DetailKbm-Materi"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleListMateri(data.id)}
                    >
                      <div className="card-DetailKbm-Materi-left">
                        <div className="img-DetailKbm-Materi">
                          <Icon icon="ri:book-line" width={40} />
                        </div>
                        <div className="desc-DetailKbm-Materi">
                          <p className="judul-DetailKbm-Materi">
                            {data.nama_materi}
                          </p>
                          <p className="materi-DetailKbm-Guru">
                            {data.nama_guru}
                          </p>
                        </div>
                      </div>
                      <div className="card-DetailKbm-Materi-right">
                        <div className="dateDetailDesc">
                          {formatDate(data.tanggal_dibuat)}
                        </div>
                        <Icon
                          icon="ic:round-navigate-next"
                          width={30}
                          color="#2A93D5"
                        />
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div
              className="con-DetailKbm"
              style={{
                display: activeContent === "detailTugasKbm" ? "block" : "none",
              }}
            >
              <div className="con-DetailKbm-Tugas">
                {isLoading ? (
                  /* Skeleton loading for list materi */
                  <div className="con-DetailKbm-Tugas">
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                    <div className="skeleton-card-DetailPengumpulan-Selesai"></div>
                  </div>
                ) : listTugas.length === 0 ? (
                  <div className="card-DetailPengumpulan-Selesai-noData">
                    <p>Tidak ada tugas yang di berikan</p>
                  </div>
                ) : (
                  listTugas.map((data) => (
                    <div
                      key={data.id}
                      className="card-DetailKbm-Tugas"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleListTugas(data.id)}
                    >
                      <div className="card-DetailKbm-Tugas-left">
                        <div className="img-DetailKbm-Tugas">
                          <Icon icon="tabler:clipboard-text" width={40} />
                        </div>
                        <div className="desc-DetailKbm-Tugas">
                          <p className="judul-DetailKbm-Tugas">
                            {data.nama_tugas}
                          </p>
                          <p className="materi-DetailKbm-Guru">
                            {data.nama_guru}
                          </p>
                        </div>
                      </div>
                      <div className="card-DetailKbm-Tugas-right">
                        <div className="dateDetailDesc">
                          {formatDate(data.date)}
                        </div>
                        <div className="deadline-timeTugas">
                          Deadline : {formatDate(data.deadline)}
                        </div>
                        <Icon
                          icon="ic:round-navigate-next"
                          width={30}
                          color="#2A93D5"
                        />
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
              <button type="button" className="btn-keluar" onClick={logout}>
                Keluar
              </button>
            </div>
          </div>
        </div>

        <div className="popup-forget" id="popup-forget">
          <form
            onSubmit={handleSubmitChangesPass}
            className="detail-forget-password"
          >
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
                name="password_lama"
                value={formPass.password_lama}
                onChange={handleChanges}
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibility}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>
            {errors.password_lama && (
              <span className="error">{errors.password_lama}</span>
            )}

            <p className="judul-form">Sandi baru</p>
            <div className="con-form-password">
              <img src={passIcon} alt="" />
              <input
                type={passwordTypeNew}
                id="newPassword"
                placeholder="*********"
                className="input-password"
                name="password_baru"
                value={formPass.password_baru}
                onChange={handleChanges}
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibilityNew}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>
            {errors.password_baru && (
              <span className="error">{errors.password_baru}</span>
            )}

            <p className="judul-form">Konfirmasi sandi baru</p>
            <div className="con-form-password">
              <img src={passIcon} alt="" />
              <input
                type={passwordTypeConfirm}
                id="confirmPassword"
                placeholder="*********"
                className="input-password"
                name="konfirmasi_password_baru"
                value={formPass.konfirmasi_password_baru}
                onChange={handleChanges}
              />
              <button
                type="button"
                className="btn-mata"
                onClick={togglePasswordVisibilityConfirm}
              >
                <img src={mataIcon} alt="" />
              </button>
            </div>
            {errors.konfirmasi_password_baru && (
              <span className="error">{errors.konfirmasi_password_baru}</span>
            )}

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
            <button
              className="logout"
              id="btn-logout"
              onClick={showLogoutPopup}
            >
              <Icon icon="material-symbols:logout-rounded" width="30" />
              <p>Logout</p>
            </button>
          </div>
        </div>

        {/* message Changes Pass */}

        <div id="popup-success-ChangesPass">
          <div className="detail-success" id="detail-success-ChangesPass">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeSuccessChangesPass}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Password Berhasil Di Perbarui</p>
            <button className="btn-success" onClick={closeSuccessChangesPass}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-Failed-ChangesPass">
          <div className="detail-Failed" id="detail-Failed-ChangesPass">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeFailedChangesPass}
            />
            <div className="image-Failed">
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">
              Masukan Password Lama Anda Dengan Benar!!
            </p>
            <button className="btn-Failed" onClick={closeFailedChangesPass}>
              Kembali
            </button>
          </div>
        </div>

        {/* end message Changes Pass*/}
        {/* page laoding */}

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

        {/* end page loading */}
      </div>
    );
}

export default DetailKbm;
