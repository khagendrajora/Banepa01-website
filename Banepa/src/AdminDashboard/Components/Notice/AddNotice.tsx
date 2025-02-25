import { ButtonLoader, convertToNepali } from "../../../Utils/ButtonLoader";
import { useNavigate } from "react-router";
import React from "react";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";
import ReactQuill from "react-quill";
import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import "nepali-datepicker-reactjs/dist/index.css";

export const AddNotice = () => {
  const editor = React.useRef(null);
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [image, setImage] = React.useState<File | null>();

  const [inputs, setInputs] = React.useState<{
    title_en: string;
    title_np: string;
    date: string;
    description_en: string;
    description_np: string;
  }>({
    title_en: "",
    title_np: "",
    date: "",
    description_en: "",
    description_np: "",
  });

  const HandleTitle = (title: string) => {
    const title_np = convertToNepali(title);
    setInputs({ ...inputs, title_np: title_np });
  };
  const handleChange = (html: string) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const traverseNodes = (node: ChildNode) => {
      if (node.nodeType === Node.TEXT_NODE) {
        node.textContent = convertToNepali(node.textContent || "");
      } else if (node.childNodes.length) {
        node.childNodes.forEach(traverseNodes);
      }
    };
    doc.body.childNodes.forEach(traverseNodes);
    setInputs({ ...inputs, description_np: doc.body.innerHTML });
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const config = React.useMemo(
    () => ({
      height: 400,
      toolbarSticky: false,
    }),
    []
  );

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButton(true);
    const formData = new FormData();
    formData.append("title_en", inputs.title_en);
    formData.append("title_np", inputs.title_np);
    formData.append("date", inputs.date);
    formData.append("description_en", inputs.description_en);
    formData.append("description_np", inputs.description_np);

    if (image) {
      formData.append(`image`, image);
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
          title_en: "",
          title_np: "",
          date: "",
          description_en: "",
          description_np: "",
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
        <div className="flex justify-center mx-auto ">
          <form
            onSubmit={add}
            className="flex w-full justify-center gap-20 flex-col mx-auto border md:p-10 p-2"
          >
            <div className="flex flex-col gap-16 ">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Add Notice
              </h1>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="title_en"
                  value={inputs.title_en}
                  onChange={(e) =>
                    setInputs({ ...inputs, title_en: e.target.value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Title
                </label>
              </div>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="title_np"
                  value={inputs.title_np}
                  onChange={(e) => HandleTitle(e.target.value)}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  शीर्षक
                </label>
              </div>

              <div className="flex flex-col gap-5 w-full pb-5 ">
                <label className="font-medium">Description</label>
                <JoditEditor
                  ref={editor}
                  value={inputs.description_en}
                  config={config}
                  onChange={(content) => {
                    setInputs({ ...inputs, description_en: content });
                  }}
                />
              </div>
              <div className="flex flex-col gap-5 w-full pb-5 ">
                <label className="font-medium">विवरण</label>
                <ReactQuill
                  value={inputs.description_np}
                  onChange={handleChange}
                />
              </div>

              <div className="relative z-10 w-full mb-5 group">
                <NepaliDatePicker
                  value={inputs.date}
                  onChange={(value: string) =>
                    setInputs({ ...inputs, date: value })
                  }
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Date
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="file"
                  name="image"
                  onChange={handleImageChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  "
                  placeholder=" "
                />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Image
                </label>
              </div>
            </div>
            <div className="flex justify-center  w-full ">
              <button className="text-white font-medium bg-blue-700 hover:bg-blue-800  text-lg w-full lg:w-1/4  p-3 text-center">
                Submit {isButton ? <ButtonLoader /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
