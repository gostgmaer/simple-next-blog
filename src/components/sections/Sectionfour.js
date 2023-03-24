import Link from "next/link"
import Image from "next/image";
const Sectionfour = () => {
  return (
    <section className="py-16 container mx-auto md:px-20">
        <div className="grid lg:grid-cols-2">
            <div className="item">
            <h2 className=" font-bold text-4xl py-12 text-center">Business</h2>
            <div className="flex flex-col gap-6">

            </div>
            </div>
            <div className="item"></div>
        </div>
    </section>
  )
}

export default Sectionfour




const Post = (params) => {
    return <div className="flex gap-5">
    <div className="image flex flex-col justify-start">
    <Link href={"/"}>
          <Image
            src={"/assets/images/img1.jpg"}
            alt=""
            className="rounded"
            width={"320"}
            height={"275"}
          />
        </Link>
    </div>
    </div>
}