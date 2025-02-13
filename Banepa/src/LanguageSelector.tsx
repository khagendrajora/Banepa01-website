import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "np", lang: "नेपाली" },
];
export const LanguageSelector = () => {
  const changeLanguage = (lan: string) => {
    i18n.changeLanguage(lan);
  };
  const { i18n } = useTranslation();
  return (
    <>
      <div className="">
        {languages.map((lan) => {
          return (
            <button
              className={lan.code === i18n.language ? "selected" : ""}
              key={lan.code}
              onClick={() => changeLanguage(lan.code)}
            >
              <button className="flex items-center w-fit  hover:underline">
                {lan.code === "en" ? (
                  <>
                    <img
                      src="/englishflag.png"
                      className="w-7 hover:scale-110"
                    />
                  </>
                ) : (
                  <img src="/flagicon.png" className="w-7 hover:scale-110" />
                )}
              </button>
            </button>
          );
        })}
      </div>
    </>
  );
};
