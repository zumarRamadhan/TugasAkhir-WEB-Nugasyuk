import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";
import "../App.css";

function SkeletonProfile(cards) {
  const closeDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(350px)";
  };

  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="content-detail" key={i}>
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
          <Skeleton circle />
        </div>
        <p className="judul-detail">Email</p>
        <Skeleton height={40}/>
        <p className="judul-detail">Nama</p>
        <Skeleton height={40}/>
        <p className="judul-detail">Orang Tua Dari</p>
        <Skeleton height={40}/>
        <p className="judul-detail">NIS</p>
        <Skeleton height={40}/>
      </div>
    ));
}

export default SkeletonProfile;
