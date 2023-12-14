import { paginationList } from "../../../helpers/paginationList";
import { ItemProps } from "../../../types";

import AntdTable from "../../antdTable";

const dataRows: ItemProps[] = paginationList(15).map((element) => {
  return {
    sysid: element.toString(),
    class_id: "1",
    image: [],
    full_address: null,
    price_sqft: null,
    reduced: null,
    price: null,
    bed: null,
    subdivision: null,
    bath: null,
  };
});

export default function PlaceholderDesktop() {
  return <AntdTable dataRows={dataRows} />;
}
