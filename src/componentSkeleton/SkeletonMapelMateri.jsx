import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonMapelMateri(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="card-skeleton-materimapel" key={i}>
        <Skeleton
          style={{
            display: "flex",
            borderRadius: '20px',
            width: '720px',
            justifyContent: 'space-between',
            paddingLeft: '30px'
          }}
        />
      </div>
    ));
}

export default SkeletonMapelMateri;