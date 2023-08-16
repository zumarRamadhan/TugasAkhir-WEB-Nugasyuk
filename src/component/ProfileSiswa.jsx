import "../App.css";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarMurid from "../component/NavbarMurid";
import ImgProfil from "../assets/profil-murid.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import apiurl from "../api/api";

function DetailProfileSiswa() {
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

  const saveToken = sessionStorage.getItem("token");

  const [dataProfileSiswa, setDataProfileSiswa] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  useEffect(() => {
    axios
      .get(`${apiurl}murid/profile`, {
        headers: {
          "ngrok-skip-browser-warning": "any",
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataProfileSiswa(responseAPI.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

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
        alert('Foto Profile Berhasil Diubah')
        // Optionally, you can update the dataProfileSiswa state with the new image URL
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengirim data", error);
      });
  };

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataProfileSiswa && !isError)
    return (
      <div>
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

        {dataProfileSiswa.map((profileSiswa) => (
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
              <div className="image-profile-detail">
                <img
                  src={
                    previewImage ||
                    `https://wondrous-squirrel-blatantly.ngrok-free.app/${profileSiswa.foto_profile}`
                  }
                  alt=""
                  className="img-detail-profile"
                />
                <div className="overlay"></div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                  id="file-input"
                />
                <label htmlFor="file-input" className="btn-edit-profile">
                  <Icon
                    icon="material-symbols:photo-camera-outline"
                    width="70"
                    className="icon-edit-profile"
                  />
                </label>
              </div>
              {/* <div className="detail-image-profile">
                <img
                  src={`https://wondrous-squirrel-blatantly.ngrok-free.app/${profileSiswa.foto_profile}`}
                  alt=""
                  className="detail-img-profile"
                />
                <button className="btn-edit-profile">
                  <Icon
                    icon="material-symbols:photo-camera-outline"
                    width="50"
                    className="icon-edit-profile"
                  />
                </button>
              </div> */}
              <p className="judul-detail">Email</p>
              <p className="value-detail">{profileSiswa.email}</p>
              <p className="judul-detail">Nama Pengguna</p>
              <p className="value-detail">{profileSiswa.nama_panggilan}</p>
              <p className="judul-detail">Nama</p>
              <p className="value-detail">{profileSiswa.nama_siswa}</p>
              <p className="judul-detail">Jurusan</p>
              <p className="value-detail">{profileSiswa.nama_jurusan}</p>
              <p className="judul-detail">Kelas</p>
              <p className="value-detail">{profileSiswa.tingkat_ke}</p>
              <p className="judul-detail">NIS</p>
              <p className="value-detail">{profileSiswa.nis}</p>
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
        ))}
      </div>
    );
}

export default DetailProfileSiswa;
