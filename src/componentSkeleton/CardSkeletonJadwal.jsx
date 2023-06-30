import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function CardSkeletonJadwal(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
        <Skeleton
          style={{
            height: "350px",
            borderRadius: "20px",
            gridTemplateColumns: "repeat(3, ifr)",
            marginBottom: "10px"
          }}
        />
      </div>
    ));
}

export default CardSkeletonJadwal;