import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { CityList } from "./types";
import { Filters, Table } from "./components";

function App() {
  const [neighborhoodList, setNeighborhoodList] = useState<CityList | null>(
    null
  );
  const cities: string = import.meta.env?.DEV
    ? import.meta.env.VITE_DEV_URL_CITIES
    : import.meta.env.VITE_PROD_URL_CITIES;

  const { data } = useFetch(cities);
  useEffect(() => {
    if (neighborhoodList === null && data != null) {
      const neighborhoods = Array.from(data);

      setNeighborhoodList(neighborhoods);
    }
    // console.log(neighborhoodList);
  }, [data]);
  return (
    <>
      {neighborhoodList === null ? null : (
        <div className="ms-shortcode-sold-properties-filters">
          <Filters neighborhoodList={neighborhoodList} />
          <Table />
        </div>
      )}
    </>
  );
}

export default App;
