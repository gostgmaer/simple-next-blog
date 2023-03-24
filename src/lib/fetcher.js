import useSWR from "swr";
import { baseURL } from "./setting";

// @ts-ignore
export const response = (...args) => fetch(...args).then((res) => res.json());

export function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(`${baseURL}${endpoint}`, response);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
