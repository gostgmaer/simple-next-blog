//endpoint:api/post

import { baseURL } from "./setting";

export const getPost = async (endpoint, id) => {
  const res = await fetch(`${baseURL}${endpoint}`);
  const posts = await res.json();
  if (id) {
    return posts.find((item) => item.id == id);
  }
  return posts;
};
