import React, { useState } from "react";
import { GiCommercialAirplane } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

export const HeaderNavComp = () => {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [translations, setTranslations] = useState({
    en: {
      home: "HOME",
      aboutUs: "ABOUT US",
      bookingTerms: "BOOKING TERMS",
      flight: "FLIGHT",
      contactUs: "CONTACT US",
      findFlight: "FIND FLIGHT",
    },
    de: {
      home: "STARTSEITE",
      aboutUs: "ÜBER UNS",
      bookingTerms: "BUCHUNGSBEDINGUNGEN",
      flight: "FLUG",
      contactUs: "KONTAKTIEREN SIE UNS",
      findFlight: "FLUG FINDEN",
    },
    tr: {
      home: "ANA SAYFA",
      aboutUs: "HAKKIMIZDA",
      bookingTerms: "REZERVASYON ŞARTLARI",
      flight: "UÇUŞ",
      contactUs: "BİZİMLE İLETİŞİME GEÇİN",
      findFlight: "UÇUŞ BUL",
    },
  });

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const translate = (key) => {
    return translations[selectedLanguage][key];
  };
  
  const handleFindFlightClick = () => {
    navigate("/login");
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      <div className="flex justify-center col-span-1 p-5 items-center">
        <div className="flex items-center">
          <GiCommercialAirplane className="text-4xl text-white mr-2 mb-1" />
          <p className="text-4xl font-bold text-white">C-FLIGHT</p>
        </div>
      </div>
      <div className="col-span-3 p-5 flex justify-center items-center">
        <Link to="/about" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-black">{translate("aboutUs")}</p>
          </div>
        </Link>
        <Link to="/booking-terms" className="text-black ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            {translate("bookingTerms")}
          </div>
        </Link>
        <Link to="/flight" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-black">{translate("flight")}</p>
          </div>
        </Link>
        <Link to="/contactUs" className="ml-5">
          <div className="hover:border-b-[2px] hover:border-b-yellow-400 pb-2">
            <p className="text-black">{translate("contactUs")}</p>
          </div>
        </Link>
        <Link to="/login" className="ml-5" onClick={handleFindFlightClick}>
          <div className="py-2 px-5 border-white border-[2px]">
            <p className="text-black">{translate("findFlight")}</p>
          </div>
        </Link>

        {/* Dil seçenekleri */}
        <div className="flex items-center">
          <label htmlFor="language" className="text-black mr-2"></label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="py-2 px-5 border-white border-[2px] text-black"
          >
            <option value="en">🇺🇸 English</option>
            <option value="de">🇩🇪 Deutsch</option>
            <option value="tr">🇹🇷 Türkçe</option>
          </select>
        </div>
      </div>
    </div>
  );
};
