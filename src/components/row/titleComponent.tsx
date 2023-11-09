import { useState, useEffect } from "react";
import { elapseTimes, monthRanges } from "../../constants";
import { TitleWrapper } from "../../lib/styledComponents/table";
import { hooks, setActiveNeighborhood } from "../../lib/redux";

function TitleComponent({
  rowId,
  title,
  range,
}: {
  rowId: number;
  title: string;
  range: string;
}) {
  const dispatch = hooks.useAppDispatch();
  const [elapsed, setElapsed] = useState("");
  const { activeNeighborhood } = hooks.useAppSelector((state) => state.ius);
  const isOpen = activeNeighborhood === rowId ? " open" : "";
  useEffect(() => {
    switch (range) {
      case `${monthRanges[6].value}`:
        setElapsed(elapseTimes[1]);
        break;
      case `${monthRanges[12].value}`:
        setElapsed(elapseTimes[2]);
        break;
      default:
        setElapsed(elapseTimes[0]);
        break;
    }
  }, [range]);
  return (
    <TitleWrapper
      className="titlecomponent"
      onClick={() => {
        if (activeNeighborhood !== rowId) {
          dispatch(setActiveNeighborhood(rowId));
        } else {
          dispatch(setActiveNeighborhood(0));
        }
      }}
    >
      <div className="button-wrapper">
        <button className={`${isOpen}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>
      <h3>{title}</h3>
      <h4>View {elapsed} sales</h4>
    </TitleWrapper>
  );
}

export default TitleComponent;
