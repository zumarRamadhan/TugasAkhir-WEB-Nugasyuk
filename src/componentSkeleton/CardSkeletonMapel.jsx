import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeletonMapel(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
        <Skeleton
          style={{
            height: "200px",
            borderRadius: "20px",
            gridTemplateColumns: "repeat(3, ifr)",
            marginBottom: "10px"
          }}
        />
      </div>
    ));
}

export default CardSkeletonMapel;
