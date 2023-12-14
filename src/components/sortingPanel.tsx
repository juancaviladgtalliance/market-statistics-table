import { Select } from "antd";
import { paginationList } from "../helpers/paginationList";
import { hooks } from "../lib/redux";
import { setPagination, setSorting } from "../lib/redux/features/filterslicer";
import { table } from "../lib/styledComponents";
import { selectOrder } from "../constants";

export default function SortingPanel() {
  const dispatch = hooks.useAppDispatch();
  const { pagination, sortListing } = hooks.useAppSelector(
    (state) => state.filters
  );
  const ListItems = paginationList(pagination.total);
  const handlerSorting = (value: string) => dispatch(setSorting(value));
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
      <div className="right-side">
        {ListItems.map((button: number) => {
          return (
            <button
              key={button}
              onClick={() =>
                dispatch(setPagination({ ...pagination, current: button }))
              }
              className={`btn-sort${
                pagination.current == button ? " active" : ""
              }`}
            >
              {button}
            </button>
          );
        })}
      </div>
    </table.SortinhWrapper>
  );
}
