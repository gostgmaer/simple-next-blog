import Link from "next/link"
import Image from "next/image";
import Auther from "./Auther";
const PostItem = () => {
  return (
    <div className="flex gap-5">
    <div className="image flex flex-col justify-start">
      <Link href={"/"}>
        <Image
          src={"/assets/images/img1.jpg"}
          alt=""
          className="rounded"
          width={"300"}
          height={"260"}
        />
      </Link>
    </div>
    <div className="info flex justify-center flex-col">
      <div className="category">
        <Link
          className=" text-orange-600 hover:text-orange-800 "
          href={"/cate"}
        >
          Business, Travel
        </Link>
        <Link className=" text-grey-600 hover:text-grey-800" href={"/cate"}>
          - March 18, 2023
        </Link>
      </div>
      <div className="title">
        <Link
          href={"/"}
          className=" text-xl font-bold text-gray-800 hover:text-gray-600"
        >
          You have been logged out due to inactivity.
        </Link>
      </div>
      <Auther />
    </div>
  </div>
  )
}

export default PostItem