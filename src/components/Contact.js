import React from "react";

const Contact = () => {
  return (
    <div className="container max-w-6xl mx-auto pt-10">
      <div className="grid md:grid-cols-3">
        <div className="pt-5 px-10 justify-center col-span-2 gap-20">
          <form className="py-5">
            <div class="mb-6">
              <label
                for="naam"
                class="block mb-2 font-Rubik text-lg font-medium text-sky-700"
              >
                Volledige naam
              </label>
              <input
                type="name"
                id="name"
                class=" border border-orange-500  text-sm rounded-lg block w-full p-2.5"
                placeholder="Uw naam"
                required
              />
            </div>

            <div class="mb-6">
              <label
                for="email"
                className="block mb-2 font-Rubik text-lg font-medium text-sky-700"
              >
                e-mailadres
              </label>
              <input
                type="email"
                id="email"
                class="border border-orange-500  text-sm rounded-lg block w-full p-2.5"
                placeholder="Uw e-mailadres"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="countries"
                class="block mb-2 text-lg font-medium text-sky-700 font-Rubik"
              >
                Maak een keuze
              </label>
              <select
                id="selectie"
                class="border border-orange-500 text-sm rounded-lg block w-full p-2.5 "
              >
                <option>Digitale uitnodiging</option>
                <option>Algemene opmerking</option>
                <option>Vraag tot contact</option>
                <option>Vraag over de i-STAGE (jongerenwerking)</option>
                <option>Erelid worden</option>
                <option>Sponsor worden</option>
              </select>
            </div>
            <div class="mb-10">
              <label
                for="large-input"
                className="block mb-2 font-Rubik text-lg font-medium text-sky-700"
              >
                Uw bericht
              </label>
              <textarea
                name="text"
                id="text"
                cols="30"
                rows="10"
                className="border border-orange-500  text-sm rounded-lg block w-full p-2.5"
                placeholder="Typ hier uw bericht"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-10"
            >
              Versturen
            </button>
          </form>
        </div>
        <div className="flex justify-center pt-12 px-20 md:ml-10 md:pb-0 pb-10">
          <ul>
            <div className="border rounded-xl py-6 px-10 border-orange-500">
              <li>
                <h1 className="font-Rubik text-2xl text-sky-700 font-medium pb-5">
                  POSTADRES
                </h1>
                <p>Kortrijksesteenweg 250/502 9000 Gent</p>
              </li>
              <li>
                <h1 className="font-Rubik text-2xl text-sky-700 font-medium py-5">
                  E-MAIL
                </h1>
                <a
                  className="text-sky-700 hover:underline duration-200"
                  href="mailto:info@iverigejonckheyt.be"
                >
                  info@iverigejonckheyt.be
                </a>
              </li>
              <li>
                <h1 className="font-Rubik text-2xl text-sky-700 font-medium py-5">
                  TELEFOON
                </h1>
                <p>+32 496 250 280</p>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
