import React from "react";

import Bestuursleden from "./Bestuursleden";

import Bestuursdata from "./Bestuursdata";

import { Link } from "react-router-dom";

function Overons() {
  // const cardsRef = useRef([])

  return (
    <div className="">
      <div className="bg-orange-100">
        <p className="py-16 font-medium lg:px-10 md:px-20 px-10 max-w-5xl mx-auto">
          <span className="text-orange-500 font-Rubik font-semibold text-xl">
            IVERIGE{" "}
          </span>
          <span className="text-sky-700 font-Rubik font-semibold text-xl">
            JONCKHEYT{" "}
          </span>
          is een rederijkerskamer met als hoofdbezigheid theater-maken: tweemaal
          per jaar brengen we een toneelproductie in Gent. <br /> Opgestart in
          1900 en vandaag uitgegroeid tot een jonge, dynamische groep, die vaak
          wordt aangevuld met nieuwe krachten, jong of oud. <br /> Onze gekozen
          toneelstukken zijn vaak doordrongen van de nodige humor, waar we het
          soms niet kunnen laten om wat dieper in te gaan op bepaalde
          onderwerpen. Kortom willen we zowel jong en oud vermaken en hen
          tegelijkertijd een dieperliggende boodschap aanbieden. <br /> <br />
          <span className="text-lg font-semibold">
            Kom jij kijken naar een van onze volgende
          </span>{" "}
          <Link
            className="text-lg text-sky-700 font-semibold hover:text-orange-500"
            to={"/producties"}
          >
            producties
          </Link>
          ?
        </p>
      </div>

      <h1 className="font-Rubik text-sky-700 font-bold text-4xl flex justify-center py-14">
        ONS BESTUUR
      </h1>
      <section id="bestuur">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 px-4 grid-cols-1 gap-6 mx-auto pb-20">
            {Bestuursdata.map((card, index) => (
              <Bestuursleden
                key={index}
                title={card.title}
                image={card.image}
                functie={card.functie}
                functie2={card.functie2}
                // ref={(element) => (cardsRef.current[index] = element)}
              />
            ))}
          </div>
        </div>
      </section>
      <div className="bg-sky-100">
        <p className="py-16 font-medium lg:px-10 md:px-20 px-10 max-w-5xl mx-auto">
          Bij de eeuwwisseling werd de toneelvereniging In Trouw Verbond in de
          pas gebouwde Sint-Amanduskring in de toenmalige Meersstraat - nu Halve
          Maanstraat - boven de doopvont gehouden. In 1953 ontving de vereniging
          het predikaat "Koninklijk".Voor de stichting van de rederijkerskamer
          "Iverige Jonckheyt" moeten we een heel eind terug. Deze Camere
          resideerde op het grondgebied Oostakker en voer als devies 'Die soeckt
          die vindt, arbeid verwint'. De meeste bronnen citeren het jaar 1762
          als aanvangsjaar.1785 Is een vermeldenswaardig jaar. Toen dong
          "Iverige Jonckheyt" mee in een rederijkerskamerwedstrijd ingericht
          door de Gentse
        </p>
      </div>
    </div>
  );
}

export default Overons;
