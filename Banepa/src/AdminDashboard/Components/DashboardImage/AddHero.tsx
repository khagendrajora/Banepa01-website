import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { ButtonLoader } from "../../../Utils/ButtonLoader";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AddHero = () => {
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [images, setImages] = React.useState<ImageListType>([]);
  const [inputs, setInputs] = React.useState<{
    imageTitle: string;
  }>({
    imageTitle: "",
  });

  const onImageGallaryChange = async (imageList: ImageListType) => {
    setImages(imageList);
  };
  const add = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButton(true);
    const formData = new FormData();
    formData.append("imageTitle", inputs.imageTitle);

    images.forEach((image) => {
      formData.append(`images`, image.file as File);
    });
    try {
      const res = await fetch("", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
      } else {
        toast.success(data.message);
        setInputs({
          imageTitle: "",
        });
        setImages([]);
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
      <div className="sm:ml-60 mt-20 sm:px-30 p-3">
        <div className="flex justify-center mx-auto md:w-1/2 w-full  ">
          <form
            onSubmit={add}
            className="flex w-full justify-center gap-10 flex-col mx-auto shadow-sm  border p-10"
          >
            <div className="">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Add Dashboard Images
              </h1>

              <div className="w-full flex flex-col gap-4 mb-5">
                <label className="text-xl font-semibold ">Image Title</label>
                <input
                  type="text"
                  name="imageTitle"
                  className="border border-black p-2"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="">
              <div className="flex">
                <ImageUploading
                  multiple
                  value={images}
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
                        Choose a photo
                      </button>
                      &nbsp;
                      {images.length > 0 ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            onImageRemoveAll();
                          }}
                          className="p-2 rounded-lg border"
                        >
                          Remove All
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
                </ImageUploading>
              </div>
            </div>
            <div>
              <button className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
                Submit {isButton ? <ButtonLoader /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
