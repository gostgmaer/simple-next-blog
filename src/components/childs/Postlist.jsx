import Link from "next/link"
import Image from "next/image";
import Auther from "./Auther";
const PostItem = ({data,cate}) => {
  return (
    <div className="flex gap-5">
    <div className="image flex flex-col justify-start">
      <Link href={`/post/${data.id}`}>
        <Image
          src={data?.img}
          alt=""
          className="rounded"
          width={"300"}
          height={"260"}
        />
      </Link>
    </div>
    <div className="info flex justify-center flex-col">
      <div className="category">
      {cate ?<></> : <Link
          className=" text-orange-600 hover:text-orange-800 "
          href={"/cate"}
        >
          {data?.category}
        </Link>}
        <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
          - {data?.published}
        </Link>
      </div>
      <div className="title">
        <Link
          href={`/post/${data.id}`}
          className=" text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          {data?.title}
        </Link>
      </div>
      <Auther user={data.author} />
    </div>
  </div>
  )
}

export default PostItem