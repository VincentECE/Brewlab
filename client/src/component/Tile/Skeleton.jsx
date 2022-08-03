import MuiSkeleton from "@mui/material/Skeleton";
import { v4 as uuid } from 'uuid';

export const Skeleton = () => {
  const arr = Array(10).fill(0);

  return (<>{arr.map(() => {
    return (
    <div key={uuid()}>
     <MuiSkeleton className="tile-skeleton container-padding-1" variant="rectangular"/>
    </div>
    )
  })}
  </>);
};


