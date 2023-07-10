import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/walimurid/DetailTugas.css";

function SkeletonDetailTask(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="con-content-detail-task">
        <div className="content-detail-task">
          <div className="content-detail-task-left">
            <Skeleton
              style={{ width: "70px", height: "70px", borderRadius: "10px" }}
            />
            <div className="desc-material">
              <p className="name-task ">
                <Skeleton width={100} />
              </p>
              <p className="teacher">
                <Skeleton />
              </p>
            </div>
          </div>
          <div className="content-detail-task-right">
            <p className="date-upload">
              <Skeleton width={100} />
            </p>
          </div>
        </div>
        <p className="desc-content-detail-task">
          <Skeleton width={400} />
        </p>
        <p className="task-deadline-time">
          Deadline :{" "}
          <span>
            <Skeleton width={100} />
          </span>
        </p>
      </div>
    ));
}

export default SkeletonDetailTask;
