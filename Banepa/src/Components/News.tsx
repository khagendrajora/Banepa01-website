import { useNavigate } from "react-router-dom";

export const News = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/banepa.jpg",
      alt: "Hero Image 1",
      month: "भाद्र",
      day: "१०",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम  ",
    },
    {
      src: "/banepa3.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      key: "2",
      year: "२०८१",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/banepa.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      key: "3",
      day: "१०",
      year: "२०७३",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
    {
      src: "/banepa.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      key: "3",
      day: "१०",
      year: "२०७३",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
  ];
  return (
    <>
      <div className="py-10  font-poppin relative bg-white">
        <h1 className="font-bold flex mx-auto flex-col text-[50px] w-1/3 rounded text-center py-4 bg-ov gap-2">
          समाचार
          {/* <div className="bg-black min-w-[120px]  mx-auto h-[1px]"></div> */}
        </h1>
        <div className="w-full bg-zinc-100 flex flex-col items-center justify-center "></div>

        <div className="flex flex-col justify-center relative w-full  mx-auto py-10  items-center lg:w-11/12 ">
          <div className="flex w-full  justify-center flex-wrap gap-9 p-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className=" relative shadow-sm bg-white md:w-2/5 lg:w-1/3 xl:w-1/5 w-full sm:w-3/4"
              >
                <div>
                  <div className="overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="mx-auto h-auto min-h-[300px] hover:scale-125 duration-1000 xl:min-h-[350px] max-h-[350px] lg:max-h-[340px]  object-cover "
                    />
                  </div>
                  <div className="bg-red-600 p-3 absolute right-5 w-20 -top-4 text-center text-white font-bold">
                    {image.day}
                    <br></br>
                    {image.month}
                  </div>
                </div>
                <div className="flex flex-col  gap-2 2xl:p-6 p-3 ">
                  <h1 className="font-semibold text-xl ">{image.title}</h1>
                </div>
                <div>
                  <hr />
                  <button
                    className="text-xs hover:text-blue-500 cursor-pointer p-3 text-slate-500"
                    onClick={() => navigate(`/newsdetail/${image.key}`)}
                  >
                    थप पढ्नुहोस्....
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
