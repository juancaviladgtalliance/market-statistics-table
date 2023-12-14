import { checkAmountZero } from "../../helpers/checkAmountZero";
import { CeldWrapper } from "../../lib/styledComponents/table";

function MoiComponent({
  moi,
  activeClass,
}: {
  activeClass: string;
  moi: number;
}) {
  const colorAlert = moi < 9 ? " green" : " red",
    moiType = moi >= 9 ? "Buyers" : "Sellers";
  return (
    <CeldWrapper className={`${activeClass}${colorAlert}`}>
      <h3 className="cell-title">MOI</h3>{" "}
      <h4 className="cell-content">
        {checkAmountZero("", moi, " Months").message}{" "}
      </h4>
      <p className="cell-data">{moiType} Market</p>
    </CeldWrapper>
  );
}

export default MoiComponent;
