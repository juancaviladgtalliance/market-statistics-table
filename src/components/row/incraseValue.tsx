import { checkPositiveNegative } from "../../helpers/checkpositivenegative";
import { Styles } from "../../lib";

export default function IncraseValue({
  incraseValue,
  activeClass,
}: {
  incraseValue: number;
  activeClass: string;
}) {
  return (
    <Styles.table.CeldWrapper className={activeClass}>
      <h3>Value Increase</h3>
      <h3 style={{ fontSize: "0.7rem" }}>Change from last year</h3>
      <h4
        dangerouslySetInnerHTML={{
          __html: checkPositiveNegative("", incraseValue, " %").message,
        }}
      />
    </Styles.table.CeldWrapper>
  );
}
