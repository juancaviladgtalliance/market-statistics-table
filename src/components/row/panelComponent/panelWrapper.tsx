import { FC } from "react";
import { PanelWrapper } from "../../../lib/styledComponents/table";
import MarketExtraInfo from "./marketExtraInfo";

interface PanelProps {
  neighborhoodId: number;
  link?: string;
  activeClass: string;
}

const Panel: FC<PanelProps> = ({ activeClass, neighborhoodId, link }) => {
  return (
    <PanelWrapper className={`${activeClass}`}>
      <MarketExtraInfo
        activeClass={activeClass}
        rowId={neighborhoodId}
        link={link || "#"}
      />
    </PanelWrapper>
  );
};
export default Panel;
