import React from "react";
import ReactImageUploading, { ImageListType } from "react-images-uploading";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ButtonLoader, convertToNepali } from "../../../Utils/ButtonLoader";
import JoditEditor from "jodit-react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const AddIntro = () => {
  const editor = React.useRef(null);
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [slider_images, setImages] = React.useState<ImageListType>([]);
  const [feature_image, setFeatureImage] = React.useState<File | null>();
  const [main_image, setMainImage] = React.useState<File | null>();
  const [inputs, setInputs] = React.useState<{
    title_en: string;
    title_np: string;
    description_en: string;
    description_np: string;
  }>({
    title_en: "",
    title_np: "",
    description_en: "",
    description_np: "",
  });

  const config = React.useMemo(
    () => ({
      height: 400,
      toolbarSticky: false,
    }),
    []
  );

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

  const onImageGallaryChange = async (imageList: ImageListType) => {
    setImages(imageList);
  };
  const handleFeatureImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setFeatureImage(file);
    }
  };
  const handleMainImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setMainImage(file);
    }
  };

  const add = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButton(true);
    const formData = new FormData();
    formData.append("title_en", inputs.title_en);
    formData.append("title_np", inputs.title_np);
    formData.append("description_np", inputs.description_np);
    formData.append("description_en", inputs.description_en);

    if (main_image) {
      formData.append(`main_image`, main_image);
    }
    if (feature_image) {
      formData.append(`feature_image`, feature_image);
    }
    slider_images.forEach((image) => {
      formData.append(`slider_images`, image.file as File);
    });
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
      } else {
        toast.success(data.message);
        setInputs({
          title_en: "",
          title_np: "",
          description_en: "",
          description_np: "",
        });
        setImages([]);
        setFeatureImage(null);
        setMainImage(null);
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
            className="flex w-full justify-center gap-20 flex-col mx-auto shadow-lg border p-2 md:p-10"
          >
            <div className="flex flex-col gap-16 ">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Add Introduction
              </h1>

              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  value={inputs.title_en}
                  onChange={(e) =>
                    setInputs({ ...inputs, title_en: e.target.value })
                  }
                  name="title_en"
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
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="feature_image"
                onChange={handleFeatureImageChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  "
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Feature Image
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="file"
                name="main_image"
                onChange={handleMainImageChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  "
                placeholder=" "
              />
              <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Main Image
              </label>
            </div>
            <div className="flex gap-1">
              <div className="flex">
                <ReactImageUploading
                  multiple
                  value={slider_images}
                  onChange={onImageGallaryChange}
                  maxNumber={1000}
                  dataURLKey="data_url"
                >
                  {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageRemove,
                    isDragging,
                    dragProps,
                  }: {
                    imageList: ImageListType;
                    onImageUpload: () => void;
                    onImageRemoveAll: () => void;
                    onImageRemove: (index: number) => void;
                    isDragging: boolean;
                    dragProps: React.HTMLAttributes<HTMLDivElement>;
                  }) => (
                    <div {...dragProps} className="upload__image-wrapper">
                      <button
                        style={isDragging ? { color: "red" } : undefined}
                        onClick={(e) => {
                          e.preventDefault();
                          onImageUpload();
                        }}
                        className="p-2 border border-gray-600 rounded-lg mb-2 items-center"
                      >
                        Add Images
                      </button>
                      &nbsp;
                      {slider_images.length > 0 ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            onImageRemoveAll();
                          }}
                          className="p-2 rounded-lg border"
                        >
                          Remove
                        </button>
                      ) : (
                        ""
                      )}
                      <div className="flex flex-row flex-wrap gap-7 mt-5">
                        {imageList.map((image, index) => (
                          <div
                            key={index}
                            className="image-item flex flex-row w-fit"
                          >
                            <div>
                              <img src={image.data_url} alt="" width="100" />
                              <div className="image-item__btn-wrapper flex gap-x-3">
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    onImageRemove(index);
                                  }}
                                  className="bg-red-600 mt-1 text-xs p-1 rounded-md"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </ReactImageUploading>
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
