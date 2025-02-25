import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ButtonLoader } from "../../Utils/ButtonLoader";

export const ComplainPage = () => {
  const [isButton, setIsButton] = React.useState(false);
  const [inputs, setInputs] = React.useState<{
    name: string;
    address: string;
    contact: string;
    complain: string;
    complain_title: string;
    complain_to: string;
  }>({
    name: "",
    address: "",
    contact: "",
    complain: "",
    complain_title: "",
    complain_to: "",
  });
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);

  const add = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsButton(true);
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("address", inputs.address);
    formData.append("contact", inputs.contact);
    formData.append("complain", inputs.complain);
    formData.append("complain_to", inputs.complain_to);
    formData.append("complain_title", inputs.complain_title);

    try {
      // const token = localStorage.getItem("token");
      // if (!token) {
      //   toast.error("Token Missing");
      //   return;
      // }
      const res = await fetch(
        "https://bharatpur12.org/new/api/create/complaints",
        {
          method: "POST",
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
          body: formData,
        }
      );
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        toast.error(data.errors);
      } else {
        toast.success(data.message);
        setInputs({
          name: "",
          address: "",
          contact: "",
          complain: "",
          complain_title: "",
          complain_to: "",
        });
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setIsButton(false);
    }
  };
  return (
    <>
      <div className="w-full font-poppin">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            उजुरी
          </h1>
        </div>

        <h1 className="w-full text-3xl underline 2xl:text-5xl text-center py-20">
          {" "}
          उजुरी पेश गर्नको लागि तल दिएको विवरणभरि आफ्नो उजुरी पेश गर्नुहोस्।
        </h1>
        <div className="flex flex-row w-11/12 lg:w-1/2 2xl:w-1/3 rounded-xl my-10 flex-wrap justify-center mx-auto border p-10  ">
          {/* <div className="p-2 xl:p-5 lg:w-1/2  w-full flex flex-col gap-5"> */}
          <form onSubmit={add} className="w-full flex flex-col gap-10">
            <div className="z-0 w-full  mb-5 group">
              <label className="text-xl font-bold">उजुरी गर्ने को नाम</label>
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
                className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>
            <div className="z-0 w-full mb-5 group">
              <label className="text-xl font-bold">उजरी गर्ने को ठेगाना</label>
              <input
                type="text"
                name="address"
                value={inputs.address}
                onChange={(e) =>
                  setInputs({ ...inputs, address: e.target.value })
                }
                className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>
            <div className="z-0 w-full mb-5 group">
              <label className="text-xl font-bold">
                उजुरी गर्ने को सम्पर्क नम्बर
              </label>
              <input
                type="text"
                name="contact"
                value={inputs.contact}
                onChange={(e) =>
                  setInputs({ ...inputs, contact: e.target.value })
                }
                className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>

            <div className=" z-0 w-full mb-5 group">
              <label className="text-xl font-bold">उजुरीको विषय</label>
              <input
                type="text"
                name="complain"
                value={inputs.complain_title}
                onChange={(e) =>
                  setInputs({ ...inputs, complain_title: e.target.value })
                }
                className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>

            <div className=" z-0 w-full mb-5 group">
              <label className="text-xl font-bold">उजुरी को संक्षिप्त</label>
              <textarea
                name="complain_title"
                value={inputs.complain}
                onChange={(e) =>
                  setInputs({ ...inputs, complain: e.target.value })
                }
                className="block text-lg py-2.5 px-0 w-full  text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>

            <div className="z-0 w-full mb-5 group">
              <label className="text-xl font-bold">
                उजुरी पर्ने व्यक्ति वा सांगस्ता को नाम
              </label>
              <input
                type="text"
                name="complain_to"
                value={inputs.complain_to}
                onChange={(e) =>
                  setInputs({ ...inputs, complain_to: e.target.value })
                }
                className="block py-2.5 px-0 w-full text-sm text-black border-0 border-b-2 border-gray-300  dark:border-gray-600 focus:outline-none "
                placeholder=" "
                required
              />
            </div>

            <button className="text-white text-xl bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              पेश गर्नुहोस् {isButton ? <ButtonLoader /> : ""}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
