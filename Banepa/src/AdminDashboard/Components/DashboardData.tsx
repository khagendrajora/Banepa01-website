import { Link } from "react-router";

export const DashboardData = () => {
  const images = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "बृद्ध",
      numbers: "१२८५",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
      value: "१३.६५%",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "जेष्ठ नागरिक",
      numbers: "८४४",
      color: "bg-gradient-to-r from-amber-600 to-amber-500",
      value: "८.९७%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "अधिबैसे",
      numbers: "३४.१८",
      color: "bg-gradient-to-r from-green-500 to-green-500",
      value: "३६.३२%",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "युवा",
      value: "२४.६१%",
      numbers: "२३१६",
      color: "bg-gradient-to-r from-pink-600 to-pink-500",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "बालबालिका",
      value: "१०.८%",
      numbers: "१०१६",
      color: "bg-gradient-to-r from-blue-600 to-blue-500",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "शिशु",
      value: "५.१३%",
      numbers: "४८३",
      color: "bg-gradient-to-r from-amber-600 to-amber-500",
    },
  ];

  const image = [
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "प्रकाशन",
      count: "४",
      color: "bg-white",
      //   value: "५२.५९%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "सूचना",

      color: "bg-white",
      count: "८",
      //   value: "४७.७%",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "समाचार",
      //   value: "०.०१%",
      count: "१",
      color: "bg-white",
    },
  ];

  const img = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "कुल जनसंख्या",
      count: "९४११",
      color: "bg-sky-400",
      value: "१००%",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "कुल घरधुरी",
      count: "२६७३",
      color: "bg-green-500",
      value: "१००%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "कुल घरसंख्या",
      count: "९६५९१",
      color: "bg-blue-500",
      value: "१००%",
    },
  ];
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-2">
        <div className="pb-2 font-poppin">
          <div className="flex justify-end w-11/12 mx-auto">
            <Link
              to="http://103.233.58.102/report"
              target="_blank"
              className="hover:text-black text-[#245fb9] font-semibold "
            >
              थप पढ्नुहोस्
            </Link>
          </div>
          <div className="flex flex-wrap gap-10  justify-center md:justify-between text-white mt-5">
            {images.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`relative ${image.color} p-5 shadow-sm flex flex-col gap-4 sm:min-w-[200px] max-w-[250px] justify-center${image.color} border-black`}
                >
                  <div className="flex justify-between">
                    <h1>{image.value}</h1>
                    <h1>{image.numbers}</h1>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full  h-1">
                    <div className="bg-white h-1 rounded-full w-[50%]"></div>
                  </div>
                  <h3>{image.title}</h3>
                  <span>(६० बर्ष देखि ७० बर्ष)</span>
                </div>
              </>
            ))}
          </div>
          <div className="flex  flex-wrap gap-8 xl:gap-10 pt-10  justify-center md:justify-between  text-black">
            {image.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`relative ${image.color} p-5 w-full shadow-sm flex border flex-col gap-4 lg:w-1/4 xxl:w-[500px]  justify-center  border-black`}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                    {/* <h1 className="font-bold">{image.value}</h1> */}
                  </div>

                  <span className="font-bold">{image.count}</span>
                </div>
              </>
            ))}
          </div>

          <div className="flex flex-wrap gap-8 xl:gap-10 pt-10 justify-center md:justify-between text-white">
            {img.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`relative ${image.color} p-5 shadow-sm w-full  flex  flex-col gap-4 lg:w-1/4 xxl:w-[500px]  justify-center${image.color} border-black`}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                    <h1 className="">{image.value}</h1>
                  </div>
                  <span>{image.count}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
