import axios from "axios";
import { apiUrl } from "./setting";

const baseURL = apiUrl;
// const Authorization = {
//   Authorization: `${BEARER} ${token}`,
// };

export const invokeExternalAPI = async (
  endpoint,
  method,
  body,
  header,
  query
) => {
  const options = {
    method: method,
    url: baseURL + endpoint,
    headers: { },
    params: query,
    data: body,
  };


  if (method === "get") {
    delete options.body;
  }

  let data = null;
  let error = null;


  try {
    const res = await axios(options);
    data = res.data;
    // const res = fetch(u)
  } catch (e) {
    if (e?.response?.statusText !== "") {
      error = e?.response?.statusText;
    }
    error = e.message;
  }

  return { data, error };
};
