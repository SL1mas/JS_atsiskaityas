/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const showUsers = (users) => {
  const output = document.getElementById("output");
  output.innerText = "";
  users.forEach((users) => {
    const login = document.createElement("td");
    login.innerText = users.login;
    const avatar_url = document.createElement("td");
    avatar_url.innerText = users.avatar_url;
    const tr = document.createElement("tr");
    tr.append(login, avatar_url);
    output.append(tr);
  });
};

const fetchUsers = async (event) => {
  event.preventDefault();
  try {
    const response = await fetch("https://api.github.com/users");
    if (response.ok) {
      const users = await response.json();
      showUsers(users);
    }
  } catch (error) {
    console.error(error);
  }
};
// fetchUsers();
document.getElementById("btn").addEventListener("click", fetchUsers);
