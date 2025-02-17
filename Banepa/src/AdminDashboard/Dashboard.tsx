import {
  faBars,
  faBriefcase,
  faNewspaper,
  faNoteSticky,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ButtonLoader } from "../Utils/ButtonLoader";

export const Dashboard = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [side, setSide] = useState<boolean>(true);
  const [employeMenu, setEmployeeMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isButton, setIsButton] = useState<boolean>(false);

  const Logout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token Missing");
        return;
      }
      setIsButton(true);
      const res = await fetch(``, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success(data.message);
        console.log("logout successful");
        localStorage.removeItem("token");
        setTimeout(() => {
          setIsButton(false);
          navigate("/");
        }, 1000);
      }
    } catch (error: any) {
      toast.error(error);
    }
  };
  return (
    <>
      {isButton ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <ButtonLoader />
        </div>
      ) : (
        <>
          <div
            className={`fixed top-0 z-50 w-full p-3 shadow-md border-b border-gray-200 bg-white  `}
          >
            <div className="px-3  lg:px-5 lg:pl-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-start rtl:justify-end">
                  <FontAwesomeIcon
                    icon={faBars}
                    size="2xl"
                    className="inline-flex sm:hidden cursor-pointer items-center  text-sm text-gray-500 rounded-lg  hover:bg-gray-100  "
                    onClick={() => {
                      setSide(!side);
                    }}
                  />
                  <div
                    className="flex gap-2 items-center  px-4 cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    <img
                      src="/logo1.jpeg"
                      alt="logo"
                      className="w-[70px] h-auto"
                    />
                    <h1 className="text-xs flex justifu-center flex-col gap-3">
                      <img
                        src="/logoname.png"
                        className="w-[150px]  sm:h-[65x] "
                      />
                    </h1>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center ms-3 ">
                    <div>
                      <button className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
                        <img
                          className="w-8 h-8 rounded-full relative"
                          src="/Digisoftlogo.jpg"
                          alt="user photo"
                          onClick={() => {
                            setMenu(!menu);
                          }}
                        />

                        {menu && (
                          <div className="z-50 absolute px-5 my-4 right-1 top-10 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3">
                              <p className="text-sm text-gray-900 dark:text-white">
                                Profile
                              </p>
                            </div>
                            <ul className="py-1">
                              <li
                                className="block disabled px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={Logout}
                              >
                                Logout
                              </li>
                            </ul>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <aside
            className={`absolute  top-0 left-0 h-full w-60 z-10 bg[#2e3e4e]  transition-transform  ${
              side ? "-translate-x-full" : "translate-x-0"
            }  border-r  ${
              side ? "w-60" : "w-0"
            } border-gray-200 sm:translate-x-0 `}
          >
            <div className="h-full px-3 py-20 pb-4 overflow-y-auto bg-[#2e3e4e] text-white">
              <ul className="space-y-2 font-medium">
                <li>
                  <Link
                    to="/admin/dashboarddata"
                    className="flex items-center p-2  rounded-lg   group"
                  >
                    <svg
                      className="w-5 h-5  transition duration-75 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 21"
                    >
                      <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                      <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                    </svg>
                    <span className="ms-3">Dashboard</span>
                  </Link>
                </li>
                <p className="py-2">Site Data</p>
                <li>
                  <Link
                    to="/admin/dashboardImage"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <svg
                      className="shrink-0 w-5 h-5  transition duration-75 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 18 18"
                    >
                      <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                    </svg>
                    <span className="flex-1 ms-3">ड्यासबोर्ड छवि</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/intro"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <svg
                      className="shrink-0 w-5 h-5  transition duration-75 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">परिचय</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/publications"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <svg
                      className="shrink-0 w-5 h-5  transition duration-75 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      प्रकाशन
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/notice"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <FontAwesomeIcon icon={faNoteSticky} />
                    <span className="flex-1 ms-3 whitespace-nowrap">सूचना</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/works"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <FontAwesomeIcon icon={faBriefcase} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      हाम्रो काम
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/admin/newslist"
                    className="flex items-center p-2 rounded-lg group"
                  >
                    <FontAwesomeIcon icon={faNewspaper} />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      समाचार
                    </span>
                  </Link>
                </li>
                <li className=" p-2 rounded-lg group">
                  <FontAwesomeIcon icon={faNewspaper} />
                  <span
                    className="flex-1 ms-3 whitespace-nowrap cursor-pointer"
                    onClick={() => setEmployeeMenu(!employeMenu)}
                  >
                    कर्मचारीहरू
                  </span>
                  {employeMenu && (
                    <ul className="flex justify-end flex-col items-start px-10 p-5 gap-3">
                      <li>
                        <Link to="/admin/boardmembers">जन&nbsp;प्रतिनिधि</Link>
                      </li>

                      <li>
                        <Link to="/admin/employes">कर्मचारी</Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </aside>
        </>
      )}
    </>
  );
};
