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
      <h3>Current Litings</h3>
      <h4>{unitSold}</h4>
      <p>{variation_active} %</p>
    </CeldWrapper>
  );
}

export default CurrrentListComponent;
