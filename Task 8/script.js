/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
function Calculator(no1, no2) {
  this.number1 = no1;
  this.number2 = no2;
  this.sumOfNo1AndNo2 = function () {
    const sum = this.number1 + this.number2;
    return sum;
  };
  this.subOfNo1AndNo2 = function () {
    const sub = this.number1 - this.number2;
    return sub;
  };
  this.multiOfNo1AndNo2 = function () {
    const multi = this.number1 * this.number2;
    return multi;
  };
  this.diviOfNo1AndNo2 = function () {
    const divi = this.number1 / this.number2;
    return divi;
  };
}

const dataInput = new Calculator(20, 15);
const a = dataInput.number1;
const b = dataInput.number2;
const ats1 = dataInput.sumOfNo1AndNo2();
const ats2 = dataInput.subOfNo1AndNo2();
const ats3 = dataInput.multiOfNo1AndNo2();
const ats4 = dataInput.diviOfNo1AndNo2();
console.log(`Suma (${a}, ${b}): ${ats1}`);
console.log(`Atimtis (${a}, ${b}): ${ats2}`);
console.log(`Daugyba (${a}, ${b}): ${ats3}`);
console.log(`Dalyba (${a}, ${b}): ${ats4}`);

// console.log(dataInput.sumOfNo1AndNo2());
// console.log(dataInput.subOfNo1AndNo2());
// console.log(dataInput.multiOfNo1AndNo2());
// console.log(dataInput.diviOfNo1AndNo2());
