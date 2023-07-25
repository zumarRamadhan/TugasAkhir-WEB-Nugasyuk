import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeletonListTask(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
        <Skeleton
          style={{
            height: "100px",
            borderRadius: "20px",
            gridTemplateColumns: "repeat(1, ifr)",
            marginBottom: '20px'
          }}
        />
      </div>
    ));
}

export default CardSkeletonListTask;