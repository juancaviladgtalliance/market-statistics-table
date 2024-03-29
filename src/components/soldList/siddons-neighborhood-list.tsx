import { useEffect, useState } from "react";
import { hooks, soldList, setMmarketStatisticTitle } from "../../lib/redux";
import {
  monthRanges,
  priceRanges,
  propertyTypes,
  uiInitialState,
} from "../../constants";
import { getRangeDate } from "../../helpers/getRangeDate";
import { StylesList } from "../../lib/styledComponents";
import MobileList from "./mobile-list/index";
import PlaceholderMobile from "./placeholders/mobile";
import PlaceholderDesktop from "./placeholders/desktop";
import DesktopList from "./desktop-list";
import { setPagination } from "../../lib/redux/features/filterslicer";

export default function SiddonsNeighborhoodList({ rowId }: { rowId: number }) {
  const dispatch = hooks.useAppDispatch();
  const { range, type, style, neighborhood, price, pagination, sortListing } =
    hooks.useAppSelector((state) => state.filters);
  const { marketStatisticTitle, neighborhoodList } = hooks.useAppSelector(
    (state) => state.ius
  );
  const [loading, setLoading] = useState<boolean>(false);
  const active = rowId === neighborhood ? " active" : "";
  const getPaginationParams = () => {
    const param = new URL(document.location.href).searchParams;
    const paramsObject = Object.fromEntries(param.entries());
    return paramsObject.page ? parseInt(paramsObject.page) : 1;
  };
  const setTitleMarketing = (neighborhoodID: number) => {
    const param = new URL(document.location.href).searchParams;
    const paramsObject = Object.fromEntries(param.entries());
    if (paramsObject.neighborhood) {
      const neighborhoodstitleItem = neighborhoodList?.filter(
        (item) =>
          item.shortcode_content_id === parseInt(paramsObject.neighborhood)
      );
      //console.log(uiInitialState.marketStatisticTitle);
      if (neighborhoodstitleItem!.length > 0) {
        const setTitleByParam = neighborhoodstitleItem
          ? `${neighborhoodstitleItem[0].name || ""}`
          : marketStatisticTitle;
        dispatch(setMmarketStatisticTitle(setTitleByParam));
      } else {
        dispatch(setMmarketStatisticTitle(uiInitialState.marketStatisticTitle));
      }
    } else {
      const neighborhoodstitleItem = neighborhoodList?.filter(
        (item) => item.shortcode_content_id === neighborhoodID
      );
      const setTitleByParam = neighborhoodstitleItem
        ? `${neighborhoodstitleItem[0].name || ""}`
        : marketStatisticTitle;
      dispatch(setMmarketStatisticTitle(setTitleByParam));
    }
  };
  const fetchDataTable = async () => {
    setLoading(true);
    const url =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_URL_DEV_SIDDONS_NEIGHBORHOOD_LIST
        : import.meta.env.VITE_URL_PROD_SIDDONS_NEIGHBORHOOD_LIST;
    // get current date
    const closeDateInterval = Object.values(monthRanges).filter(
      (monthRange) => monthRange.value == range
    )[0];
    const classId = Object.values(propertyTypes).filter(
      (item) => item.value == type
    )[0];
    const priceRange = Object.values(priceRanges).filter(
      (priceItem) => priceItem.value === price
    )[0];

    const { start, end } = getRangeDate(
      closeDateInterval.start,
      closeDateInterval.end
    );

    //  console.log(typeof pagination.current);
    // setting form data
    const formdata = new FormData();
    formdata.append("action", import.meta.env.VITE_ACTION_KEY);
    formdata.append("close_date_interval", `${closeDateInterval.value}`);
    formdata.append("class_id", `${classId.id}`);
    formdata.append("property_style", `${style}`);
    formdata.append("order", sortListing);
    formdata.append("page", pagination.current.toString());
    formdata.append("price_min", `${priceRange.minPrice.toString()}`);
    formdata.append("price_max", `${priceRange.maxPrice.toString()}`);

    formdata.append("city_id", `${neighborhood}`);
    formdata.append("price", `${price}`);

    formdata.append("close_date_start", `${start.replaceAll("-", "")}`);
    formdata.append("close_date_end", `${end.replaceAll("-", "")}`);

    const data = fetch(url, {
      method: "POST",
      body: formdata,
      headers: {
        Authorization:
          "Basic " +
          btoa(
            import.meta.env.VITE_USERNAME_NEIGHBORHOOD +
              ":" +
              import.meta.env.VITE_PASSWORD_NEIGHBORHOOD
          ),
      },
    });
    // console.log(data);
    const response = (await data).json();
    return response;
  };
  useEffect(() => {
    fetchDataTable().then((res) => {
      const { data } = res;

      //  console.log(data);
      dispatch(soldList.setSoldList(data));
      dispatch(
        setPagination({
          ...pagination,
          current: getPaginationParams(),
          total: data.response?.pagination.total_pages_count,
        })
      );
      if (neighborhood !== 0) {
        console.log(neighborhood);
        setTitleMarketing(neighborhood);
      }
      setLoading(false);
    });
  }, [range, type, style, neighborhood, price]);
  useEffect(() => {
    fetchDataTable().then((res) => {
      const { data } = res;
      //     console.log(data);
      dispatch(soldList.setSoldList(data));
      setLoading(false);
    });
  }, [sortListing]);
  useEffect(() => {
    fetchDataTable().then((res) => {
      const { data } = res;
      //   console.log(data);
      dispatch(soldList.setSoldList(data));
      setLoading(false);
    });
  }, [pagination.current]);
  return (
    <StylesList.ListSoldNeighborhood className={`${active}`}>
      <div className="list-desktop">
        {!loading ? <DesktopList /> : <PlaceholderDesktop />}
      </div>
      <div className="list-mobile">
        {!loading ? <MobileList /> : <PlaceholderMobile />}
      </div>
    </StylesList.ListSoldNeighborhood>
  );
}
