import "../cssAll/walimurid/DetailTugas.css";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import NavbarWaliMurid from "../component/NavbarWaliMurid";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import DetailOrtu from "../component/ProfileWaliMurid";
import NotifOrtu from "../component/NotifOrtu";
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonDetailTask from "../componentSkeleton/SkeletonDetailTask";
import SkeletonNavbarWali from "../componentSkeleton/SkeletonNavbarWalimurid";

function DetailTugasOrtu() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataDetailTugas, setDataDetailTugas] = useState([]);

  const [isLoading, setisLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getDetail();
  }, [id]);

  function getDetail() {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/ortu/tugas/" + id, {
        headers: {
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((response) => {
        setDataDetailTugas(response.data.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan saat mengambil data", error);
        setisLoading(false);
        setisError(true);
      });
  }

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  if (dataDetailTugas && !isError)
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
            <li
              className="active"
              onClick={() => navigate("/walimurid/pagetugas")}
            >
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
            <li onClick={() => navigate("/walimurid/pagemapel")}>
              <Icon icon="fluent-mdl2:education" width="18" />
              Mata Pelajaran
            </li>
          </ul>
        </aside>
        <div className="container-content">
          {isLoading ? (
            <SkeletonNavbarWali />
          ) : (
            <div>
              {dataDetailTugas.map((detailTugas) => (
                <NavbarWaliMurid
                  navigasiOrtu={detailTugas.nama_mapel || <Skeleton />}
                />
              ))}
            </div>
          )}
          <div className="main">
            {isLoading ? (
              <SkeletonDetailTask />
            ) : (
              <div>
                {dataDetailTugas &&
                  dataDetailTugas.map((detailTugas) => (
                    <div className="con-content-detail-task">
                      <div className="content-detail-task">
                        <div className="content-detail-task-left">
                          <div className="icon-detail-task">
                            <Icon icon="uiw:time-o" width="30" />
                          </div>
                          <div className="desc-material">
                            <p className="name-task ">
                              {detailTugas.nama_tugas}
                            </p>
                            <p className="teacher">{detailTugas.nama_guru}</p>
                          </div>
                        </div>
                        <div className="content-detail-task-right">
                          <p className="date-upload">{detailTugas.date}</p>
                        </div>
                      </div>
                      <p className="desc-content-detail-task">
                        {detailTugas.soal}
                      </p>
                      <p className="task-deadline-time">
                        Deadline : <span>{detailTugas.deadline}</span>
                      </p>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <DetailOrtu />

        <NotifOrtu />
      </div>
    );
}

export default DetailTugasOrtu;
