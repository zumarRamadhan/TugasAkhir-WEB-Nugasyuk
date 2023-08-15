import "../cssAll/admin/formAddJadwalKbm.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link, useParams } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavigationBar";
import ImgProfil from "../assets/img-profil.svg";
import ImgLogout from "../assets/68582-log-out.gif";
import passIcon from "../assets/pass-icon.svg";
import mataIcon from "../assets/icon-mata.svg";
import ImgSuccess from "../assets/success.gif";
import ImgFailed from "../assets/failed.gif";
import { useState, useEffect } from "react";
import axios from "axios";
import apiurl from "../api/api";

function FormAddJadwalKbm() {
  const navText = "Edit data jadwal KBM";
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

  const showSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    popupLogout.style.display = "flex";
    popupLogout.style.animation = "slide-down 0.3s ease-in-out";
  };

  const closeSuccess = () => {
    const popupLogout = document.querySelector("#popup-success");
    setTimeout(() => (popupLogout.style.display = "none"), 250);
    popupLogout.style.animation = "slide-up 0.3s ease-in-out";
    navigate("/admin/jadwalkbm");
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
  const saveToken = sessionStorage.getItem("token");

  const [dataJadwal, setDataJadwal] = useState([]);
  const [formData, setFormData] = useState({
    // Inisialisasi nilai awal untuk setiap field formulir
    hariId: "",
    jamId: "",
    mapelId: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // console.log(formData.email_wali_murid);
    axios
      .get(`${apiurl}admin/jadwal/data/${id}`, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((response) => {
        if (response.data.data.length > 0) {
          const firstData = response.data.data[0];
          setDataJadwal(firstData);
          setFormData({
            hariId: firstData.hari_id,
            jamId: firstData.jam_id,
            mapelId: firstData.mapel_id,
          });
        }
      })

      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data jadwal:", error);
      });
  }, [id, saveToken]);

  useEffect(() => {
    if (isSubmitting) {
      // console.log(formData.file);

      const form = new FormData();
      form.append("hari_id", formData.hariId);
      form.append("jam_id", formData.jamId);
      form.append("mapel_id", formData.mapelId);

      axios
        .post(`${apiurl}admin/jadwal/${id}`, form, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${saveToken}`,
            "ngrok-skip-browser-warning": "any",
          },
        })
        .then((result) => {
          console.log("Data berhasil ditambahkan");
          // Lakukan tindakan yang diperlukan setelah menambahkan data
          showSuccess();

          // Kosongkan formulir atau perbarui variabel state jika diperlukan
          setFormData({
            // Set nilai awal untuk setiap field formulir
            hariId: "",
            jamId: "",
            mapelId: "",
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error("Terjadi kesalahan saat menambahkan data:", error);
          setErrors({ submit: "Terjadi kesalahan saat menambahkan data" });
          setIsSubmitting(false);
          showFailed();
        });
    }
  }, [isSubmitting, formData, id, navigate]);

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

    if (!data.hariId) {
      errors.hariId = "Hari harus diisi";
    }

    if (!data.jamId) {
      errors.jamId = "Pilih pelajaran mulai jam ke berapa!!";
    }

    if (!data.mapelId) {
      errors.mapelId = "Pilih Mata Pelaajaran!!";
    }

    return errors;
  };

  const [dataMapel, setDataMapel] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useState(() => {
    setIsLoading(true);
    axios
      .get(`${apiurl}admin/mapel`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
          "ngrok-skip-browser-warning": "any",
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataMapel(responseAPI.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  const dataHari = [
    {
      id: 1,
      hari: "Senin",
    },
    {
      id: 2,
      hari: "Selasa",
    },
    {
      id: 3,
      hari: "Rabu",
    },
    {
      id: 4,
      hari: "Kamis",
    },
    {
      id: 5,
      hari: "Jumat",
    },
    {
      id: 6,
      hari: "Sabtu",
    },
  ];

  const dataJamPelajaran = [
    {
      id: 1,
      jamKe: 1,
    },
    {
      id: 2,
      jamKe: 2,
    },
    {
      id: 3,
      jamKe: 3,
    },
    {
      id: 4,
      jamKe: 4,
    },
    {
      id: 5,
      jamKe: 5,
    },
    {
      id: 6,
      jamKe: 6,
    },
    {
      id: 7,
      jamKe: 7,
    },
    {
      id: 8,
      jamKe: 8,
    },
    {
      id: 9,
      jamKe: 9,
    },
    {
      id: 10,
      jamKe: 10,
    },
    {
      id: 11,
      jamKe: 11,
    },
    {
      id: 12,
      jamKe: 12,
    },
    {
      id: 13,
      jamKe: 13,
    },
    {
      id: 14,
      jamKe: 14,
    },
  ];

  if (dataMapel && !isError)
    return (
      <div>
        {/* <Sidebar/> */}
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
            <li className="active" onClick={() => navigate("/admin/jadwalkbm")}>
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
          <main className="main">
            <div className="content-formKbm">
              <form onSubmit={handleSubmit} className="container-formKbm">
                <div className="con-formKbm">
                  <div className="title-formKbm">Mata Pelajaran</div>
                  {formData && formData.mapelId ? (
                    <select
                      name="mapelId"
                      id="mapelId"
                      value={formData.mapelId}
                      onChange={handleChange}
                      className="selectClass"
                    >
                      <option value="" disabled>
                        Pilih Mata Pelajaran
                      </option>
                      {dataMapel.map((data) => (
                        <option key={data.id} value={data.id}>
                          {data.nama_mapel} // {data.nama_guru} //
                          {data.tingkat_ke +
                            " " +
                            data.nama_jurusan.toUpperCase() +
                            " " +
                            data.nama_kelas}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.assetId && (
                    <span className="error">{errors.assetId}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Hari</div>
                  {formData && formData.hariId ? (
                    <select
                      name="hariId"
                      id="hariId"
                      value={formData.hariId}
                      onChange={handleChange}
                      className="selectClass"
                    >
                      <option hidden>-- Hari --</option>
                      {dataHari.map((data) => (
                        <option value={data.id}>{data.hari}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.hariId && (
                    <span className="error">{errors.hariId}</span>
                  )}
                </div>

                <div className="con-formKbm">
                  <div className="title-formKbm">Jam ke</div>
                  {formData && formData.jamId ? (
                    <select
                      name="jamId"
                      id="jamId"
                      value={formData.jamId}
                      onChange={handleChange}
                      className="selectClass"
                    >
                      <option hidden>-- Jam Ke --</option>
                      {dataJamPelajaran.map((data) => (
                        <option value={data.id}>{data.jamKe}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      value="Data Sedang Dalam Proses..."
                      disabled
                      className="input-formKbm"
                    />
                  )}
                  {errors.jamId && (
                    <span className="error">{errors.jamId}</span>
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
          </main>
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
              Data Gagal Di Perbarui, Pastikan data tidak menambrak pada jam
              pelajaran yang sama, jika anda tidak melakukan perubahan silahkan
              tekan tombol keluar
            </p>
            <button
              className="btn-out"
              onClick={() => navigate("/admin/jadwalkbm")}
            >
              Keluar
            </button>
            <button className="btn-Failed2" onClick={closeFailed}>
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
      </div>
    );
}

export default FormAddJadwalKbm;
