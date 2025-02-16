export const Review = () => {
  return (
    <>
      <div
        className="w-full h-auto font-poppin py-16 p-2"
        // style={{
        //   backgroundImage: "url('/review.jpg')",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="w-full text-center  text-slate-500">
          <div className="">
            <h1>जनताको सुझाव</h1>
            <h1 className="font-medium text-black text-3xl">
              हाम्रो प्रति जनताको विचार
            </h1>
          </div>
        </div>
        <div className="flex justify-center flex-wrap pt-16  gap-10">
          <div className="flex w-full max-w-[600px] relative bg-white border-2 rounded-lg p-14 gap-7 flex-col">
            <div className="bg-[url('/bgnews.jpg')]  absolute inset-0 bg-cover bg-center opacity-50 z-0 pointer-events-none"></div>
            <p className="text-justify z-10 text-slate-500">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex relative gap-5">
              <img
                src="/fblogo.png"
                alt="hero"
                className="w-8 object-contain h-auto  rounded-full"
              />
              <div className="flex text-slate-500 relative flex-col justify-center">
                <h1 className="text-start">Khagendra Singh Jora</h1>
                <h1 className="">Kanchanpur</h1>
              </div>
            </div>
          </div>
          <div className="flex w-full border-2 bg-white relative max-w-[600px] rounded-lg p-14 gap-7 flex-col">
            <div className="bg-[url('/bgnews.jpg')]  absolute inset-0 bg-cover bg-center opacity-50 z-0 pointer-events-none"></div>
            <p className="text-justify text-slate-500 relative z-10">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex relative gap-5">
              <img
                src="/googlelogo.png"
                alt="hero"
                className="w-8 object-contain h-auto rounded-full"
              />
              <div className="flex text-slate-500 flex-col  justify-center">
                <h1 className="text-start">Buddhi Dangol</h1>
                <h1 className="">Kathmandu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
