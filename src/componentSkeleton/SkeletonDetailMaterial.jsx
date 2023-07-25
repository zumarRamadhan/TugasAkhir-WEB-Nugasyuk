import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/walimurid/DetailMateri.css";
import { Icon } from "@iconify/react";

function SkeletonDetailMateri(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="con-content-material">
        <div className="content-material">
          <div className="content-material-left">
            <div className="icon-material">
              <Icon
                icon="ri:book-line"
                width="40"
                style={{ color: "#2A93D5" }}
              />
            </div>
            <div className="desc-material">
              <p className="name-material ">
                <Skeleton width={100} />
              </p>
              <p className="teacher">
                <Skeleton width={100} />
              </p>
            </div>
          </div>
          <div className="content-material-right">
            <p className="date-upload">
              <Skeleton width={100} />
            </p>
          </div>
        </div>
        <p className="desc-content-material">
          <Skeleton width={400} />
        </p>
        {/* {fileLinkElements} */}
      </div>
    ));
}

export default SkeletonDetailMateri;