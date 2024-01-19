import { checkPositiveNegative } from "../../helpers/checkpositivenegative";
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
      <h4
        dangerouslySetInnerHTML={{
          __html: checkPositiveNegative("", ratio, " %").message,
        }}
      />
    </CeldWrapper>
  );
}

export default RatioComponent;
