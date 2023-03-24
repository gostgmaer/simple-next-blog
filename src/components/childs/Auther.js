import Image from "next/image";
import Link from "next/link";

const Auther = ({user}) => {
  return (
    <div className="auther flex py-5">
      <Image
        src={user?.img}
        width={50}
        height={60}
        alt=""
        className=" rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={'/'} className='font-bold text-lg text-gray-600'>{user?.name}</Link>
        <span className="text-sm text-gray-500">{user?.designation}</span>
      </div>
    </div>
  );
};

export default Auther;
