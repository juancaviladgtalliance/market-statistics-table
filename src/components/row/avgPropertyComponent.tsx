import { CeldWrapper } from "../../lib/styledComponents/table";

function AvgPropertyComponent({
  avgProp,
  activeClass,
}: {
  activeClass: string;
  avgProp: number;
}) {
  return (
    <CeldWrapper className={`${activeClass}`}>
      {" "}
      <h3>AVG Property Size</h3>
      <h4>{avgProp} Sq.Ft.</h4>
    </CeldWrapper>
  );
}

export default AvgPropertyComponent;
