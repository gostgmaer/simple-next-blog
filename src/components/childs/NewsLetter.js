const NewsLetter = () => {
  return (
    <section className="bg-grey-50  mt-20">
      <div className="container mx-auto md:px-20 py-12 text-center">
        <h3 className="font-bold text-3xl">Subscribe NewsLetter</h3>
      </div>
      <div className="py-4  flex items-center flex-col ">
        <input
          type="text"
          placeholder="Enter Your Email"
          className=" shadow border rounded w-9/12 py-3 m-auto px-3 text-gray-700 focus:shadow-inner "
        />
      </div>
      <button className="bg-orange-400 px-20 py-3  flex items-center flex-col  m-auto rounded-full text-gray-50 text-xl">Subscribe</button>
    </section>
  );
};

export default NewsLetter;
