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
      <h3 style={{ fontSize: "0.7rem" }}># Current Listings</h3>
      <h4 style={{ fontSize: "0.7rem" }}>{unitSold}</h4>
      <h3 style={{ fontSize: "0.7rem" }}>Change from last year</h3>
      <p style={{ fontSize: "0.7rem" }}>
        {checkAmountZero("", variation_active, " %").message}
      </p>
    </CeldWrapper>
  );
}

export default CurrrentListComponent;
