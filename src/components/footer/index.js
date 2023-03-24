import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import NewsLetter from "../childs/NewsLetter";

const Footer = () => {

  const bg = {
    background: 'url("/assets/images/footer.png")',
    backgroundPosition: "right",
    backgroundRepeat: "no-repeat",
    
  };

  return (
    <footer className=" bg-gray-50 px-20" style={bg}>
    <NewsLetter/>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Facebook className=" cursor-pointer" />
            <Twitter className=" cursor-pointer" />
            <GitHub className=" cursor-pointer" />
          </div>
          <p className="py-5 text-center text-gey-400">Copyright C {new Date().getFullYear()} | Gost blog website of light</p>
          <p className="text-gey-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
