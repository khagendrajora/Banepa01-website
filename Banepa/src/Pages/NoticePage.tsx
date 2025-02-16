import { useNavigate } from "react-router-dom";

export const NoticePage = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      month: "भाद्र",
      day: "१०",
      year: "२०८१",
      key: "1",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      year: "२०६२",
      key: "2",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      year: "२०७१",
      key: "3",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      year: "२०७१",
      key: "3",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
  ];
  return (
    <>
      <div className="w-full font-poppin">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0  justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            सूचना
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 sm:w-3/4 w-11/12 justify-center my-12 mx-auto ">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex gap-2 w-full  sm:w-3/4 md:w-2/5 border-2 sm:p-5 px-1 md:py-5 "
            >
              <div className="bg-[#ef4444]  p-5 w-[100px] md:h-[100px] text-white font-medium flex justify-center flex-col items-center gap-1">
                <span>{image.day}</span>
                <span>{image.month}</span>
                <span>{image.year}</span>
              </div>
              <div className="flex flex-col h-full justify-between p-3 gap-3">
                <p className=" ">{image.title}</p>
                <button
                  className="text-slate-400  hover:text-blue-500 flex flex-row gap-3"
                  onClick={() => navigate(`/noticedetail/${image.key}`)}
                >
                  थप&nbsp;पढ्नुहोस्
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
