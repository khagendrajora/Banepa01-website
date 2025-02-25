import {
  faBars,
  faChevronDown,
  faEnvelope,
  faLocationDot,
  faPhone,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { LanguageSelector } from "../LanguageSelector";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [aboutUsMenu, setAboutUsMenu] = useState(false);
  const [newsMenu, setNewsMenu] = useState(false);
  const [publication, setPublication] = useState(false);
  const [aboutUsMenuSmall, setAboutUsMenuSmall] = useState(false);
  const [newsMenuSmall, setNewsMenuSmall] = useState(false);
  const [publicationSmall, setPublicationSmall] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const isActive = (path: string) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  const works = () => {
    const work = document.getElementById("works");
    if (work) {
      window.scrollTo({
        top: work.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const moveUp = () => {
    const move = document.getElementById("nav");
    if (move) {
      window.scrollTo({
        top: move.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div
        className={`flex w-full fixed z-50 justify-between shadow-lg bg-white`}
        id="nav"
      >
        <div
          className="flex gap-2 items-center p-2 px-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/logo1.jpeg"
            alt="logo"
            className="w-[100px] sm:min-w-[150px]  h-auto"
          />
          <h1 className="text-xs flex justifu-center flex-col gap-3">
            <img
              src="/logoname.png"
              className="sm:w-[250px]  sm:h-[65x] w-[200px] h-[50px]"
            />
          </h1>
        </div>
        <div className="lg:flex flex-col hidden w-full ">
          <div className="bg-[#245fb9] flex justify-between p-3 text-white w-full">
            <div className="flex  ">
              <h1 className="md:text-sm text-xs min-w-[160px] flex items-center ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  size="lg"
                  className="me-1 hover:scale-105 cursor-pointer text-red-500"
                />
                {t("navbar.name")}
              </h1>
              <div className="md:text-sm text-xs flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  className="me-1 hover:scale-105 cursor-pointer flex my-auto text-red-500"
                />
                info@banepa1.org
              </div>
            </div>
            <div className="flex w-full justify-end text-black">
              <LanguageSelector />
            </div>
          </div>
          <div className="w-full p-3 flex gap-4 justify-between">
            <ul className="list-none text-xs lg:text-sm p-2 flex w-full gap-5 text-slate-500 md:gap-4 xl:gap-10 items-center font-semibold">
              <Link
                to="/"
                className={`hover:text-black cursor-pointer ${
                  isActive("/") ? "text-black" : ""
                }`}
              >
                <li onClick={() => moveUp()}>{t("navbar.key1")}</li>
              </Link>
              <li
                className={`hover:text-black min-w-[58px] cursor-pointer relative ${
                  isActive("/aboutus") ||
                  isActive("/toleintro") ||
                  isActive("/wardintro")
                    ? "text-black"
                    : ""
                }`}
                onMouseEnter={() => setAboutUsMenu(true)}
                onMouseLeave={() => setAboutUsMenu(false)}
                onClick={() => setAboutUsMenu(true)}
              >
                {t("navbar.key2.key")}
                {aboutUsMenu && (
                  <div
                    className="bg-white z-10 absolute text-sm w-[200px] text-slate-600"
                    onMouseEnter={() => setAboutUsMenu(true)}
                    onMouseLeave={() => setAboutUsMenu(false)}
                  >
                    <ul className="flex flex-col pt-5 ">
                      <Link to="/aboutus" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer  ">
                          {t("navbar.key2.subKey.key1")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="/wardintro" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer ">
                          {" "}
                          {t("navbar.key2.subKey.key2")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="/teams" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer ">
                          {" "}
                          {t("navbar.key2.subKey.key3")}
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <Link
                to=""
                className="hover:text-black min-w-[62px] cursor-pointer"
                onClick={() => {
                  works();
                }}
              >
                <li>{t("navbar.key3")}</li>
              </Link>
              <li
                className={`hover:text-black cursor-pointer relative ${
                  isActive("/publication") ? "text-black" : ""
                }`}
                onMouseEnter={() => setPublication(true)}
                onMouseLeave={() => setPublication(false)}
                onClick={() => setPublication(!publication)}
              >
                {t("navbar.key4.key")}
                {publication && (
                  <div
                    className="bg-white z-10  absolute text-sm w-[200px] text-slate-600"
                    onMouseEnter={() => setPublication(true)}
                    onMouseLeave={() => setPublication(false)}
                  >
                    <ul className="flex flex-col pt-5">
                      <Link to="/publication" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer ">
                          {t("navbar.key4.subKey.key1")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer">
                          {t("navbar.key4.subKey.key2")}
                        </li>
                      </Link>
                      <hr />
                    </ul>
                  </div>
                )}
              </li>
              <li
                className={`hover:text-black cursor-pointer relative ${
                  isActive("/notices") ||
                  isActive("/news") ||
                  isActive("/photoes") ||
                  isActive("/videos")
                    ? "text-black"
                    : ""
                }`}
                onMouseEnter={() => setNewsMenu(true)}
                onMouseLeave={() => setNewsMenu(false)}
                onClick={() => setNewsMenu(!aboutUsMenu)}
              >
                {t("navbar.key5.key")}
                {newsMenu && (
                  <div
                    className="bg-white z-10  absolute text-sm w-[200px] text-slate-600"
                    onMouseEnter={() => setNewsMenu(true)}
                    onMouseLeave={() => setNewsMenu(false)}
                  >
                    <ul className="flex flex-col pt-5">
                      <Link to="/notices" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer ">
                          {t("navbar.key5.subKey.key1")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="/newsPage" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer">
                          {t("navbar.key5.subKey.key2")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer">
                          {t("navbar.key5.subKey.key3")}
                        </li>
                      </Link>
                      <hr />
                      <Link to="/videos" className="hover:bg-gray-100 p-3">
                        <li className="cursor-pointer">
                          {t("navbar.key5.subKey.key4")}
                        </li>
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link to="/contact" className="hover:text-black cursor-pointer">
                  {t("navbar.key6")}
                </Link>
              </li>

              <button>
                <Link
                  to=""
                  target="_blank"
                  className="hover:bg-red-600 px-4 cursor-pointer text-white font-bold text-md bg-red-500  p-2 rounded-full"
                >
                  {t("navbar.key7")}
                </Link>
              </button>
            </ul>
            <div className="flex  items-center  me-1">
              <h1 className="md:text-sm text-xs flex flex-row items-center h-fit">
                <FontAwesomeIcon
                  icon={faPhone}
                  shake
                  className="me-1 hover:scale-105 cursor-pointer text-red-600"
                />
                &nbsp;{t("navbar.contact.key")}:&nbsp;
                {t("navbar.contact.subKey.key1")}
              </h1>
            </div>
          </div>
        </div>
        {isMenu && (
          <div
            className={` absolute lg:hidden  bg-blue-500 ps-8 p-2 w-1/3 min-w-[200px]  z-10 top-[1px] left-0 t transition-all overflow-hidden duration-5000 ease-linear ${
              isMenu ? "w-1/3 min-w-[200px]" : "w-0"
            }`}
          >
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faXmark}
                size="xl"
                className="cursor-pointer"
                style={{ color: "#fafcff" }}
                onClick={() => setIsMenu(!isMenu)}
              />
            </div>
            <ul className="list-none h-screen text-xl  mt-10 flex w-full flex-col gap-5 text-white md:gap-10 font-semibold">
              <Link to="/" className="hover:text-black cursor-pointer">
                गृहपृष्ठ
              </Link>
              <li
                className="hover:text-black cursor-pointer flex justify-between  items-center "
                onClick={() => setAboutUsMenuSmall(!aboutUsMenuSmall)}
              >
                हाम्रो&nbsp;बारेमा
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ color: "#ebecf0" }}
                />
              </li>
              <li className={`${aboutUsMenuSmall ? "block" : "hidden"}`}>
                {aboutUsMenuSmall && (
                  <div className="text-white text-sm text-center">
                    <ul className="flex flex-col gap-4 ">
                      <Link
                        to="/aboutus"
                        className="cursor-pointer hover:text-black"
                      >
                        परिचय
                      </Link>
                      <Link
                        to="/wardintro"
                        className="cursor-pointer hover:text-black"
                      >
                        वडाको&nbsp;विवरण
                      </Link>
                      <Link
                        to="/toleintro"
                        className="cursor-pointer hover:text-black"
                      >
                        टाेली
                      </Link>
                    </ul>
                  </div>
                )}
              </li>

              <Link to="/workdone" className="hover:text-black cursor-pointer">
                {" "}
                हाम्रो&nbsp;काम
              </Link>

              <li
                className="hover:text-black cursor-pointer flex justify-between items-center"
                onClick={() => setPublicationSmall(!newsMenuSmall)}
              >
                स्रोत
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="t"
                  style={{ color: "#ebecf0" }}
                />
              </li>
              <li className={`${publicationSmall ? "block" : "hidden"}`}>
                {publicationSmall && (
                  <div className="text-white text-sm text-center">
                    <ul className="flex flex-col gap-4">
                      <Link
                        to="/publication"
                        className="cursor-pointer hover:text-black"
                      >
                        प्रकाशन
                      </Link>

                      <Link to="" className="cursor-pointer hover:text-black">
                        प्रतिवेदन
                      </Link>
                    </ul>
                  </div>
                )}
              </li>

              <li
                className="hover:text-black cursor-pointer flex justify-between items-center"
                onClick={() => setNewsMenuSmall(!newsMenuSmall)}
              >
                अपडेट
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="t"
                  style={{ color: "#ebecf0" }}
                />
              </li>
              <li className={`${newsMenuSmall ? "block" : "hidden"}`}>
                {newsMenuSmall && (
                  <div className="text-white text-sm text-center">
                    <ul className="flex flex-col gap-4">
                      <Link
                        to="/notices"
                        className="cursor-pointer hover:text-black"
                      >
                        सूचना
                      </Link>

                      <Link
                        to="/news"
                        className="cursor-pointer hover:text-black"
                      >
                        समाचार
                      </Link>
                      <Link to="" className="cursor-pointer hover:text-black">
                        फोटो
                      </Link>
                      <Link to="" className="cursor-pointer hover:text-black">
                        भिडियो
                      </Link>
                    </ul>
                  </div>
                )}
              </li>
              <Link to="/contact" className="hover:text-black cursor-pointer">
                सम्पर्क
              </Link>
              {/* <li>
                <Link
                  to="/adminlogin"
                  className="hover:text-black cursor-pointer"
                >
                  Login
                </Link>
              </li> */}
            </ul>
          </div>
        )}

        <div className="lg:hidden p-[1px] pr-4 flex items-center cursor-pointer">
          <div onClick={() => setIsMenu(!isMenu)}>
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#005eff" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
