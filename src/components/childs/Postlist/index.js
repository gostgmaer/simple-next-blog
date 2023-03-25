import { useFetcher } from "@/lib/fetcher";
import PostItem from "../PostItem";

const PostList = ({endpoint, title, cate }) => {

    const { data, isError, isLoading } = useFetcher(`${endpoint}`);


  return (
    <div className={`py-10 ${title.toLowerCase()}`}>
      <h2 className=" font-bold text-2xl py-12 text-start">{title}</h2>
      <div className="flex flex-col gap-6">
        {data?.map((item) => (
          <PostItem key={item.id} data={item} cate={cate} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
