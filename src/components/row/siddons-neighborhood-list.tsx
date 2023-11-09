import { useEffect } from "react";
import axios from "axios";
import { hooks } from "../../lib/redux";
import { DetailNeighborhood } from "../../lib/styledComponents/table";
import { monthRanges, priceRanges, propertyTypes } from "../../constants";
import { getRangeDate } from "../../helpers/getRangeDate";

export default function SiddonsNeighborhoodList({ rowId }: { rowId: number }) {
  const { range, type, style, neighborhood, price } = hooks.useAppSelector(
    (state) => state.filters
  );
  /**
 * Order Required
 price_sqft-desc
price_sqft-asc
last_updated-desc
price-desc
price-asc
sqft-desc
sqft-asc
 */
  /**
   * Page Required
   *
   */
  const active = rowId === neighborhood ? " active" : "";
  const fetchDataTable = async () => {
    const url =
      import.meta.env.MODE === "development"
        ? import.meta.env.VITE_URL_DEV_SIDDONS_NEIGHBORHOOD_LIST
        : import.meta.env.VITE_URL_PROD_SIDDONS_NEIGHBORHOOD_LIST;

    /**
         * action: flex_statistics_filter_custom_sold
        class_id: 1
        city_id: 144
        price_min: 0
        price_max: 100000000
        property_style: all
page: 1
order: last_updated-desc
close_date_interval: 0-3
close_date_start: 20200101
close_date_end: 20200331
*/
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
    formdata.append("order", "last_updated-desc");
    formdata.append("page", "1");
    formdata.append("price_min", `${priceRange.minPrice}`);
    formdata.append("price_max", `${priceRange.maxPrice}`);

    formdata.append("city_id", `${neighborhood}`);
    formdata.append("price", `${price}`);

    formdata.append("close_date_start", `${start.replaceAll("-", "")}`);
    formdata.append("close_date_end", `${end.replaceAll("-", "")}`);

    const { data } = await axios.post(url, formdata, {
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
    //   console.log(data);
    return await data;
  };
  useEffect(() => {
    fetchDataTable();
  }, [range, type, style, neighborhood, price]);
  return (
    <DetailNeighborhood className={`${active}`}>
      A nueva tabla
    </DetailNeighborhood>
  );
}
