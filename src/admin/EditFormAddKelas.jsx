import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import "../cssAll/admin/FormAddMurid.css";
import Navigation from "../component/NavigationBar";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import { useNavigate, Link, useParams } from "react-router-dom";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import axios from "axios";

function EditFormAddKelas() {
  const navText = "Edit Data Kelas";
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

  const [kelasData, setKelasData] = useState(null);
  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    tingkatKe: "",
    namaJurusan: "",
    namaKelas: "",
    waliKelas: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // console.log(formData.email_wali_murid);
    axios
      .get(`https://www.nugasyuk.my.id/api/admin/kelas/${id}`, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setKelasData(response.data.data);
        setFormData({
            tingkatKe: response.data.data.tingkatan_id,
            namaJurusan: response.data.data.jurusan_id,
            namaKelas: response.data.data.nama_kelas,
            waliKelas: response.data.data.guru_id,
        });
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data kelas:", error);
      });
  }, [id, saveToken]);

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("tingkatan", formData.tingkatKe);
      form.append("jurusan", formData.namaJurusan);
      form.append("nama_kelas", formData.namaKelas);
      form.append("wali_kelas", formData.waliKelas);

      axios
        .post(`https://www.nugasyuk.my.id/api/admin/kelas/${id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
          },
        })
        .then((result) => {
          console.log("Data berhasil diperbarui");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          navigate("/admin/pagekelas");
        //   setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat memperbarui data:", error);
          setErrors({ submit: "Terjadi kesalahan saat memperbarui data" });
          setIsSubmitting(false);
        });
    }
  }, [isSubmitting, formData, id, saveToken, navigate]);

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

    if (!data.tingkatKe) {
      errors.tingkatKe = "Kelas harus diisi";
    } else if (!/^\d+$/.test(data.tingkatKe)) {
      errors.tingkatKe = "Tingkat kelas harus berupa angka";
    }

    if (!data.namaJurusan) {
      errors.namaJurusan = "Nama jurusan harus diisi";
    }

    if (!data.namaKelas) {
      errors.namaKelas = "Tingkat harus diisi";
    } else if (!/^\d+$/.test(data.namaKelas)) {
      errors.namaKelas = "Tingkat harus berupa angka";
    }

    if (!data.waliKelas) {
      errors.waliKelas = "Wali kelas harus diisi";
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

  const [dataGuru, setDataGuru] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  // console.log("data kelas", dataKelas);

  // setIsLoading(true);
  useState(() => {
    // setIsLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/admin/guru", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataGuru(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  // useState(() => {
  //   axios
  //     .get("https://www.nugasyuk.my.id/api/admin/kelas", {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${saveToken}`,
  //       },
  //     })
  //     .then((result) => {
  //       console.log("data API", result.data);
  //       const responseAPI = result.data;

  //       setDataKelas(responseAPI.data);
  //       setIsLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log("terjadi kesalahan: ", err);
  //       setIsError(true);
  //       setIsLoading(false);
  //     });
  // }, []);
  // if (isLoading) {
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  // } else
   if (dataGuru && !isError)
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
            <li className="active" onClick={() => navigate("/admin/pagekelas")}>
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
                  <div className="title-formKbm">Kelas</div>
                  {formData && formData.tingkatKe ? (
                  <select
                    name="tingkatKe"
                    id="tingkatKe"
                    value={formData.tingkatKe}
                    onChange={handleChange}
                    className="selectClass"
                  >
                    <option value="" selected disabled>
                      Pilih Kelas
                    </option>
                    <option value="1">10</option>
                    <option value="2">11</option>
                    <option value="3">12</option>
                  </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.tingkatKe && (
                    <span className="error">{errors.tingkatKe}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Jurusan</div>
                  {formData && formData.namaJurusan ? (
                  <select
                    name="namaJurusan"
                    id="namaJurusan"
                    value={formData.namaJurusan}
                    onChange={handleChange}
                    className="selectClass"
                  >
                    <option value="" selected disabled>
                      Pilih Jurusan
                    </option>
                    <option value="1">PPLG</option>
                    <option value="2">ANIMASI</option>
                    <option value="3">DKV</option>
                    <option value="4">DG</option>
                    <option value="5">Teknik Grafika</option>
                  </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.namaJurusan && (
                    <span className="error">{errors.namaJurusan}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Tingkat</div>
                  {formData && formData.namaKelas ? (
                  <input
                    type="text"
                    id="namaKelas"
                    name="namaKelas"
                    value={formData.namaKelas}
                    onChange={handleChange}
                    className="input-formKbm"
                    placeholder="Contoh : (1/2/3...) / (A/B/C...)"
                  />
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.namaKelas && (
                    <span className="error">{errors.namaKelas}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Kelas</div>
                  {formData && formData.waliKelas ? (
                  <select
                    name="waliKelas"
                    id="kelas"
                    className="selectClass"
                    value={formData.waliKelas}
                    onChange={handleChange}
                  >
                    <option value="" selected disabled>
                      Pilih Guru
                    </option>
                    {dataGuru.map((guru) => (
                      <option value={guru.id}>{guru.nama_guru}</option>
                    ))}
                  </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.waliKelas && ( //change
                    <span className="error">{errors.waliKelas}</span>
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
      </div>
    );
}

export default EditFormAddKelas;
