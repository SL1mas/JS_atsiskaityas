/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */
function Movie(title, director, budget) {
  this.title = title;
  this.director = director;
  this.budget = budget;
  this.wasExpensive = function () {
    const sum =
      this.budget > 100000000 ? console.log("True") : console.log("False");
    return sum;
  };
}

const dataInput = new Movie("Vienas namuose", "Kažkas", 1000000000);
console.log(dataInput.wasExpensive());
// const a = dataInput.number1;
// const b = dataInput.number2;
// const ats1 = dataInput.sumOfNo1AndNo2();
// const ats2 = dataInput.subOfNo1AndNo2();
// const ats3 = dataInput.multiOfNo1AndNo2();
// const ats4 = dataInput.diviOfNo1AndNo2();
// console.log(`Suma (${a}, ${b}): ${ats1}`);
// console.log(`Atimtis (${a}, ${b}): ${ats2}`);
// console.log(`Daugyba (${a}, ${b}): ${ats3}`);
// console.log(`Dalyba (${a}, ${b}): ${ats4}`);
