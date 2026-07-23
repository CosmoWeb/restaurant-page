import "./style.css";
import {displayHome} from "./home.js";
import {displayMenu} from "./menu.js";

const cleanPage = () => {
    const content = document.querySelector("#content");
    content.textContent = "";
};

const displayPage = () => {
    const buttons = document.querySelector("nav");
    buttons.addEventListener("click", (event) => {
        const target = event.target;
        if(target.id === "home"){
            cleanPage();
            displayHome();
        }
        else if(target.id === "menu"){
            cleanPage();
            displayMenu();
        }
    });
};

displayPage();