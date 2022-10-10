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
    const brand = document.createElement("td");
    brand.innerText = auto.brand;
    const models = document.createElement("td");
    models.innerText = auto.models;
    const tr = document.createElement("tr");
    tr.append(brand, models);
    output.append(tr);
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

// const ENDPOINT = 'cars.json';
