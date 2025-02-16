import { Link } from "react-router";
import { ImageURl } from "../../../Utils/ButtonLoader";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export interface ISlider extends Document {
  id?: string;
  title: string;
  image: string;
}

export const DashboardImage = () => {
  const [info, setInfo] = useState<ISlider[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://bharatpur12.org/new/api/slider-images`
        );
        const data = await res.json();
        if (!res.ok) {
          console.log(data.error);
        } else {
          setInfo(data);
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-5">
        <div className="pb-4 bg-white flex justify-between flex-wrap gap-10 dark:bg-gray-900">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block  ps-10 p-2 text-sm text-gray-900  rounded-lg w-80 bg-gray-50   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
              placeholder="Search for items"
            />
          </div>
          <div>
            <Link
              to="/admin/addhero"
              className="bg-[#245fb9] hover:bg-blue-600 px-3 p-2 rounded-lg text-white font-semibold"
            >
              नयाँ&nbsp;थप्नुहोस्
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto  shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left  border  text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Image Title
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {info &&
                info.map((item) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="p-4">
                      <img
                        src={`${ImageURl}/${item.image}`}
                        className="w-16 md:w-32 max-w-full max-h-full"
                        alt="Apple Watch"
                      />
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Apple Watch
                    </td>

                    <td className="px-6 py-4">
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
