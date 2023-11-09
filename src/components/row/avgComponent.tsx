import { CeldWrapper } from "../../lib/styledComponents/table";
import { checkAmountZero } from "./../../helpers/checkAmountZero";

function AvgComponent({
  avg,
  activeClass,
}: {
  activeClass: string;
  avg: number;
}) {
  // console.log(activeClass);
  return (
    <CeldWrapper className={`${activeClass} avg-item`}>
      <h3>AVG $ / SQFT</h3>
      <h4>{checkAmountZero("", avg, "").message} </h4>
    </CeldWrapper>
  );
}

export default AvgComponent;
