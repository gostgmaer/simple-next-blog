import Image from "next/image";
import Link from "next/link";

const Auther = () => {
  return (
    <div className="auther flex py-5">
      <Image
        src={"/assets/images/author/author1.jpg"}
        width={50}
        height={60}
        alt=""
        className=" rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={'/'} className='font-bold text-lg text-gray-600'>Kishor Sarkar</Link>
        <span className="text-sm text-gray-500">CEO, Founder</span>
      </div>
    </div>
  );
};

export default Auther;
