/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
class Movie {
  constructor(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function () {
      return this.budget > 100000000
        ? "Taip, nes biudžetas neviršijo 100 mln USD."
        : "Ne, nes biudžetas nepasiekė 100 mln USD.";
    };
  }
}

const dataInput = new Movie("Vienas namuose", "Kažkas", 100000000);
console.log(
  "Filmo pavadinimas: " + dataInput.title + ".",
  "Filmo režisierius: " + dataInput.director + ".",
  "Filmo biudžetas: " + dataInput.budget + " USD. Ar filmas buvo brangus?",
  dataInput.wasExpensive()
);
