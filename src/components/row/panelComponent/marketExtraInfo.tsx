import House from "./assets/house.svg";
import { CeldWrapper } from "../../../lib/styledComponents/table";
function MarketExtraInfo({
  rowId,
  link,
  activeClass,
}: {
  activeClass: string;
  rowId: number;
  link: string;
}) {
  return (
    <CeldWrapper
      className={`${activeClass} marketExtraInfo panel-item`}
      key={rowId}
    >
      <a href={link} target="_blank">
        <h4 className="market-info-title">View Inventory</h4>
        <div className="market-infoimage">
          <img src={House} alt="View Inventory" />
        </div>
      </a>
    </CeldWrapper>
  );
}

export default MarketExtraInfo;
