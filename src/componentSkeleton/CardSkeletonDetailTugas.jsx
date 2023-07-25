import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";

function CardSkeletonDetailTugas(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-beranda" key={i}>
      <Skeleton
        style={{
          height: "100px",
          borderRadius: "20px"
        }}
      />
    </div>
    ));
}

export default CardSkeletonDetailTugas;
