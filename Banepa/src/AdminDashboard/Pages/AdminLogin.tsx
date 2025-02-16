import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { adminLogin } from "../../Validation/Validation";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { ButtonLoader } from "../../Utils/ButtonLoader";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const [isButton, setIsButton] = useState<boolean>(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: adminLogin,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsButton(true);
        const res = await fetch(`https://bharatpur12.org/new/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          toast.error(data.error);
          setIsButton(false);
        } else {
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            const token = localStorage.getItem("token");
            if (token) {
              setIsButton(false);
              navigate("/admin/dashboarddata");
            } else {
              console.log("token failed");
            }
          }, 2000);
          resetForm();
        }
      } catch (error: any) {
        toast.error("Serer Error 500");
      } finally {
        setIsButton(false);
      }
    },
  });

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="flex flex-col items-center p-10 justify-center h-screen  ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-5 border shadow-xl p-10 md:p-20 rounded-md "
        >
          <div
            className="flex gap-5 items-center flex-col  px-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/logo1.jpeg" alt="logo" className="w-[200px] h-auto" />
            <h1 className="text-xs flex justifu-center flex-col gap-3">
              <img src="/logoname.png" className="w-[200px]  " />
            </h1>
          </div>
          <div>
            <input
              type="text"
              name="email"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              placeholder="Admin Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              placeholder="Password"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-xl w-full"
            >
              Login {isButton ? <ButtonLoader /> : ""}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
