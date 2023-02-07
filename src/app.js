import { users } from "./data.js";

import { User } from ".src/User.js";

/* users.results.forEach((element) => {
  filelement.name;
});

const tabUser = users.results;

const userOrderred = tabUser.filter(word => word.length > 6); */

const user1 = new User();

user1.generateUser;

/* getPersonInfo().then((res) => {
  const urlUtil = "https://randomuser.me/api/?results=20";
  fetch(urlUtil)
    .then((response) => response.json())
    .then((response) => {
      const personData = parseData(response);
      personData.forEach((element) => {
        console.log(element);
      });
    })
    .catch((error) => {
      console.error(
        "Erreur lors de la récupération des données de l'API",
        error
      );
    });
});*/

/* const parseData = JSON.parse(users.results);

const cleanData = parseData.map((el) => {
  const titre = el.name.title;
  const prenom = el.name.first;
  const nom = el.name.last;
  const ville = el.location.city;
  const pays = el.location.country;
  const age = el.dob.age;
  const email = el.email;
  const photo = el.picture.large;
});

console.log(cleanData); */

console.log(users);
