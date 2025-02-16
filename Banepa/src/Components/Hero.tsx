import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faFileCirclePlus,
  faMoneyBill,
  faNoteSticky,
  faPhone,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

export const Hero = () => {
  const navigate = useNavigate();
  const images = [
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
    { src: "/banepa.jpg", alt: "Hero Image 2" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full flex flex-col bg-white ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <>
              <div className="w-full" key={index}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full md:h-screen  h-[500px] object-cover"
                />
              </div>
            </>
          ))}
        </Slider>
        <div className="flex w-full flex-wrap z-10 lg:-mt-[120px] min-h-[80px] lg:min-h-[120px] max-h-[200px] text-sm text-white font-semibold lg:text-lg justify-center ">
          <div
            className="bg-[#2c84c7] lg:text-[16px] 2xl:text-[20px] border  cursor-pointer sm:min-w-[100px] sm:w-1/5 w-1/3  p-5 flex justify-center lg:gap-4 gap-2 flex-wrap items-center"
            onClick={() => navigate("/complain")}
          >
            <FontAwesomeIcon
              icon={faNoteSticky}
              className="lg:h-8"
              style={{ color: "#ffffff" }}
            />
            उजुरी
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>
          <div
            className="bg-[#3aa8f0] border lg:text-[16px] 2xl:text-[20px]  cursor-pointer sm:min-w-[100px] w-1/3 p-5 sm:w-1/5 flex justify-center  lg:gap-4 flex-wrap gap-2 items-center"
            onClick={() => navigate("/taxpage")}
          >
            <FontAwesomeIcon icon={faMoneyBill} className="lg:h-8" />
            दर&nbsp;र&nbsp;शुल्क&nbsp;
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>

          <div
            className="bg-[#61beef] border lg:text-[16px] 2xl:text-[20px]  cursor-pointer w-1/3  p-5 sm:min-w-[100px] sm:w-1/5  flex justify-center lg:gap-4 flex-wrap gap-2 items-center"
            onClick={() => navigate("/nagrikpatra")}
          >
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              className="lg:h-8"
              style={{ color: "#ffffff" }}
            />
            नागरिक&nbsp;बडापत्र{" "}
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>

          <div
            className="bg-[#a6d4ed] border lg:text-[16px] 2xl:text-[20px]  cursor-pointer p-5 w-1/3  sm:w-1/5 sm:min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/budget")}
          >
            <FontAwesomeIcon icon={faSackDollar} className="lg:h-8" />
            बार्षिक&nbsp;बजेट
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>
          <div
            className="bg-[#85bfde] border lg:text-[16px] 2xl:text-[20px] w-1/3 cursor-pointer p-5  sm:w-1/5 sm:min-w-[100px] flex sm:hidden justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/news")}
          >
            <FontAwesomeIcon icon={faSackDollar} className="lg:h-8" />
            समाचार
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>

          <div
            className="bg-[#06a10b] border lg:text-[16px] 2xl:text-[20px]  cursor-pointer w-1/3  p-5 sm:w-1/5 sm:min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/contact")}
          >
            <FontAwesomeIcon icon={faPhone} className="lg:h-8" />
            सम्पर्क
            <FontAwesomeIcon
              icon={faAngleRight}
              className="border-2 rounded-full p-1 px-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
