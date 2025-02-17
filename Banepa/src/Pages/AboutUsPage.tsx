import { useEffect } from "react";

export const AboutUsPage = () => {
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
            हाम्रो&nbsp;बारेमा
          </h1>
        </div>

        <div className="flex flex-row  flex-wrap gap-5 justify-center mx-auto my-5 p-5 xl:p-14 ">
          <div className="">
            <img
              src="/banepa.jpg"
              alt="logo"
              className="flex mx-auto w-[600px] xl:h-[500px] object-cover"
            />
          </div>
          <div className="p-2 xl:p-5 2xl:w-1/2  w-full flex flex-col gap-5">
            <h1 className="sm:text-4xl text-2xl p-2 font-bold">
              संक्षिप्त परिचय
            </h1>
            <p className="text-gray-600 leading-10 text-justify font-normal ">
              पवित्र नारायणी नदी किनार तथा प्रसिद्ध धार्मिकस्थल देवघाटधामको
              काखमा अवस्थित भरतपुर महानगरपालिका ऐतिहासिक, सामाजिक, आर्थिक,
              राजनीतिक, धार्मिक तथा सांस्कृतिक आदि रूपले मुलुककै अग्रणी नगरीको
              रूपमा आफ्नो पहिचान बनाएको छ । वि.सं. २०३५ सालमा तत्कालीन भरतपुर
              गाउँ पञ्चायत र नारायणगढ गाउँ पञ्चायतलाई मिलाई भरतपुर नगर पञ्चायतको
              रूपमा रही २०४८ साल देखि भरतपुर नगरपालिकाको रूपमा संचालित भएकोमा
              नेपाल सरकार मन्त्रिपरिषदको मिति २०७१।०८।१६ को निर्णयले यस भरतपुर
              नगरपालिकालाई आसपासका पाँच गा.बि.स. मगंलपुर ,फुलबारी , गीतानगर ,
              शिवनगर र पटिहानी समावेश गरि भरतपुर उप– महानगरपालिकामा स्तरोन्नती
              गरिएको थियो . यसै गरि नेपाल सरकार मन्त्रिपरिषदको मिति २०७३ ।११ ।२७
              को निर्णयले यस भरतपुर उप -महानगरपालिका मा नारायणी नगरपालिका ,
              चित्रबन नगरपालिका र कविलास गा.बि .स समेत थप गरि भरतपुर
              महानगरपालिकामा स्तरोन्नती भएको छ ।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
