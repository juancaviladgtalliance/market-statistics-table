import { Select } from "antd";
import { paginationList } from "../helpers/paginationList";
import { hooks } from "../lib/redux";
import { setSorting } from "../lib/redux/features/filterslicer";
import { table } from "../lib/styledComponents";
import { selectOrder } from "../constants";
import { PaginationPanel } from "./paginationPanel";
import { useSearchParams } from "react-router-dom";

export default function SortingPanel() {
  const dispatch = hooks.useAppDispatch();
  const { pagination, sortListing } = hooks.useAppSelector(
    (state) => state.filters
  );
  const ListItems = paginationList(pagination.total);
  const [, setSearchParams] = useSearchParams();
  const setParamBy = (type: string, value: string) => {
    setSearchParams(() => {
      const param = new URL(document.location.href).searchParams;
      const paramsObject = Object.fromEntries(param.entries());
      return {
        ...paramsObject,
        [type]: value,
      };
    });
  };

  const handlerSorting = (value: string) => {
    dispatch(setSorting(value));
    setParamBy("sortListing", value);
  };
  return (
    <table.SortinhWrapper>
      <div className="left-side">
        <Select
          id="flex_idx_sort"
          defaultValue={selectOrder[0].value}
          style={{ width: "270px" }}
          onChange={handlerSorting}
          options={selectOrder}
          value={sortListing}
        />
      </div>
      <PaginationPanel ListItems={ListItems} />
    </table.SortinhWrapper>
  );
}
