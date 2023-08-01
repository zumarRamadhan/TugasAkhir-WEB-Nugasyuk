import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonHeaderHome() {
  return (
    <div className="card-skeleton-beranda">
        <Skeleton
          style={{
            height: "300px",
            borderRadius: "20px",
            gridTemplateColumns: "repeat(1, ifr)",
          }}
        />
      </div>
  )
}

export default SkeletonHeaderHome;
