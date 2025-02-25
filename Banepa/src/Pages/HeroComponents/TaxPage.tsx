import { useEffect } from "react";

export const TaxPage = () => {
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
            दर&nbsp;र&nbsp;शुल्क
          </h1>
        </div>
        <div className="flex flex-col w-3/4 mx-auto gap-10 p-4 py-10">
          <div className="font-bold text-4xl text-[#245fb9]">
            दर&nbsp;र&nbsp;शुल्क
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">
              कामदार तथा निर्माण सामाग्रीको नगर दररेट (आ.व. २०८१/२०८२)
            </h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;09/04/2024 - 15:54</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Nagar Darrate/कामदार तथा निर्माण सामाग्रीको नगर दररेट२०८१२०८२ (1).pdf"
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
              आ.व. २०८०-८१ को कामदार तथा निर्माण सामाग्रीको नगर दररेट
            </h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;09/04/2024 - 15:45</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Nagar Darrate/आ.व २०८०-८१ को कामदार तथा निर्माण सामाग्रीको नगर दररेट.pdf"
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
              निर्माण सामाग्री तथा कामदारहरूको नगर दररेट (आ.व. २०७९/०८०)
            </h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;09/04/2024 - 15:33</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Nagar Darrate/निर्माण सामाग्री तथा कामदारहरूको नगर दररेट (आ.व. २०७९-०८०)_.pdf"
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
