import landing from "./landing"
import menu from "./menu"
import contact from "./contact"
import reset from "./reset"

let navHome = document.querySelector("#nav-home");
let navMenu = document.querySelector("#nav-menu");
let navContact = document.querySelector("#nav-contact");

navHome.addEventListener("click", function() {controller("home");}, false);
navMenu.addEventListener("click", function() {controller("menu");}, false);
navContact.addEventListener("click", function() {controller("contact");}, false);

landing();

const controller = (tab) => {
  switch(tab) {
    case "home":
      reset();
      landing();
      break;
    case "menu":
      reset();
      menu();
      break;
    case "contact":
      reset();
      contact();
      break;
  }
};
