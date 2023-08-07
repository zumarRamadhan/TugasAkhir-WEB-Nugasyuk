import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeletonInfoTask(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-info-task" key={i}>
        <Skeleton
          style={{
            padding: "15px",
            height: "100px",
            borderRadius: "20px",
            gridTemplateColumns: "repeat(2, ifr)"
          }}
        />
      </div>
    ));
}

export default CardSkeletonInfoTask;
