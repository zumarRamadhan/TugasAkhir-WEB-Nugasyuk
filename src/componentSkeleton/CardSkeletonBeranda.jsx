import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeletonBeranda(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
        <Skeleton
          style={{
            padding: "15px",
            width: "380px",
            height: "100px",
            borderRadius: "20px",
          }}
        />
      </div>
    ));
}

export default CardSkeletonBeranda;
