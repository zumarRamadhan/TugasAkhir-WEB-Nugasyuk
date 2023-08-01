import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/murid/MapelMateri.css";

function SkeletonMapelMateri() {
  return (
    <div>
      <div className="con-content-subject">
        <Skeleton
          style={{ width: "820px", height: "200px", borderRadius: "20px" }}
        />
        <Skeleton
          style={{ width: "350px", height: "200px", borderRadius: "20px" }}
        />
        {/* <div className="content-subject-2">
        </div> */}
      </div>
    </div>
  );
}

export default SkeletonMapelMateri;
