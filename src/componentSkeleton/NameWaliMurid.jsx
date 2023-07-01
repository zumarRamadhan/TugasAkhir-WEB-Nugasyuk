import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NameWaliMurid(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
        <Skeleton
          style={{
            padding: "10px 16px",
            width: "70px",
            borderRadius: "10px",
            marginLeft: "15px",
          }}
        />
      </div>
    ));
}

export default NameWaliMurid;