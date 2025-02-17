import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";
import { ImageURl } from "../../../Utils/ButtonLoader";

export interface IMembers extends Document {
  id?: string;
  name_en: string;
  name_np: string;
  designation_en: string;
  designation_np: string;
  phone: string;
  category: string;
  image: string;
}

export const BoardMembers = () => {
  const [members, setMembers] = useState<IMembers[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(``);
        if (res.status === 200 && res.data) {
          const data = res.data;
          const filterData = data.filter(
            (item: { category: string }) => item.category === "Board Member"
          );

          setMembers(filterData);
        } else {
          console.log("Error:", res.data.error || "No data available");
          toast.error("Error: No data available");
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  console.log(members);

  const Delete = async (id: string | undefined) => {
    try {
      const confirmed = window.confirm("Delete ?");
      if (confirmed) {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Token Missing");
          return;
        }
        // setIsButton(id || "");
        const response = await axios.delete(``, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;
        if (data.message) {
          toast.error(data.message);
        } else {
          setMembers((prev) => prev?.filter((v) => v.id !== id));
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="sm:ml-60 mt-20 sm:px-30 p-5">
      <h1 className="font-bold text-2xl pb-10">जन&nbsp;प्रतिनिधि</h1>
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
            to="/admin/addboardmember"
            className="bg-[#245fb9] hover:bg-blue-600 px-3 p-2 rounded-lg text-white font-semibold"
          >
            नयाँ थप्नुहोस्
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto text-center shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-center  border text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 py-3">
                <span>ID</span>
              </th>
              <th scope="col" className="px-3 py-3">
                Image
              </th>
              <th scope="col" className="px-3 py-3">
                Name
              </th>
              <th scope="col" className="px-3 py-3">
                Post
              </th>
              <th scope="col" className="px-3 py-3">
                Phone Number
              </th>

              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {members &&
              members.map((data, key) => (
                <tr
                  key={key}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className=" py-4   font-semibold text-gray-900 dark:text-white">
                    {data.id}
                  </td>
                  <td className="p-4 ">
                    <img
                      src={`${ImageURl}/${data.image}`}
                      className="w-16 md:w-32 max-w-full mx-auto max-h-full"
                      alt="Image"
                    />
                  </td>
                  <td className="  py-4 font-semibold text-gray-900 dark:text-white">
                    <div>{data.name_en}</div>
                    <br />
                    <div>{data.name_np}</div>
                  </td>

                  <td className="py-4 font-semibold px-3  text-gray-900 dark:text-white">
                    <div>{data.designation_en}</div>
                    <br />
                    <div>{data.designation_np}</div>
                  </td>

                  <td className="">{data.phone}</td>
                  <td className="">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="text-blue-600 hover:text-blue-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                    />

                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      className="text-green-600 hover:text-green-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                      onClick={() => navigate(`/admin/updatebod/${data.id}`)}
                    />

                    <FontAwesomeIcon
                      icon={faTrash}
                      className="text-red-600 hover:text-red-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                      onClick={() => Delete(data.id)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
