import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../App.css";
import { Icon } from "@iconify/react";
import avatar from '../assets/avatar.svg';

function SkeletonNavbarWali() {

  return (
    <div>
     <nav>
        <div className="navbar">
          {/* <h2>{dataNavbar}</h2> */}
          <h1>
            <Skeleton width={200} />
          </h1>
          <div className="nav-right">
            <div className="img-profile">
              <img src={avatar} />
            </div>
            {/* <Skeleton width={50} height={50} style={{ borderRadius: "100%"}}/> */}

            <div className="btn-notification">
              <Skeleton
                width={50}
                height={50}
                style={{ borderRadius: "100%", marginBottom: "3px" }}
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SkeletonNavbarWali;
