import { useEffect } from "react";

export const NagrikPage = () => {
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
            नागरिक&nbsp;बडापत्र
          </h1>
        </div>

        <div className="flex flex-col w-3/4 mx-auto gap-10 p-4 py-10">
          <div className="font-bold text-4xl text-[#245fb9]">
            नागरिक वडापत्र
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">नागरिक वडापत्र २०७९</h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;07/25/2022</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Ward Patra/नागरिक वडापत्र २०७९.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">नागरिक वडापत्र २०७५</h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;07/07/2019</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Ward Patra/Final bharatpur citizen charter 2075 re.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">नागरिक बडापत्र २०७४</h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;05/07/2017</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Ward Patra/citizencharter.pdf"
                download
                className="cursor-pointer text-blue-700"
              >
                Download File
              </a>{" "}
            </div>
            <hr />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="font-semibold text-2xl">नागरिक वडापत्र २०७२</h1>
            <div>Post Date: &nbsp; &nbsp; &nbsp;08/19/2015</div>
            <div>
              Document: &nbsp; &nbsp;
              <a
                href="/Ward Patra/citizencharter.pdf"
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
