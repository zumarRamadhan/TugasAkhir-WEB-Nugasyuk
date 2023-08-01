import "../cssAll/murid/Mapel.css";
import { Icon } from "@iconify/react";
import { useNavigate, Link } from "react-router-dom";
import IconNugasyuk from "../assets/IconNugasyuk.svg";
import Navigation from "../component/NavbarMurid";
import cardMapel8 from "../assets/cardAssets/cardMapel8.svg";
import ProfileSiswa from "../component/ProfileSiswa";
import NotifSiswa from "../component/NotifSiswa";
import { useState, useEffect } from "react";
import axios from "axios";
import CardSkeletonMapel from "../componentSkeleton/CardSkeletonMapel";
import SkeletonNavbar from "../componentSkeleton/SkeletonNavbar";

function PageMapel() {
  const navigate = useNavigate();

  const saveToken = sessionStorage.getItem("token");

  const [dataMapel, setDataMapel] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setisError] = useState(false);

  useEffect(() => {
    setisLoading(true);
    axios
      .get("https://www.nugasyuk.my.id/api/murid/matapelajaran", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${saveToken}`,
        },
      })
      .then((result) => {
        console.log("data API", result.data);
        // const responseAPI = result.data;
        setDataMapel(result.data.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log("terjadi kesalahan: ", err);
        setisError(true);
        setisLoading(false);
      });
  }, []);

  // if (isLoading)
  //   return (
  //     <div id="load">
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //       <div>.</div>
  //     </div>
  //   );
  // else if (dataMapel && !isError)
  return (
    <div>
      {/* <Sidebar/> */}
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
        {isLoading ? (
          <SkeletonNavbar />
        ) : (
          <Navigation textNavigasi={"Mata Pelajaran"} />
        )}
        <main className="main">
          <div className="content-mapel">
            {isLoading ? (
              <div className="con-card-mapel">
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
                <CardSkeletonMapel />
              </div>
            ) : (
              <div className="con-card-mapel">
                {dataMapel &&
                  dataMapel.map((listMapel) => (
                    <Link
                      className="link-navigate"
                      to={"/murid/pagemapel/mapelmateri/" + listMapel.id}
                    >
                      <div
                        className="card-mapel"
                        key={listMapel.id}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          navigate("/murid/pagemapel/mapelmateri/${id}")
                        }
                        id="123"
                      >
                        <img
                          src={`https://www.nugasyuk.my.id/public/${listMapel.file_asset}`}
                          alt=""
                          className="image-card-mapel"
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
                    </Link>
                  ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <ProfileSiswa />

      <NotifSiswa />
    </div>
  );
}

export default PageMapel;
