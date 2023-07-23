import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "../cssAll/admin/FormAddMurid.css";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import axios from "axios";

function FormAddAssets() {
  const navText = "Tambah Data Assets";
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

  const showForgetPopup = () => {
    const popupForget = document.querySelector("#popup-forget");
    popupForget.style.display = "flex";
    popupForget.style.animation = "slide-down 0.3s ease-in-out";
  };

  // messege

  const showSuccessAdd = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate("/admin/pageassets/list");
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
    fileAsset: "",
    fileVector: "",
    colorBackground: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("file_asset", formData.fileAsset);
      form.append("file_vector", formData.fileVector);
      form.append("color", formData.colorBackground);

      axios
        .post("https://www.nugasyuk.my.id/api/admin/asset", form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
          },
        })
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccessAdd();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormData({
            // Set nilai awal untuk setiap field formulir
            fileAsset: "",
            fileVector: "",
            colorBackground: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          setIsSubmitting(false);
          showFailedAdd();
        });
    }
  }, [isSubmitting, formData]);

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
    }
  };

  const validateForm = (data) => {
    let errors = {};

    if (data.fileAsset.size > 3000000) {
      errors.fileAsset = "Ukuran file tidak boleh lebih dari 3MB";
    }

    if (!data.fileAsset) {
      errors.fileAsset = "Assets wajib di isi";
    }

    if (data.fileVector.size > 3000000) {
      errors.fileVector = "Ukuran file tidak boleh lebih dari 3MB";
    }

    if (!data.fileVector) {
      errors.fileVector = "Vector harus diisi";
    }

    if (!data.colorBackground) {
      errors.colorBackground = "Background color harus diisi";
    }

    return errors;
  };

  function handleFoto(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        fileAsset: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  function handleFoto2(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        fileVector: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage2");
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  const [dataGuru, setDataGuru] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log("data kelas", dataKelas);

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
          <li onClick={() => navigate("/admin/pageguru")}>
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
          <li className="active" onClick={() => navigate("/admin/pageassets")}>
            <Icon icon="ic:outline-file-copy" width="20" />
            Assets
          </li>
        </ul>
      </aside>
      <div className="container-content">
        <Navigation text={navText} />
        <div className="main">
          <div className="content-formKbm">
            <form onSubmit={handleSubmit} className="container-formKbm">
              <div className="con-formKbm">
                <div className="title-formKbm">Assets Card</div>
                <input
                  type="file"
                  id="fileAsset"
                  name="fileAsset"
                  className="input-formKbm"
                  // value={formData.file}
                  accept=".jpg, .png, .jpeg"
                  onChange={handleFoto}
                />
                {errors.fileAsset && (
                  <span className="error">{errors.fileAsset}</span>
                )}
                <img
                  id="previewImage"
                  src={formData.fileAsset}
                  alt="Pilih assets card, maka akan muncul di sini"
                />
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Asset Vector</div>
                <input
                  type="file"
                  id="fileVector"
                  name="fileVector"
                  className="input-formKbm"
                  // value={formData.fileVector}
                  accept=".jpg, .png, .jpeg"
                  onChange={handleFoto2}
                />
                {errors.fileVector && (
                  <span className="error">{errors.fileVector}</span>
                )}
                <img
                  id="previewImage2"
                  src={formData.fileVector}
                  alt="Pilih asset vector, maka akan muncul di sini"
                />
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Kode Warna Background</div>
                <input
                  type="text"
                  id="colorBackground"
                  name="colorBackground"
                  value={formData.colorBackground}
                  onChange={handleChange}
                  className="input-formKbm"
                  placeholder="Masukan Kode Warna Background"
                />
                {errors.colorBackground && (
                  <span className="error">{errors.colorBackground}</span>
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
          <p className="desc-success">Data Berhasil Di Tambahkan</p>
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
            Data Gagal Di Tambahkan, Silahkan Periksa Apakah Ada Data Yang Sama
            Dengan Kelas Lain!!!
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
          <button className="logout" id="btn-logout" onClick={showLogoutPopup}>
            <Icon icon="material-symbols:logout-rounded" width="30" />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FormAddAssets;
