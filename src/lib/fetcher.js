import axios from "axios";
import useSWR from "swr";
import { baseURL } from "./setting";

// @ts-ignore
export const response = (...args) => fetch(...args).then((res) => res.json());
const fetcher = (...args) => axios(...args).then((res) => res.data);

export function useFetcher(endpoint) {
  const { data, error, isLoading } = useSWR(`${baseURL}${endpoint}`, fetcher);

  return {
    data: data,
    isLoading,
    isError: error,
  };
}
