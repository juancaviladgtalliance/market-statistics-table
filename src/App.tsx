import { useEffect } from "react";
import useFetch from "./hooks/useFetch";
import { Filters, Table } from "./components";
import { Helmet } from "react-helmet";
import {
  hooks,
  setMmarketStatisticTitle,
  setNeighborhood,
  setNeighborhoodList,
  setPagination,
  setPrice,
  setRanges,
  setSorting,
  setStyles,
  setTypes,
} from "./lib/redux";
import { uiInitialState } from "./constants";
import Loader from "./components/loader";

function App() {
  const dispatch = hooks.useAppDispatch();
  const { marketStatisticTitle, neighborhoodList } = hooks.useAppSelector(
    (state) => state.ius
  );
  const { neighborhood, pagination } = hooks.useAppSelector(
    (state) => state.filters
  );

  const cities: string = import.meta.env?.DEV
    ? import.meta.env.VITE_DEV_URL_CITIES
    : import.meta.env.VITE_PROD_URL_CITIES;

  const { data } = useFetch(cities);

  // query for testing: /?type=condo&neighborhood=474&style=new&price=all&range=612&sortListing=price_sqft-asc&page=1
  const getParams = () => {
    const param = new URL(document.location.href).searchParams;
    const paramsObject = Object.fromEntries(param.entries());
    console.log(paramsObject);
    if (Object.keys(paramsObject).length > 0) {
      if (paramsObject.type) {
        dispatch(setTypes(paramsObject.type));
      }
      if (paramsObject.neighborhood) {
        dispatch(setNeighborhood(parseInt(paramsObject.neighborhood)));
      }
      if (paramsObject.style) {
        dispatch(setStyles(paramsObject.style));
      }
      if (paramsObject.price) {
        dispatch(setPrice(paramsObject.price));
      }
      if (paramsObject.page) {
        // not working for some reason
        console.log(paramsObject.page);
        dispatch(
          setPagination({ ...pagination, current: parseInt(paramsObject.page) })
        );
      }
      if (paramsObject.range) {
        dispatch(setRanges(parseInt(paramsObject.range)));
      }
      if (paramsObject.sortListing) {
        dispatch(setSorting(paramsObject.sortListing));
      }
    }
  };
  useEffect(() => {
    // console.log(data);
    if (neighborhoodList === null && data != null) {
      const neighborhoods = data || [];
      //  console.log(data);
      dispatch(setNeighborhoodList(neighborhoods));
    }
    // console.log(neighborhoodList);
  }, [data]);
  useEffect(() => {
    getParams();
  }, []);
  useEffect(() => {
    // console.log(neighborhood);
    if (neighborhood !== 0) {
      const neighborhoodstitleItem = neighborhoodList?.filter(
        (item) => item.shortcode_content_id === neighborhood
      );
      // console.log(neighborhoodstitleItem);
      const neighborhoodTitleText = neighborhoodstitleItem
        ? `${neighborhoodstitleItem[0].name}`
        : uiInitialState.marketStatisticTitle;
      dispatch(setMmarketStatisticTitle(neighborhoodTitleText));
    } else {
      dispatch(setMmarketStatisticTitle(uiInitialState.marketStatisticTitle));
    }
  }, [neighborhood]);
  useEffect(() => {
    document.getElementById("open-trigger-button")!.innerHTML =
      marketStatisticTitle;
  }, [marketStatisticTitle]);
  return (
    <>
      <Helmet>
        <title>{marketStatisticTitle}</title>
      </Helmet>
      {neighborhoodList === null ? (
        <Loader />
      ) : (
        <div className="ms-shortcode-sold-properties-filters">
          <Filters neighborhoodList={neighborhoodList} />
          <Table />
        </div>
      )}
    </>
  );
}

export default App;
