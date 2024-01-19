import convertDataItem from "../../../helpers/converDataitem";
import { hooks } from "../../../lib/redux";
import AntdTable from "../../antdTable";

export default function DesktopList() {
  const { response } = hooks.useAppSelector((state) => state.soldList);
  // console.log(response);

  const dataWithResponse = convertDataItem(response?.items || []);
  //  console.log(dataWithResponse);
  return <>{dataWithResponse && <AntdTable dataRows={dataWithResponse} />}</>;
}
