import { CeldWrapper } from "../../lib/styledComponents/table";

function AvgComponent({
  avg,
  activeClass,
}: {
  activeClass: string;
  avg: number;
}) {
  console.log(activeClass);
  return (
    <CeldWrapper className={`${activeClass}`}>
      <h3>AVG $ / SQFT</h3>
      <h4>{avg}</h4>
    </CeldWrapper>
  );
}

export default AvgComponent;
