import { useState, useEffect } from "react";
import { CityList, MarketStatisticDataList } from "../types";

export default function useFetch(url: string) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<MarketStatisticDataList | CityList | null>(
    null
  );
  const controller = new AbortController();
  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(url, {
      signal: controller.signal,
      mode: "no-cors",
    });
    const string = await response.text();
    const json = string === "" ? {} : JSON.parse(string);
    setData(json);
    setError(null);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
    return () => {
      if (error != null) {
        controller.abort();
      }
    };
  }, [url]);
  return { error, loading, data };
}
