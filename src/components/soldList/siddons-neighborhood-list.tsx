import { useEffect, useState } from "react";
import axios from "axios";
import { hooks, soldList } from "../../lib/redux";
import { monthRanges, priceRanges, propertyTypes } from "../../constants";
import { getRangeDate } from "../../helpers/getRangeDate";
import { StylesList } from "../../lib/styledComponents";
import MobileList from "./mobile-list/index";
import PlaceholderMobile from "./placeholders/mobile";
import PlaceholderDesktop from "./placeholders/desktop";
import DesktopList from "./desktop-list";
import { setPagination } from "../../lib/redux/features/filterslicer";
import { DataData } from "../../types";

export default function SiddonsNeighborhoodList({ rowId }: { rowId: number }) {
  const dispatch = hooks.useAppDispatch();
  const { range, type, style, neighborhood, price, pagination, sortListing } =
    hooks.useAppSelector((state) => state.filters);
  const [loading, setLoading] = useState<boolean>(false);
  const active = rowId === neighborhood ? " active" : "";
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

    // setting form data
    const formdata = new FormData();
    formdata.append("action", import.meta.env.VITE_ACTION_KEY);
    formdata.append("close_date_interval", `${closeDateInterval.value}`);
    formdata.append("class_id", `${classId.id}`);
    formdata.append("property_style", `${style}`);
    formdata.append("order", sortListing);
    formdata.append("page", pagination.current.toString());
    formdata.append("price_min", `${priceRange.minPrice}`);
    formdata.append("price_max", `${priceRange.maxPrice}`);

    formdata.append("city_id", `${neighborhood}`);
    formdata.append("price", `${price}`);

    formdata.append("close_date_start", `${start.replaceAll("-", "")}`);
    formdata.append("close_date_end", `${end.replaceAll("-", "")}`);

    const { data } = await axios.post<DataData>(url, formdata, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, access-control-allow-origin",
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

    return data;
  };
  useEffect(() => {
    fetchDataTable().then((data) => {
      dispatch(soldList.setSoldList(data));
      dispatch(
        setPagination({
          ...pagination,
          current: 1,
          total: data.response?.pagination.total_pages_count,
        })
      );
      setLoading(false);
    });
  }, [range, type, style, neighborhood, price]);
  useEffect(() => {
    fetchDataTable().then((data) => {
      dispatch(soldList.setSoldList(data));
      setLoading(false);
    });
  }, [sortListing]);
  useEffect(() => {
    fetchDataTable().then((data) => {
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
