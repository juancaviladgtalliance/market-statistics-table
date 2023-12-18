import convertDataItem from "../../../helpers/converDataitem";
import { Styles, redux } from "../../../lib";
import { ItemProps } from "../../../types";
import NoEmptyimage from "../../noEmptyimage";
import SortingPanel from "../../sortingPanel";
import MobileItem from "./mobileItem";

export default function MobileList() {
  const { response } = redux.hooks.useAppSelector((state) => state.soldList);

  const dataWithResponse = convertDataItem(response?.items || []);
  return (
    <Styles.StylesList.mobilelistWrapper>
      <SortingPanel />
      <div className="list-content">
        {dataWithResponse && dataWithResponse.length > 0 ? (
          dataWithResponse.map((item: ItemProps) => (
            <MobileItem item={item} key={item.sysid} />
          ))
        ) : (
          <NoEmptyimage />
        )}
      </div>
      <SortingPanel />
    </Styles.StylesList.mobilelistWrapper>
  );
}
