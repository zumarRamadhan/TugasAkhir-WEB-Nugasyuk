import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../cssAll/walimurid/MapelMateri.css";

function SkeletonMapelMateri() {
  return (
    <div>
      <div className="con-content-subject">
        <Skeleton style={{width: '820px', height: '200px', borderRadius: '20px'}}/>
        <div className="content-subject-2">
          <Skeleton circle width={100} height={100}/>
          <p className="name-teacher-2"><Skeleton width={100} height={30}/></p>
        </div>
      </div>
    </div>
  );
}

export default SkeletonMapelMateri;