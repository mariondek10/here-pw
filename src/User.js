import { users } from "./data.js";
export class User {
  constructor() {
    this.info = this.generateInfo();
    this.presence = false;
    this.user = generateUser();
    this.changePresence();
  }

  generateInfo() {
    users.forEach((el) => {
      const titre = el.name.title;
      const prenom = el.name.first;
      const nom = el.name.last;
      const ville = el.location.city;
      const pays = el.location.country;
      const age = el.dob.age;
      const email = el.email;
      const photo = el.picture.large;
    });
    return cleanData;
  }

  generateUser() {
    const main = document.querySelector("main");

    main.appendChild(user);

    const user = document.createElement("div");

    user.classList.add("user");
    user.dataset.present = this.presence;

    const img = document.createElement("img");
    img.dataset.src = this.photo;

    user.appendChild(img);

    const info = document.createElement("div");

    info.classList.add("user--info");

    info.appendChild(child1HTML);
    info.appendChild(child2HTML);

    user.appendChild(info);

    const child1HTML = `<h1>${users.results[0].name.title} ${users.results[0].name.first} ${users.results[0].name.last} </h1>
        <p class="info">${users.results[0].dob.age} years old/p>
        <pclass="info">${users.results[0].location.city}, ${users.results[0].location.country}</p>`;

    const child2HTML = `<a href="mailto:${users.results[0].email}">
      <span class="mail">✉️</span>
</a>`;
  }

  changePresence() {
    const boxUser = document.querySelector(".user");
    const pUser = document.querySelector(".info");

    user.addEventListener("click", changeState);

    function changeState() {
      if ((this.presence = false)) {
        boxUser.style.color = `#ffffff`;
        pUser.style.backgroundColor = `#06d6a0`;
        pUser.style.color = `#ffffff`;
        boxUser.dataset.present = true;
      }
    }
  }
}
