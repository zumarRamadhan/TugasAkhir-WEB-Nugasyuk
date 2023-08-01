import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonFilter() {
  return (
    <div className="card-skeleton">
        <Skeleton
          style={{
            height: "50px",
            width: "250px",
            borderRadius: "10px",
            marginBottom: '20px'
          }}
        />
      </div>
  );
}

export default SkeletonFilter;