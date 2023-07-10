import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonNamaMapel(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i}>
        <Skeleton/>
      </div>
    ));
}

export default SkeletonNamaMapel;
