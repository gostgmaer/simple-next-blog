import { posts } from "../data";

// api/trending
export default function handler(req, res) {
  if (posts.Posts) return res.status(200).json(posts.Posts);
  return res.status(404).json({ error: "Data Not Found" });
}
