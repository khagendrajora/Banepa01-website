import React from "react";
import { useNavigate } from "react-router";
import { ButtonLoader, convertToNepali } from "../../../Utils/ButtonLoader";
import { toast } from "react-toastify";

export const AddBod = () => {
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [image, setImage] = React.useState<File | null>(null);
  const [inputs, setInputs] = React.useState<{
    name_en: string;
    name_np: string;
    designation_en: string;
    designation_np: string;
    phone: string;
    category: string;
  }>({
    name_en: "",
    name_np: "",
    designation_en: "",
    designation_np: "",
    phone: "",
    category: "",
  });

  const HandleTitle = (title: string) => {
    const name_np = convertToNepali(title);
    setInputs({ ...inputs, name_np: name_np });
  };
  const HandlePosition = (title: string) => {
    const designation_np = convertToNepali(title);
    setInputs({ ...inputs, designation_np: designation_np });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };
  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButton(true);
    const formData = new FormData();
    formData.append("name_en", inputs.name_en);
    formData.append("name_np", inputs.name_np);
    formData.append("phone", inputs.phone);
    formData.append("designation_en", inputs.designation_en);
    formData.append("designation_np", inputs.designation_np);
    formData.append("category", inputs.category);
    if (image) {
      formData.append("image", image);
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token Missing");
        return;
      }
      const res = await fetch("", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },

        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success(data.message);
        setImage(null);
        setInputs({
          name_en: "",
          name_np: "",
          designation_en: "",
          designation_np: "",
          phone: "",
          category: "",
        });
        setTimeout(() => {
          navigate(-1);
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setIsButton(false);
    }
  };

  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-3 md:p-5">
        <div className="flex justify-center mx-auto">
          <form
            onSubmit={add}
            className="flex w-full justify-center gap-20 flex-col mx-auto border md:p-10 p-2"
          >
            <div className="flex flex-col gap-10 ">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Add Board Member
              </h1>
              <div className="flex flex-wrap gap-5 md:gap-10 ">
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="name_en"
                    value={inputs.name_en}
                    onChange={(e) =>
                      setInputs({ ...inputs, name_en: e.target.value })
                    }
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500k dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Name
                  </label>
                </div>
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="name_np"
                    value={inputs.name_np}
                    onChange={(e) => HandleTitle(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    नाम
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 md:gap-10 ">
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="designation_en"
                    value={inputs.designation_en}
                    onChange={(e) =>
                      setInputs({ ...inputs, designation_en: e.target.value })
                    }
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Position
                  </label>
                </div>

                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="desigination_np"
                    value={inputs.designation_np}
                    onChange={(e) => HandlePosition(e.target.value)}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    पद
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap gap-5 md:gap-10 ">
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <select
                    name="category"
                    value={inputs.category}
                    onChange={(e) =>
                      setInputs({ ...inputs, category: e.target.value })
                    }
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  >
                    <option value="" disabled>
                      Choose Category
                    </option>
                    <option>Board Member</option>
                  </select>
                </div>

                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) =>
                      setInputs({ ...inputs, phone: e.target.value })
                    }
                    id="floating_first_name"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Phone
                  </label>
                </div>
              </div>
              <div className="relative z-0 w-full md:w-5/6 mb-5 group">
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image
                </label>
              </div>
            </div>

            <div>
              <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Submit {isButton ? <ButtonLoader /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
