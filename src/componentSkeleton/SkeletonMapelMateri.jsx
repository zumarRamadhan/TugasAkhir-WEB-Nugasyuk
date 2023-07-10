import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/walimurid/MapelMateri.css";

function SkeletonMapelMateri(cards) {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div className="con-content-subject" key={i}>
        <div>
          <div
            className="content-subject"
          >
            <div className="content-subject-left">
              <p className="name-subject"><Skeleton/></p>
              <p className="name-teacher"><Skeleton/></p>
            </div>
            <Skeleton/>
          </div>
        </div>

        <div className="content-subject-2">
          <Skeleton circle/>
          <p className="name-teacher-2"><Skeleton/></p>
        </div>
      </div>
    ));
}

export default SkeletonMapelMateri;
