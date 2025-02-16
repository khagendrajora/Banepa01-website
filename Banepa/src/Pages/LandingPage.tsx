import { Hero } from "../Components/Hero";
import { Information } from "../Components/Information";
import { Introduction } from "../Components/Introduction";
import { News } from "../Components/News";
import { Publication } from "../Components/Publication";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full scrollbar-hidden flex flex-col  overflow-x-hidden bg-zinc-100  ">
        <Hero />
        <Introduction />
        <Information />
        <News />
        <Publication />
      </div>
    </>
  );
};
