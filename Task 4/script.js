/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */
const showAuto = (auto) => {
  const output = document.getElementById("output");
  auto.forEach((auto) => {
    const brand = document.createElement("span");
    brand.innerText = auto.brand;
    const models = document.createElement("p");
    models.innerText = auto.models;
    const div = document.createElement("div");
    div.append(brand, models);
    output.append(div);
    div.classList.add("brand");
  });
};

const fetchAuto = async () => {
  try {
    const response = await fetch("cars.json");
    if (response.ok) {
      const users = await response.json();
      showAuto(users);
    }
  } catch (error) {
    console.error(error);
  }
};

fetchAuto();
