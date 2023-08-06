import "../cssAll/guru/FormTugasKBM.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarGuru from "../component/NavbarGuru";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import { useState, useRef, useEffect } from "react";
import ImgProfil from "../assets/profil-guru.svg";
import damiImgMurid from "../assets/damiImgMurid.png";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";

function FormTugasKBM() {
  const navText = "Tambah Tugas";
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

  // messege

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

  const showPopupLoadingDetail = () => {
    const background = document.querySelector("#popup-loadingDetail");
    background.style.display = "flex";
    const PopupLoadingDetail = document.querySelector(".body-loadingDetail");
    PopupLoadingDetail.style.display = "grid";
    PopupLoadingDetail.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closePopupLoadingDetail = () => {
    const background = document.querySelector("#popup-loadingDetail");
    setTimeout(() => (background.style.display = "none"), 300);
    // background.style.display = "none";
    const PopupLoadingDetail = document.querySelector(".body-loadingDetail");
    setTimeout(() => (PopupLoadingDetail.style.display = "none"), 250);
    PopupLoadingDetail.style.animation = "slide-up 0.3s ease-in-out";
  };
  // end popup card loading

  const showSuccessAdd = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate("/guru/pagekbm/detail/1");
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

  // end messege

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

  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    judul_tugas: "",
    desc_tugas: "",
    deadline: "",
    link: "",
    file: "",
    input_jawaban: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("judul_tugas", formData.judul_tugas);
      form.append("tugas", formData.desc_tugas);
      form.append("deadline", formData.deadline);
      form.append("link", formData.link);
      form.append("file", formData.file);
      form.append("input_jawaban", formData.input_jawaban);

      axios
        .post(`${apiurl}guru/tugas/1`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccessAdd();
          closePopupLoading();
          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormData({
            // Set nilai awal untuk setiap field formulir
            judul_tugas: "",
            desc_tugas: "",
            deadline: "",
            link: "",
            file: "",
            input_jawaban: "",
          });

          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          showFailedAdd();
          closePopupLoading();
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, formData]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const fileData = type === "file" ? e.target.files[0] : value;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "file" ? fileData : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      showPopupLoading();
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (!data.judul_tugas.trim()) {
      errors.judul_tugas = "Judul Tugas Harus Diisi";
    }

    if (!data.deadline.trim()) {
      errors.deadline = "Deadline Harus Diisi";
    }
    if (!data.desc_tugas.trim()) {
      errors.desc_tugas = "Deskripsi Tugas Harus Diisi";
    }
    // Validasi link
    if (data.link && !/^https?:\/\//.test(data.link)) {
      errors.link = "Link harus dimulai dengan https:// atau http://";
    }

    if (!data.input_jawaban) {
      errors.input_jawaban = "Harus memilih salah satu";
    }

    return errors;
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
          <div className="content-formKbm">
            <form onSubmit={handleSubmit} className="container-formKbm">
              <div className="con-formKbm">
                <div className="title-formKbm">Judul Tugas</div>
                <input
                  type="text"
                  className="input-formKbm"
                  placeholder="judul tugas"
                  name="judul_tugas"
                  value={formData.judul_tugas}
                  onChange={handleChange}
                />
                {errors.judul_tugas && (
                  <span className="error">{errors.judul_tugas}</span>
                )}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Deskrips Tugas</div>
                <textarea
                  rows="7"
                  className="input-formKbm"
                  placeholder="deskripsi tugas"
                  name="desc_tugas"
                  value={formData.desc_tugas}
                  onChange={handleChange}
                ></textarea>
                {errors.desc_tugas && <span className="error">{errors.desc_tugas}</span>}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Deadline</div>
                <input
                  type="date"
                  className="input-formKbm"
                  style={{ cursor: "pointer" }}
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                />
                {errors.deadline && (
                  <span className="error">{errors.deadline}</span>
                )}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Link Tugas</div>
                <input
                  type="text"
                  className="input-formKbm"
                  placeholder="link tugas"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                />
                {errors.link && <span className="error">{errors.link}</span>}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">File Tugas</div>
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="input-formKbm"
                  accept=".pdf , .docx , .xlsx"
                  // value={formData.file}
                  onChange={handleChange} // The file data will be updated when the user selects a file
                />
              </div>

              <div className="switch-inputTugas">
                <h2 className="title-formKbm">
                  Apakah murid dapat menginput jawaban?
                </h2>
                <div className="con-radio">
                  <label>
                    <input
                      type="radio"
                      name="input_jawaban"
                      value="ya"
                      checked={formData.input_jawaban === "ya"}
                      onChange={handleChange}
                    />
                    Ya
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="input_jawaban"
                      value="tidak"
                      checked={formData.input_jawaban === "tidak"}
                      onChange={handleChange}
                    />
                    Tidak
                  </label>
                </div>
                {errors.input_jawaban && (
                  <span className="error">{errors.input_jawaban}</span>
                )}
              </div>

              <div className="con-btn-form">
                <button
                  type="submit"
                  className="btn-form"
                  style={{ cursor: "pointer" }}
                >
                  Simpan perubahan
                </button>
              </div>
            </form>
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
          <p className="desc-success">Anda berhasil menambahkan tugas</p>
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
          <p className="desc-Failed">Anda gagal menambahkan tugas</p>
          <button className="btn-Failed" onClick={closeFailed}>
            Kembali
          </button>
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

      <div className="popup-loading" id="popup-loadingDetail">
        <div className="body-loadingDetail" id="body-loadingDetail">
          <h2 class="animate-loadingDetail">Loading</h2>
          <p>Data Sedang Di Proses...</p>
        </div>
      </div>
      {/* end loading */}
    </div>
  );
}

export default FormTugasKBM;
