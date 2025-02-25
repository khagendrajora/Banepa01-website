import { useEffect } from "react";

export const BudgetPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
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
            बार्षिक&nbsp;बजेट
          </h1>
        </div>
        <div className="flex flex-col w-3/4 mx-auto gap-10 p-4 py-10">
          <div className="font-bold text-4xl text-[#245fb9]">
            बार्षिक&nbsp;बजेट
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">
              आ. व. २०८१-८२ को योजना किताव
            </h1>
            <div>Published Date: &nbsp; &nbsp; &nbsp;2081/04/31</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Budget/Budget Book 2081-82.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">
              आर्थिक वर्ष २०८१/२०८२ को बजेट वक्तव्य
            </h1>
            <div>Published Date: &nbsp; &nbsp; &nbsp;</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Budget/आर्थिक वर्ष २०८१।२०८२ को बजेट वक्तव्य ।.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">
              आ. व. २०८१/२०८२ को प्रस्तावित नीति तथा कार्यक्रम
            </h1>
            <div>Published Date: &nbsp; &nbsp; &nbsp;</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Budget/आ. व. २०८१२०८२ को प्रस्तावित नीति तथा कार्यक्रम ।.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">
              आ. व. २०८०-८१ को योजना किताव
            </h1>
            <div>Published Date: &nbsp; &nbsp; &nbsp;</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Budget/Inner Page_BW_Final.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>

          {/* <div
            style={{
              overflow: "hidden",
              margin: "0 50px",

              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556758524668&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
      </div>
    </>
  );
};
