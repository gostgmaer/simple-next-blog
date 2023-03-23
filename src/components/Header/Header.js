import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <span className="font-bold uppercase text-3xl">Gost Blog</span>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Facebook className=" cursor-pointer" />
            <Twitter className=" cursor-pointer" />
            <GitHub className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
