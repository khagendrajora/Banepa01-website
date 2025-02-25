import { useState } from "react";
import Slider from "react-slick";

export const Information = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/male.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    // { src: "/banepa.jpg", alt: "Hero Image 2" },
  ];
  return (
    <>
      <div className="py-10 font-poppin  ">
        <h1 className="font-bold   text-[50px] w-full text-black text-center py-3 bg-ov ">
          <h1>जानकारी</h1>
          {/* <div className="bg-white min-w-[130px]  mx-auto h-[1px]"></div> */}
        </h1>
        <div className="w-full bg-zinc-100 flex flex-col items-center justify-center ">
          <div className="py-10 slider-containers w-[340px] sm:w-[645px] md:w-[800px] lg:w-[1045px] xl:w-[1300px] 2xl:w-[1550px]">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div
                  key={index}
                  className=" w-full p-4 cursor-pointer "
                  onClick={() => {}}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full min-h-96 max-h-[384px] "
                    />
                    <div
                      className={`absolute bottom-0 left-0 w-full ${
                        hoveredIndex === index ? "h-full " : "h-0 "
                      } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                    ></div>
                    <div
                      className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                        hoveredIndex === index
                          ? "translate-y-0 "
                          : "translate-y-1/2 opacity-0"
                      }`}
                    >
                      <button
                        className={`bg-red-600 p-2 hover:bg-red-700  text-white `}
                      >
                        थप पढ्नुहोस्
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
