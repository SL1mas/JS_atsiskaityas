/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const KgInput = document.getElementById("search");
const OtherUnits = document.getElementById("output");
const kg = Number(KgInput.value);

function OtherUnitsOfMeasure(event) {
  event.preventDefault();
  const kg = Number(KgInput.value);
  const lb = (kg * 2.2046).toFixed(1);
  const g = (kg / 0.001).toFixed(1);
  const oz = (kg * 35.274).toFixed(1);
  OtherUnits.textContent = `Svoris svarais (lb): ${lb}, svoris gramais (g):${g}, svoris uncijomis (oz):${oz}!`;
}
document.querySelector("form").addEventListener("submit", OtherUnitsOfMeasure);
