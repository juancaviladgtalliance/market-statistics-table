import { checkAmountZero } from "../../helpers/checkAmountZero";
import { CeldWrapper } from "../../lib/styledComponents/table";

function RatioComponent({
  ratio,
  activeClass,
}: {
  activeClass: string;
  ratio: number;
}) {
  return (
    <CeldWrapper className={`${activeClass}`}>
      <h3>% Ratio List/ Close Price</h3>
      <h4>{checkAmountZero("", ratio, " %").message}</h4>
    </CeldWrapper>
  );
}

export default RatioComponent;
