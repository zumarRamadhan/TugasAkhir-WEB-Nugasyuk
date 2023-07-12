import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import '../App.css';
import { Icon } from "@iconify/react";

function SkeletonNavbarWali() {
  const showDetail = () => {
    const detailProfile = document.querySelector(".detail-profile");
    detailProfile.style.transform = "translateX(0px)";
  };

  const showNotif = () => {
    const detailNotification = document.querySelector(".detail-notif");
    detailNotification.style.transform = "translateX(0px)";
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          {/* <h2>{dataNavbar}</h2> */}
          <h1>
            <Skeleton width={100} />
          </h1>
          <div className="nav-right">
            <Skeleton circle width={50} height={50} />

            <div
              className="btn-notification"
              style={{ cursor: "pointer" }}
              onClick={showNotif}
            >
              <Icon icon="mdi:bell-notification-outline" width="24" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SkeletonNavbarWali;