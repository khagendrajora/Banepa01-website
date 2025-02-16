import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  return (
    <>
      <div className="w-full bg-[#f2f2f2]">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 font-sans justify-center items-center flex text-white   text-4xl md:text-7xl">
            सम्पर्क
          </h1>
        </div>
        <div className="flex  text-slate-600 flex-wrap justify-center  gap-20 2xl:gap-x-56  gap-y-10 p-10 mx-auto w-full  ">
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold">
              हाम्रो&nbsp;सम्पर्कको&nbsp;लागि
            </h1>
            <div className="flex flex-row items-center gap-5 xl:min-w-[500px] bg-white p-5 border shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faLocationPin}
                size="xl"
                style={{ color: "#ff0000" }}
              />
              <div className="flex flex-col gap-2">
                <h1 className="font-semibold text-2xl">ठेगाना</h1>
                <h1>भरतपुर महानगरपालिका कार्यालय , वडा नं-१२, चितवन </h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 bg-white border p-5 shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer text-red-600"
              />
              <div className="flex flex-col gap-2 ">
                <h1 className="font-semibold text-2xl">फोन&nbsp;नम्बर</h1>
                <h1>‌‌+९७७-०५६-५११४६७,</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 border bg-white p-5 shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer border text-red-600"
              />
              <div className="flex flex-col gap-2 ">
                <h1 className="font-semibold text-2xl">इमेल</h1>
                <h1>info@bharatpur12.org</h1>
              </div>
            </div>
          </div>
          <div className="w-full h-auto md:w-1/2 pe-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172278.0772515662!2d84.24107640614274!3d27.65827846608394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e1!3m2!1sen!2snp!4v1737023516357!5m2!1sen!2snp"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          {/* <div className="w-full  md:min-w-[400px] max-w-[500px]">
            <form
              onSubmit={}
              className="flex w-full flex-col text-white rounded-md items-center lg:gap-y-4 bg-[#245fb9] mb-10  gap-5 p-4"
            >
              <div className="w-full space-y-2">
                <label className="font-semibold">नाम</label>
                <input
                  type="text"
                  name="name"
                  className="border border-slate-700 rounded-lg  p-2 lg:p-3 w-full"
                  placeholder="नाम"
                  value={formik.values.name.trim().toLowerCase()}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500">{formik.errors.name}</div>
                )}
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold">इमेल</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email.trim()}
                  placeholder="इमेल"
                  className="border border-slate-700 rounded-lg p-2 lg:p-3 w-full "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )}
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold">सन्देश</label>
                <textarea
                  name="message"
                  value={formik.values.message.trim()}
                  placeholder="सन्देश"
                  className="border border-slate-700 rounded-lg p-2 lg:p-3 w-full "
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500">{formik.errors.message}</div>
                )}
              </div>

              <div className=" flex flex-col w-3/4 gap-4 max-w-96">
                <button
                  type="submit"
                  className="bg-button bg-green-500 hover:bg-[#06243C]  text-white p-2 rounded-lg w-full"
                >
                  पठाउनुहोस्
                </button>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </>
  );
};
