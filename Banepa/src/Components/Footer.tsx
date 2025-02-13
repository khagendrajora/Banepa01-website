import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const Footer = () => {
  const offsetTop = 0;
  return (
    <>
      <div className=" bg-[#245fb9] w-full relative flex flex-col font-poppin  justify-center items-center text-white  min-h-[280px]">
        <div className="bg-[url('/footer4.jpg')]  absolute inset-0 bg-cover bg-center opacity-15 z-0 pointer-events-none"></div>
        <div className="flex relative z-10 flex-wrap lg:justify-center justify-between gap-3 md:gap-10 lg:gap-20 2xl:gap-40 items-start p-10 w-full">
          <div className="flex flex-col text-white  text-start   bg-blue- opacity-90">
            <h1 className="font-bold text-xl">ठेगाना</h1>
            <hr className="w-[100px]" />
            <div className="flex flex-col py-5 text-sm">
              <h1>बनेपा नगरपालिका-१, बागमती, नेपाल </h1>
            </div>
          </div>
          <div className="flex flex-col text-white  text-start   bg-blue- opacity-90">
            <h1 className="font-bold text-xl">सम्पर्क</h1>
            <hr className="w-[100px]" />
            <div className="flex flex-col py-5 text-sm">
              <h1>
                ‌‌+९७७-५६-५९७००४<br></br>
                ०५६-५११४६७{" "}
              </h1>
            </div>
          </div>
          <div className="flex flex-col text-white  text-start gap-3  bg-blue- opacity-90">
            <h1 className="font-bold text-xl">
              <h1>इमेल</h1>
              <hr />
              <div className="py-5">
                <span className="text-sm"> info@banepa12.org</span>
              </div>
            </h1>
          </div>

          <div className="flex flex-col text-white  text-start gap-3  bg-blue- opacity-90">
            <h1 className="font-bold text-xl">
              <h1 className="">सामाजिक सञ्जाल</h1>
              <hr />

              <div className="items-center py-5 lg:text-lg flex gap-4">
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ color: "#1996f5" }}
                  size="lg"
                  className="bg-white p-1 hover:scale-110 cursor-pointer rounded-full"
                />
                <FontAwesomeIcon
                  icon={faYoutube}
                  size="lg"
                  className="bg-white p-1 rounded-full hover:scale-110 cursor-pointer"
                  style={{ color: "#ff0505" }}
                />
                <FontAwesomeIcon
                  icon={faXTwitter}
                  size="lg"
                  className="bg-white p-1 rounded-full hover:scale-110 cursor-pointer"
                  style={{ color: "#0a0a0a" }}
                />
              </div>
            </h1>
          </div>
        </div>
        <div>
          <ul className="list-none h-fit text-xs  lg:text-sm flex w-full justify-start gap-4 text-white md:gap-10 font-semibold">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                });
              }}
            >
              <li className="hover:text-black cursor-pointer">गृहपृष्ठ</li>
            </Link>

            <Link
              to="/aboutus"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">
                हाम्रो&nbsp;बारेमा
              </li>
            </Link>
            <Link
              to="/workdone"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">
                {" "}
                हाम्रो&nbsp;काम
              </li>
            </Link>
            <Link
              to="/news"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">समाचार</li>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">सम्पर्क</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="text-sm bg-blue-500 text-white  p-1 w-full text-center">
        Copyright © २०८१ भरतपुर नगरपालिका वडा नं १२ Website by DigiSoft
        Developers
      </div>
    </>
  );
};
