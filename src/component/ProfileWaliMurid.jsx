import "../App.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import ImgProfil from "../assets/profil-walimurid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgFailed from "../assets/94303-failed.gif";
import ImgSuccess from "../assets/88860-success-animation.gif";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonProfile from "../componentSkeleton/SkeletonProfile";
import apiurl from "../api/api";

function DetailWaliMurid() {
  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  const closeDetailNotif = () => {
    const detailProfile = document.querySelector(".detail-notif");
    detailProfile.style.transform = "translateX(350px)";
  };

  const showLogoutPopup = () => {
    const background = document.querySelector("#popup-logout");
    background.style.display = "flex";
    const popupLogout = document.querySelector(".detail-logout");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeLogoutPopup = () => {
    const background = document.querySelector("#popup-logout");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupLogout = document.querySelector(".detail-logout");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showForgetPopup = () => {
    const background = document.querySelector("#popup-forget");
    background.style.display = "flex";
    const popupForget = document.querySelector(".detail-forget-password");
    popupForget.style.display = "grid";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  const showSuccessAdd = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    // navigate(`/murid/detailtugas/{$id}`);
    window.location.reload();
  };

  const showFailedAdd = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeFailed = () => {
    const popupLogout = document.querySelector("#popup-Failed");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
  };

  const showSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    background.style.display = "flex";
    const SuccessChangePass = document.querySelector(".detail-success"); // Ganti dengan selektor yang sesuai
    SuccessChangePass.style.display = "grid";
    SuccessChangePass.style.animation = "slide-down 0.3s ease-in-out";
  };

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

  const showFailedChangesPass = () => {
    const popupLogout = document.querySelector("#popup-Failed-ChangesPass");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccessChangesPass = () => {
    const background = document.querySelector("#popup-success-ChangesPass");
    setTimeout(() => (background.style.display = "none"), 300);
    const popupSuccess = document.querySelector("#detail-success-ChangesPass");
    setTimeout(() => (popupSuccess.style.display = "none"), 250);
    popupSuccess.style.animation = "slide-up 0.3s ease-in-out";
    // window.location.reload();
  };

  const closeFailedChangesPass = () => {
    const messageCode = document.querySelector("#popup-Failed-ChangesPass");
    setTimeout(() => (messageCode.style.display = "none"), 250);
    messageCode.style.animation = "slide-up 0.3s ease-in-out";
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

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const saveToken = sessionStorage.getItem("token");

  const [dataProfileOrtu, setDataProfileOrtu] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${apiurl}ortu/profile`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataProfileOrtu(responseAPI.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(
          "Terjadi kesalahan saat mengambil data profile wali",
          error
        );
        setisLoading(false);
        setisError(true);
      });
  }, []);

  // function changes password
  const [formPass, setformPass] = useState({
    password_lama: "",
    password_baru: "",
    konfirmasi_password_baru: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setformPass((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "password_baru" || name === "konfirmasi_password_baru") {
      if (
        name === "konfirmasi_password_baru" &&
        value !== formPass.password_baru
      ) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          konfirmasi_password_baru: "Pastikan password sama",
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          konfirmasi_password_baru: "",
        }));
      }
    }
  };

  const handleSubmitChangesPass = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formPass);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      // showPopupLoading();
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
      showPopupLoading();

      axios
        .post(`${apiurl}ortu/ubahpassword`, formData, {
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

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Generate a preview of the selected image
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewImage(e.target.result);
    };
    reader.readAsDataURL(file);

    // Automatically send the edited profile image to the API
    editProfile(file);
  };

  const editProfile = (file) => {
    // Create FormData to send the file to the API
    const formData = new FormData();
    formData.append("foto_profile", file);
    showPopupLoading();

    axios
      .post(`${apiurl}murid/edit/foto`, formData, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        console.log("Data berhasil dikirim", response.data);
        showSuccessAdd();
        closePopupLoading();
        // Optionally, you can update the dataProfileSiswa state with the new image URL
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengirim data", error);
        showFailedAdd();
        closePopupLoading();
      });
  };

  if (dataProfileOrtu && !isError)
    return (
      <div>
        {dataProfileOrtu.map((profileOrtu) => (
          <div className="detail-profile" key={profileOrtu.id}>
            {isLoading ? (
              <div className="content-detail">
                <SkeletonProfile />
              </div>
            ) : (
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
                  <img
                    src={`https://wondrous-squirrel-blatantly.ngrok-free.app/${profileOrtu.foto_profile}`}
                    alt=""
                    className="detail-img-profile"
                  />
                </div>
                <p className="judul-detail">Email</p>
                <p className="value-detail">{profileOrtu.email}</p>
                <p className="judul-detail">Nama</p>
                <p className="value-detail">{profileOrtu.nama}</p>
                <p className="judul-detail">Orang Tua Dari</p>
                <p className="value-detail">{profileOrtu.nama_siswa}</p>
                <p className="judul-detail">NIS</p>
                <p className="value-detail">{profileOrtu.nis}</p>
              </div>
            )}

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
        ))}
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
              <button
                type="button"
                className="btn-batal"
                onClick={closeLogoutPopup}
              >
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

        <div id="popup-success">
          <div className="detail-success" id="detail-success-ChangesPass">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeSuccess}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Foto Profile Sudah Diubah</p>
            <button className="btn-success" onClick={closeSuccess}>
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
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">Maaf Terjadi Kesalahan</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        {/* messege delete */}

        <div id="popup-success">
          <div className="detail-success">
            <Icon
              icon="radix-icons:cross-circled"
              width="30"
              style={{ cursor: "pointer" }}
              onClick={closeSuccess}
            />
            <div className="image-success">
              <img
                src={ImgSuccess}
                alt="Delete Success"
                className="img-success"
              />
            </div>
            <p className="desc-success">Data Berhasil Di Hapus</p>
            <button className="btn-success" onClick={closeSuccess}>
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
              <img src={ImgFailed} alt="Delete Failed" className="img-Failed" />
            </div>
            <p className="desc-Failed">Data Gagal Di Hapus</p>
            <button className="btn-Failed" onClick={closeFailed}>
              Kembali
            </button>
          </div>
        </div>

        <div id="popup-success-ChangesPass">
          <div className="detail-success">
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
          <div className="detail-Failed">
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

export default DetailWaliMurid;
