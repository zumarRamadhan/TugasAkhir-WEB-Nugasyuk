import "../cssAll/walimurid/DetailTugas.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import DetailOrtu from '../component/ProfileWaliMurid';
import NotifOrtu from '../component/NotifOrtu';
import axios from "axios";

function DetailTugasOrtu() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailTugas, setDataDetailTugas] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetail();
  }, [id]);

  function getDetail() {
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/matapelajaran/tugas/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataDetailTugas(response.data.data);
        setisLoading(false);
      })
      .catch((error) => 
      console.error(error));
      setisLoading(false);
  }

  if (isLoading)
    return (
      <div id="load">
        <div>.</div>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    );
  else if (dataDetailTugas && !isError)

    return (
      <div>
        <aside>
          <h1
            className="title-form-login"
            onClick={() => navigate("/murid/berandamurid")}
          >
            <img src={IconNugasyuk} alt="" className="icon-nugasyuk" />
            nugasyuk
          </h1>
          <ul>
            <li onClick={() => navigate("/murid/berandamurid")}>
              <Icon icon="iconoir:home-simple" width="20" />
              Beranda
            </li>
            <li onClick={() => navigate("/murid/pagetugas")}>
              <Icon
                icon="fluent:clipboard-bullet-list-rtl-20-regular"
                width="25"
              />
              Tugas
            </li>
            <li onClick={() => navigate("/murid/pagekbm")}>
              <Icon icon="uiw:date" width="18" />
              Jadwal KBM
            </li>
            <li className="active" onClick={() => navigate("/murid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
            <li onClick={() => navigate("/murid/pagekonseling")}>
              <Icon icon="ph:apple-podcasts-logo-duotone" width="18" />
              Konseling
            </li>
          </ul>
        </aside>
        <div className="container-content">
          {dataDetailTugas.map((detailTugas) => (
            <NavbarWaliMurid navigasiOrtu={detailTugas.nama_mapel} />
          ))}
          <div className="main">
            {dataDetailTugas &&
              dataDetailTugas.map((detailTugas) => (
                <div className="con-content-detail-task">
                  <div className="content-detail-task">
                    <div className="content-detail-task-left">
                      <div className="icon-detail-task">
                        <Icon icon="uiw:time-o" width="30" />
                      </div>
                      <div className="desc-material">
                        <p className="name-task ">{detailTugas.nama_tugas}</p>
                        <p className="teacher">{detailTugas.nama_guru}</p>
                      </div>
                    </div>
                    <div className="content-detail-task-right">
                      <p className="date-upload">{detailTugas.date}</p>
                    </div>
                  </div>
                  <p className="desc-content-detail-task">{detailTugas.soal}</p>
                  <p className="task-deadline-time">
                    Deadline : <span>{detailTugas.deadline}</span>
                  </p>
                  <div className="submition-task">
                    <p className="title-submition">Pengumpulan Tugas</p>
                    <div className="file-task"></div>
                    <button className="btn-add-task">
                      <Icon icon="ic:round-plus" width="20"></Icon>
                      <p>Tambah</p>
                    </button>
                    <button className="btn-submit-task">
                      <p>Kirim</p>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default DetailTugasOrtu;