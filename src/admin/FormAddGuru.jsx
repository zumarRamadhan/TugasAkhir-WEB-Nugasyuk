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

function FormAddGuru() {
  const navText = "Tambah Data";
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

  const saveToken = sessionStorage.getItem("token");

  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    file: "",
    nama: "",
    niy: "",
    email: "",
    nomorTlp: "",
    alamat: "",
    password: "",
    role: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("nama_guru", formData.nama);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("niy", formData.niy);
      form.append("alamat", formData.alamat);
      form.append("nomor_tlp", formData.nomorTlp);
      form.append("role", formData.role);
      form.append("foto_profile", formData.file);

      axios
        .post("https://www.nugasyuk.my.id/api/admin/guru", form, {
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
            file: "",
            nama: "",
            niy: "",
            email: "",
            nomorTlp: "",
            alamat: "",
            password: "",
            konfirmasiPassword: "",
            role: "",
          });

          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          showFailedAdd();
          setIsSubmitting(false);
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

    // jika file lebih dari 2MB maka muncul error
    if (data.file.size > 3000000) {
      errors.file = "Ukuran file tidak boleh lebih dari 3MB";
    }
    
    if (!data.file) {
      errors.file = "Foto harus diisi";
    }

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

    if (!data.role.trim()) {
      errors.role = "Harus memilih role";
    }

    if (data.password.trim().length < 8) {
      errors.password = "Password harus lebih dari 8 karakter";
    }

    if (!data.password.trim()) {
      errors.password = "Password harus diisi";
    }

    if (data.password !== data.konfirmasiPassword) {
      errors.konfirmasiPassword = "Password tidak cocok";
    }

    return errors;
  };

  function handleFoto(e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFormData((prevState) => ({
        ...prevState,
        file: selectedFile,
      }));

      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImage = document.getElementById("previewImage");
        previewImage.src = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  // useEffect(() => {
  //   // Mengatur pratinjau gambar dari data API
  //   if (formData) {
  //     const previewImage = document.getElementById("previewImage");
  //     previewImage.src = `https://www.nugasyuk.my.id/public/${formData?.foto_profile}`;
  //     // console.log(formData.file);
  //   }
  // }, [formData]);

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
          <li onClick={() => navigate("/admin/pageassets")}>
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
                {errors.file && <span className="error">{errors.file}</span>}
                <img id="previewImage" src={formData.file} alt="Pilih foto, dan foto akan muncul di sini" />
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Nama</div>
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  value={formData.nama_guru}
                  onChange={handleChange}
                  className="input-formKbm"
                  placeholder="Tambahkan nama guru"
                />
                {errors.nama && <span className="error">{errors.nama}</span>}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">NIY</div>
                <input
                  type="text"
                  id="niy"
                  name="niy"
                  value={formData.niy}
                  onChange={handleChange}
                  className="input-formKbm"
                  placeholder="Tambahkan niy guru"
                />
                {errors.niy && <span className="error">{errors.niy}</span>}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Email</div>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-formKbm"
                  placeholder="example@smkrus.schid"
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Nomor Tlp</div>
                <input
                  type="text"
                  className="input-formKbm"
                  placeholder="08**********"
                  id="nomorTlp"
                  name="nomorTlp"
                  value={formData.nomorTlp}
                  onChange={handleChange}
                />
                {errors.nomorTlp && (
                  <span className="error">{errors.nomorTlp}</span>
                )}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Alamat</div>
                <input
                  type="text"
                  id="alamat"
                  name="alamat"
                  value={formData.alamat}
                  onChange={handleChange}
                  className="input-formKbm"
                  placeholder="Tambahkan alamat guru"
                />
                {errors.alamat && (
                  <span className="error">{errors.alamat}</span>
                )}
              </div>

              <div className="con-formKbm">
                <div className="title-formKbm">Status Guru</div>
                <div className="switch-inputKode">
                  <div className="con-radio">
                    <label>
                      <input
                        type="radio"
                        name="role"
                        value="1"
                        checked={formData.role === "1"}
                        onChange={handleChange}
                      />
                      Guru Biasa
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="role"
                        value="2"
                        checked={formData.role === "2"}
                        onChange={handleChange}
                      />
                      Guru BK
                    </label>
                  </div>
                </div>
                {errors.role && <span className="error">{errors.role}</span>}
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
              <img
                src={ImgFailed}
                alt="Delete Failed"
                className="img-Failed"
              />
            </div>
            <p className="desc-Failed">Data Gagal Di Tambahkan, , Silahkan Periksa Apakah Ada Data Yang Sama Dengan Guru Lain!!!</p>
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

export default FormAddGuru;
