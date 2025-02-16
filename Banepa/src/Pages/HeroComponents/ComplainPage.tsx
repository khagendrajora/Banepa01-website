export const ComplainPage = () => {
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
            उजुरी
          </h1>
        </div>

        <div className="flex flex-row md:w-11/12  flex-wrap justify-center mx-auto  py-20 p-4 ">
          <div className="p-2 xl:p-5 lg:w-1/2  w-full flex flex-col gap-5">
            <p className="text-gray-600 leading-10 text-justify font-normal ">
              खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
              छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
              जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
              को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास
              थियो। 2011 को नेपाली जनगणना अनुसार, 1056 व्यक्तिगत घरहरु मा बसोबास
              गर्ने 4927 को जनसंख्या थियो।. खोकना, एउटा परम्परागत र सानो नेवारी
              गाउँ, जुन काठमाण्डौबाट करिब ८ किलोमिटर दक्षिणमा (पाटनको बाहिरी
              भागमा) पर्छ। खोकना प्राचीनकालदेखि नै तोरीको तेल उत्पादनका लागि
              प्रख्यात छ । राणा प्रधानमन्त्री चन्द्र शमशेरको पालामा सन् १९११ मा
              विद्युतले जलाउने नेपालको पहिलो सहर पनि थियो ।
            </p>
          </div>
          <div
            style={{
              overflow: "hidden",
              margin: "0 50px",
              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556758524668&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              // width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};
