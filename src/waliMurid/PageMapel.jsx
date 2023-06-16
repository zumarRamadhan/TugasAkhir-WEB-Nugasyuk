import "../cssAll/walimurid/PageMapel.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import cardMapel8 from "../assets/cardAssets/cardMapel8.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";

function PageMapel() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataListMapel, setDataListMapel] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/matapelajaran", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        const responseAPI = result.data;

        setDataListMapel(responseAPI.kelas);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  else if (dataListMapel && !isError)

    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/walimurid/berandawalimurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/walimurid/berandawalimurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li onClick={() => navigate("/walimurid/pagetugas")}>
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li onClick={() => navigate("/walimurid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li
              className="active"
              onClick={() => navigate("/walimurid/pagemapel")}
            >
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
          </ul>
        </aside>
        <div className="container-content">
          <NavbarWaliMurid navigasiOrtu={"Mata Pelajaran"} />
          <main className="main">
            <div className="content-mapel">
              <div className="con-card-mapel-ortu">
                {dataListMapel &&
                  dataListMapel.map((listMapel) => (
                    <div
                      className="card-mapel"
                      key={listMapel.id}
                      style={{ cursor: "pointer" }}
                    >
                      <img
                        src={`https://www.nugasyuk.my.id/public/${listMapel.file_asset}`}
                        alt=""
                        className="image-card-mapel"
                        onClick={() => navigate('/walimurid/pagemapel/mapelmateri/'+listMapel.id)}
                        id="123"
                      />
                      <div className="content-card-mapel">
                        <div className="card-mapel-left">
                          <p className="mata-pelajaran">
                            {listMapel.nama_mapel}
                          </p>
                          <p className="nama-guru-mapel">
                            {listMapel.nama_guru}
                          </p>
                        </div>
                        {/* <div className="kelas-mapel">{`${data.kelas} ${data.jurusan.toUpperCase()} ${data.tingkatan}`}</div> */}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </main>
        </div>
        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default PageMapel;
