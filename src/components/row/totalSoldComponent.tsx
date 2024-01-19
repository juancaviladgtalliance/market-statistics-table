import { checkAmountZero } from "../../helpers/checkAmountZero";
import { checkPositiveNegative } from "../../helpers/checkpositivenegative";
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
      <h3 style={{ fontSize: "0.7rem" }}>{`# ${unitText} Sold`}</h3>
      <h4 style={{ fontSize: "0.7rem" }}>
        {checkAmountZero("", totalSold, "").message}
      </h4>
      <h3 style={{ fontSize: "0.7rem" }}>Change from last year</h3>
      <p
        style={{ fontSize: "0.7rem" }}
        dangerouslySetInnerHTML={{
          __html: checkPositiveNegative("", variation_sold, " %").message,
        }}
      />
    </CeldWrapper>
  );
}

export default TotalSoldComponent;
