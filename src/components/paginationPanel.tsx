import { Select } from "antd";
import { hooks } from "../lib/redux";
import { setPagination } from "../lib/redux/features/filterslicer";
import { useSearchParams } from "react-router-dom";
export function PaginationPanel({ ListItems }: { ListItems: number[] }) {
  const dispatch = hooks.useAppDispatch();
  const { pagination } = hooks.useAppSelector((state) => state.filters);
  //console.log(pagination.current);
  const paginationList = (listNumber: number[]) => {
    return listNumber.map((item) => ({ value: item, label: `Page ${item}` }));
  };
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
  //console.log(console.log(paginationList(ListItems)[0].value.toString()));
  if (ListItems.length < 6) {
    return (
      <div className="right-side">
        {ListItems.map((button: number) => {
          return (
            <button
              key={button}
              onClick={() => {
                dispatch(setPagination({ ...pagination, current: button }));
                setParamBy("page", button.toString());
              }}
              className={`btn-sort${
                pagination.current == button ? " active" : ""
              }`}
            >
              {button}
            </button>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="right-side">
        <Select
          id="listItems"
          defaultValue={paginationList(ListItems)[0].value.toString()}
          style={{ width: "200px" }}
          onChange={(value) =>
            dispatch(setPagination({ ...pagination, current: parseInt(value) }))
          }
          options={paginationList(ListItems)}
          value={`Page ${paginationList(ListItems)[
            pagination.current - 1
          ].value.toString()}`}
        />
      </div>
    );
  }
}
