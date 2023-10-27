import { checkAmountZero } from "../../helpers/checkAmountZero";
import { hooks } from "../../lib/redux";
import { CeldWrapper } from "../../lib/styledComponents/table";

function TotalSoldComponent({
  totalSold,
  variation_sold,
  activeClass,
}: {
  activeClass: string;
  variation_sold: number;
  totalSold: number;
}) {
  const { type } = hooks.useAppSelector((state) => state.filters);
  const unitText = type === "condo" ? "Condos" : "Homes";
  return (
    <CeldWrapper className={`${activeClass}`}>
      <h3>{`${unitText} Sold`}</h3>
      <h4>{checkAmountZero("", totalSold, "").message}</h4>
      <p>{checkAmountZero("", variation_sold, " %").message}</p>
    </CeldWrapper>
  );
}

export default TotalSoldComponent;
