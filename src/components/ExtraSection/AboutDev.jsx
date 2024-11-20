import { Helmet } from "react-helmet";
import { FaGithub } from "react-icons/fa6";

const AboutDev = () => {
  return (
    <div className="bg-white py-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About || ToTo-coupon</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="px-4">
        <h1 className="text-center text-4xl md:text-5xl my-8 font-bold">
          About Developer
        </h1>
        <div className="pb-10 text-black ">
          <a
            className="flex gap-2 items-center justify-center text-center text-3xl font-semibold"
            href="https://github.com/sheikh-saiyam"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github Profile:{" "}
            <FaGithub className="text-4xl hover:text-gray-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
