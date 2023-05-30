import React from "react";


const Praktisch = () => {
  return (
    <div className="">
      <div className="flex justify-center py-5 drop-shadow-lg">
        <iframe
          className="rounded-lg md:w-[700px] lg:w-[1000px] w-3/4 h-[300px] md:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2506.9358068736074!2d3.74974147700668!3d51.07273504236344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c376d72e4542b5%3A0xbc67607236ba1d33!2sSint-Bernadettestraat%20132%2C%209000%20Gent!5e0!3m2!1snl!2sbe!4v1684768432993!5m2!1snl!2sbe"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="map">
          </iframe>
      </div>
      <div className="mt-10">
        <div className="container pt-10 lg:max-w-5xl mx-auto md:max-w-2xl pb-3">
          <ul className="flex-row justify-between md:flex pl-10 md:pl-0 md:static md:text-center py-5">
            <li className="pb-10 md:pb-5 mx-5">
              <h1  className="text-sky-700 font-Rubik font-medium text-2xl pb-4">TONEELZAAL</h1>
              <p>Nova-centrum Sint-Amandsberg </p>
              <p>Sint-Bernadettestraat 132-1349040 Gent</p>
            </li>
            <li className="pb-10 md:pb-5 mx-5">
            <h1  className="text-sky-700 font-Rubik font-medium text-2xl pb-4">TICKETS</h1>
            <p className="">14 euro (tenzij anders vermeld)</p>
            <p>12 euro onder 16 jaar (tenzij anders vermeld)</p>
            </li>
            <li className=" max-w-xs pb-10 md:pb-5 mx-5">
            <h1  className="text-sky-700 font-Rubik font-medium text-2xl pb-4">BEREIKBAARHEID</h1>
            <h4 className="font-semibold">Openbaar vervoer:</h4>
            <p className="pb-4">Lijnen 70-71 stoppen aan de bushalte voor de deur.</p>
            <h4 className="font-semibold">Eigen wagen:</h4>
            <p>Er is parking voorzien voor de deur.</p>
            </li>
          </ul>
        </div>
        <div>
          <hr className="border-orange-500 max-w-5xl mx-auto" />
        </div>
        <div className="container lg:max-w-5xl mx-auto md:max-w-2xl pb-20 pl-14 md:pl-0 md:pt-10 pt-14">
          <h1 className="text-sky-700 font-Rubik font-medium text-2xl pb-8">ERELEDEN EN SPONSORING</h1>
          <h2 className="text-sky-700 font-bold text-xl pb-3">ERELEDEN</h2>
          <p>Als erelid komt u bij ons op de eerste plaats en heeft u de volgende voordelen:</p>
          <ul className="list-disc pl-5 pb-7">
            <li>Welkom op <span className="font-bold text-orange-500">alle producties</span>  van seizoen 2022 - 2023 (1 toegangskaart op naam per productie)</li>
            <li>Zekerheid op <span className="font-bold text-orange-500">mooie zitplaatsen</span>, te reserveren in de voorverkoop</li>
            <li>Voorziening van <span className="font-bold text-orange-500">een gratis drankje</span> tijdens de voorstelling</li>
            <li>Voorziening van <span className="font-bold text-orange-500">een gratis programmaboekje</span></li>
            <li><span className="font-bold text-orange-500">Geen transactiekosten</span> bij reservatie</li>
            <li>Enorme dankbaarheid vanuit de productie!</li>
          </ul>
          <h2 className="text-sky-700 font-bold text-xl pb-3">SPONSORING</h2>
          <p>Advertentie programmaboekje: <br /> 1/4 A5 - 65 euro <br /> 1/2 A5 - 120 euro <br />
          Andere voorstellen zijn bespreekbaar.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Praktisch;
