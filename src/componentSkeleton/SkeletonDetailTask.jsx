import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/walimurid/DetailTugas.css";

function SkeletonDetailTask(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div>
        <div className="content-detail-task-left">
          <div className="icon-detail-task"></div>
          <div className="desc-material">
            <Skeleton />
            <Skeleton />
          </div>
        </div>
        <div className="content-detail-task-right">
          <Skeleton />
        </div>
      </div>
    ));
}

export default SkeletonDetailTask;
