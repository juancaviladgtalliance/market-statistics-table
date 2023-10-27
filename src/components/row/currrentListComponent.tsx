import { checkAmountZero } from "../../helpers/checkAmountZero";
import { CeldWrapper } from "../../lib/styledComponents/table";

function CurrrentListComponent({
  unitSold,
  variation_active,
  activeClass,
}: {
  variation_active: number;
  unitSold: number;
  activeClass: string;
}) {
  return (
    <CeldWrapper className={`${activeClass}`}>
      <h3>Current Listings</h3>
      <h4>{unitSold}</h4>
      <p>{checkAmountZero("", variation_active, " %").message}</p>
    </CeldWrapper>
  );
}

export default CurrrentListComponent;
