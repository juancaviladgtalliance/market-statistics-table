import { useState, useEffect } from "react";
import { elapseTimes, monthRanges } from "../../constants";
import { TitleWrapper } from "../../lib/styledComponents/table";
import { hooks, setActiveNeighborhood, setNeighborhood } from "../../lib/redux";
import { useSearchParams } from "react-router-dom";

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
  const [, setSearchParams] = useSearchParams();

  const { neighborhood } = hooks.useAppSelector((state) => state.filters);
  const isOpen = neighborhood === rowId ? " open" : "";
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

  const ActiveButton = () => {
    if (neighborhood !== rowId) {
      dispatch(setActiveNeighborhood(rowId));
    } else {
      dispatch(setActiveNeighborhood(0));
    }
  };
  const setNeighborhoodParam = (value: number) => {
    setSearchParams(() => {
      const param = new URL(document.location.href).searchParams;
      const paramsObject = Object.fromEntries(param.entries());
      return {
        ...paramsObject,
        neighborhood: value.toString(),
      };
    });
  };
  const handlerNeighborhoodClick = () => {
    if (rowId == neighborhood) {
      dispatch(setNeighborhood(0));
      setNeighborhoodParam(0);
    } else {
      dispatch(setNeighborhood(rowId));
      setNeighborhoodParam(rowId);
    }
  };
  return (
    <TitleWrapper className="titlecomponent">
      <div className="button-wrapper">
        <button className={`${isOpen}`} onClick={ActiveButton}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>
      <h3 onClick={handlerNeighborhoodClick} style={{ cursor: "pointer" }}>
        {title}
      </h3>
      <h4 onClick={handlerNeighborhoodClick} style={{ cursor: "pointer" }}>
        View {elapsed} sales
      </h4>
    </TitleWrapper>
  );
}

export default TitleComponent;
