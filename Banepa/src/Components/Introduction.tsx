import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

export const Introduction = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/male.jpg",
      alt: "Hero Image 1",
      name: "लेख राज पन्त",
      post: "अध्यक्ष",
      number: "९८५५०५६४३८",
    },

    {
      src: "/female.jpg",
      alt: "Hero Image 4",
      name: "	बिर बहादुर स्याङतान",
      post: "सदस्य",
      number: "९८४५०८६०९८",
    },
    {
      src: "/Images/sanjay kumar thapa.jpg",
      alt: "Hero Image 4",
      name: "संजय कुमार थापा",
      post: "सदस्य",
      number: "९८५५०५४७१७",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-white py-20 md:py-0">
        <div className=" flex justify-center mx-auto w-11/12 md:my-14 ">
          <div className="flex flex-wrap justify-center  gap-10">
            <div className="flex flex-col gap-5 md:w-1/2">
              <div className="font-bold text-4xl">संक्षिप्त परिचय</div>
              <div className="text-justify text-gray-500 font-normal font-poppin text-[16px] leading-8">
                पवित्र नारायणी नदी किनार तथा प्रसिद्ध धार्मिकस्थल देवघाटधामको
                काखमा अवस्थित भरतपुर महानगरपालिका ऐतिहासिक, सामाजिक, आर्थिक,
                राजनीतिक, धार्मिक तथा सांस्कृतिक आदि रूपले मुलुककै अग्रणी नगरीको
                रूपमा आफ्नो पहिचान बनाएको छ । वि.सं. २०३५ सालमा तत्कालीन भरतपुर
                गाउँ पञ्चायत र नारायणगढ गाउँ पञ्चायतलाई मिलाई भरतपुर नगर
                पञ्चायतको रूपमा रही २०४८ साल देखि भरतपुर नगरपालिकाको रूपमा
                संचालित भएकोमा नेपाल सरकार मन्त्रिपरिषदको मिति २०७१।०८।१६ को
                निर्णयले यस भरतपुर नगरपालिकालाई आसपासका पाँच गा.बि.स. मगंलपुर
                ,फुलबारी , गीतानगर , शिवनगर र पटिहानी समावेश गरि भरतपुर उप–
                महानगरपालिकामा स्तरोन्नती गरिएको थियो . यसै गरि नेपाल सरकार
                मन्त्रिपरिषदको मिति २०७३ ।११ ।२७ को निर्णयले यस भरतपुर उप
                -महानगरपालिका मा नारायणी नगरपालिका , चित्रबन नगरपालिका र कविलास
                गा.बि .स समेत थप गरि भरतपुर महानगरपालिकामा स्तरोन्नती भएको छ ।
              </div>
              <div className="flex justify-start">
                <button
                  className="border-2 border-[#245fb9] bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9]  p-3 font-medium"
                  onClick={() => navigate("/aboutus")}
                >
                  थप पढ्नुहोस्
                </button>
              </div>
            </div>
            <div className="slider-containers w-[300px]  xl:w-[600px] 2xl:w-[800px]">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <>
                    <div className="lg:px-10 p-5">
                      <div key={index} className="relative ">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-[300px] w-full object-cover"
                        />

                        <div className=" z-10 text-center space-y-1 absolute bottom-1 left-7 rounded-lg bg-white p-3 w-3/4 ">
                          <h1 className="font-semibold">श्री {image.name}</h1>
                          <h1 className="font-normal text-slate-500 text-xs">
                            {image.post}
                          </h1>
                          <h1 className="font-normal text-slate-500 text-xs">
                            {image.number}
                          </h1>
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
