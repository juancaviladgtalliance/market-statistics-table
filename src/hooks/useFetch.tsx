import { useState, useEffect } from "react";
import { NeighborhoodItem } from "../types";

export interface CredentialOption {
  username?: string;
  password?: string;
}

export default function useFetch(
  url: string,
  credentials: CredentialOption = {}
) {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<NeighborhoodItem[] | null>(null);

  const controller = new AbortController();
  const fetchData = async () => {
    //console.log(credentials);
    setLoading(true);
    const response =
      credentials.username && credentials.password
        ? await fetch(url, {
            signal: controller.signal,
            headers: {
              Authorization:
                "Basic " +
                btoa(credentials.username + ":" + credentials.password),
            },
          })
        : await fetch(url, {
            signal: controller.signal,
            //mode: "cors",
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
