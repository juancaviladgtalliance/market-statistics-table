import { checkAmountZero } from "../../helpers/checkAmountZero";
import { Styles } from "../../lib";

export default function DaysOnMarket({
  daysOnMarket,
  activeClass,
}: {
  daysOnMarket: number;
  activeClass: string;
}) {
  return (
    <Styles.table.CeldWrapper className={activeClass}>
      <h3>Days on Market</h3>
      <h4>{checkAmountZero("", daysOnMarket, "").message}</h4>
    </Styles.table.CeldWrapper>
  );
}
