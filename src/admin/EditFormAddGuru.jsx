import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "../cssAll/admin/FormAddMurid.css";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link, useParams, useHistory } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";
import apiurl from "../api/api";

function EditFormAddGuru() {
  const navText = "Edit Data";
  const navigate = useNavigate();

  // console.log(guruData);
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
    navigate("/admin/pageguru");
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

  const { id } = useParams();
  // const history = useNavigate();
  const saveToken = sessionStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [guruData, setGuruData] = useState([]);
  const [formData, setFormData] = useState({
    // file: "",
    nama: "",
    niy: "",
    email: "",
    nomorTlp: "",
    alamat: "",
    password: "",
    konfirmasiPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    showPopupLoadingDetail();
    axios
      .get(`${apiurl}admin/guru/${id}`, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning":"any"
        },
      })
      .then((response) => {
        setGuruData(response.data.data);
        setFormData({
          // file: response.data.data.foto_profile,
          nama: response.data.data.nama_guru,
          niy: response.data.data.niy,
          email: response.data.data.email,
          nomorTlp: response.data.data.nomor_tlp,
          alamat: response.data.data.alamat,
          password: "",
          konfirmasiPassword: "",
        });
        setIsError(false);
        closePopupLoadingDetail();
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data guru:", error);
        setIsError(true);
      });
  }, [id, saveToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
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

    if (!data.nama.trim()) {
      errors.nama = "Nama harus diisi";
    }

    if (!data.niy.trim()) {
      errors.niy = "NIY harus diisi";
    } else if (!/^\d+$/.test(data.niy)) {
      errors.niy = "NIY hanya boleh berisi angka";
    }

    if (!data.email.trim()) {
      errors.email = "Email harus diisi";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email tidak valid";
    }

    if (!data.nomorTlp.trim()) {
      errors.nomorTlp = "Nomor telepon harus diisi";
    } else if (!/^\d+$/.test(data.nomorTlp)) {
      errors.nomorTlp = "Nomor telepon hanya boleh berisi angka";
    }

    if (!data.alamat.trim()) {
      errors.alamat = "Alamat harus diisi";
    }
    // password harus lebih dari 8 karakter

    if (data.password.trim().length < 8) {
      errors.password = "Password harus lebih dari 8 karakter";
    }

    if (!data.password.trim()) {
      errors.password =
        "Password harus diisi, pengubahan password tidak akan menghapus data yang sudah ada";
    }

    if (data.password !== data.konfirmasiPassword) {
      errors.konfirmasiPassword = "Password tidak cocok";
    }

    return errors;
  };

  useEffect(() => {
    if (isSubmitting) {
      const form = new FormData();
      form.append("nama_guru", formData.nama);
      form.append("email", formData.email);
      form.append("niy", formData.niy);
      form.append("alamat", formData.alamat);
      form.append("nomor_tlp", formData.nomorTlp);
      // form.append("foto_profile", formData.file);
      form.append("password", formData.password || "");
      form.append("konfirmasi_password", formData.konfirmasiPassword || "");

      axios
        .post(`${apiurl}admin/guru/${id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning":"any"
          },
        })
        .then((result) => {
          console.log("Data berhasil diperbarui");
          console.log(result);
          showSuccessAdd();
          closePopupLoading();
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui data:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui data" });
          setIsSubmitting(false);
          showFailedAdd();
          closePopupLoading();
        });
    }
  }, [isSubmitting, formData, id, saveToken, navigate]);

  // function handleFoto(e) {
  //   e.preventDefault();
  //   if (e.target.files && e.target.files[0]) {
  //     const selectedFile = e.target.files[0];
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       file: selectedFile,
  //     }));

  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       const previewImage = document.getElementById("previewImage");
  //       previewImage.src = e.target.result;
  //     };
  //     reader.readAsDataURL(selectedFile);
  //   }
  // }

  // useEffect(() => {
  //   // Mengatur pratinjau gambar dari data API
  //   if (formData) {
  //     const previewImage = document.getElementById("previewImage");
  //     previewImage.src = `https://www.nugasyuk.my.id/public/${guruData?.foto_profile}`;
  //     console.log(formData.file);
  //   }
  // }, [formData]);

  if (guruData && !isError)
    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/admin/berandaadmin")}
            style={{ cursor: "pointer" }}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/admin/berandaadmin")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li className="active" onClick={() => navigate("/admin/pageguru")}>
              <Icon icon="la:chalkboard-teacher" width="20" />
              Guru
            </li>
            <li onClick={() => navigate("/admin/pagemurid")}>
              <Icon icon="ph:student" width="20" />
              Murid
            </li>
            <li onClick={() => navigate("/admin/pagekelas")}>
              <Icon icon="fluent:class-24-regular" width="20" />
              Kelas
            </li>
            <li onClick={() => navigate("/admin/matapelajaran")}>
              <Icon icon="fluent-mdl2:education" width="20" />
              Mata Pelajaran
            </li>
            <li onClick={() => navigate("/admin/jadwalkbm")}>
              <Icon icon="uiw:date" width="20" />
              Jadwal KBM
            </li>
            {/* <li onClick={() => navigate("/admin/pageassets")}>
              <Icon icon="ic:outline-file-copy" width="20" />
              Assets
            </li> */}
          </ul>
        </aside>
        <div className="container-content">
          <Navigation text={navText} />
          <div className="main">
            <div className="content-formKbm">
              <form onSubmit={handleSubmit} className="container-formKbm">
                {/* <div className="con-formKbm">
                <div className="title-formKbm">Profi</div>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className="input-formKbm"
                  // value={formData.file}
                  accept=".jpg, .png, .jpeg"
                  onChange={handleFoto}
                />
                <img id="previewImage" src={formData.file} alt="Pratinjau" />
              </div> */}

                <div className="con-formKbm">
                  <div className="title-formKbm">Nama</div>
                  {formData && formData.nama ? (
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value={formData.nama}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan nama guru"
                    />
                  ) : (
                    <input
                      type="text"
                      id="nama"
                      name="nama"
                      value="Data Sedang Dalam Proses..."
                      onChange={handleChange}
                      className="input-formKbm"
                    />
                  )}
                  {errors.nama && <span className="error">{errors.nama}</span>}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">NIY</div>
                  {formData && formData.niy ? (
                    <input
                      type="text"
                      id="niy"
                      name="niy"
                      value={formData.niy}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan niy guru"
                    />
                  ) : (
                    <input
                      type="text"
                      id="niy"
                      name="niy"
                      value="Data Sedang Dalam Proses..."
                      onChange={handleChange}
                      className="input-formKbm"
                    />
                  )}
                  {errors.niy && <span className="error">{errors.niy}</span>}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Email</div>
                  {formData && formData.email ? (
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="example@smkrus.schid"
                    />
                  ) : (
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value="Data Sedang Dalam Proses..."
                      onChange={handleChange}
                      className="input-formKbm"
                    />
                  )}
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Nomor Tlp</div>
                  {formData && formData.nomorTlp ? (
                    <input
                      type="text"
                      className="input-formKbm"
                      placeholder="08**********"
                      id="nomorTlp"
                      name="nomorTlp"
                      value={formData.nomorTlp}
                      onChange={handleChange}
                    />
                  ) : (
                    <input
                      type="text"
                      className="input-formKbm"
                      id="nomorTlp"
                      name="nomorTlp"
                      value="Data Sedang Dalam Proses..."
                      onChange={handleChange}
                    />
                  )}
                  {errors.nomorTlp && (
                    <span className="error">{errors.nomorTlp}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Alamat</div>
                  {formData && formData.alamat ? (
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      value={formData.alamat}
                      onChange={handleChange}
                      className="input-formKbm"
                      placeholder="Tambahkan alamat guru"
                    />
                  ) : (
                    <input
                      type="text"
                      id="alamat"
                      name="alamat"
                      value="Data Sedang Dalam Proses..."
                      onChange={handleChange}
                      className="input-formKbm"
                    />
                  )}
                  {errors.alamat && (
                    <span className="error">{errors.alamat}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Password Guru </div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <span className="error">{errors.password}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Konfirmasi Password Guru </div>
                  <input
                    type="password"
                    className="input-formKbm"
                    placeholder="*******"
                    id="konfirmasiPassword"
                    name="konfirmasiPassword"
                    value={formData.konfirmasiPassword}
                    onChange={handleChange}
                  />
                  {errors.konfirmasiPassword && (
                    <span className="error">{errors.konfirmasiPassword}</span>
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
            <p className="desc-success">Data Berhasil Di Perbarui</p>
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
            <p className="desc-Failed">
              Data Gagal Di Perbarui, Silahkan Periksa Apakah Ada Data Yang Sama
              Dengan Guru Lain!!!
            </p>
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
            <p className="value-detail">erikayanti@smkrus.sch.id</p>
            <p className="judul-detail">Nama</p>
            <p className="value-detail">Erika Yanti, S.Pd</p>
            <p className="judul-detail">Devisi</p>
            <p className="value-detail">Admin</p>
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

export default EditFormAddGuru;
