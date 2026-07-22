import bigFatBurger from "./img/big-fat-burger.png";
import bigOilyBurger from "./img/big-oily-burger.png";
import bigGreasyBurger from "./img/big-greasy-burger.png";
import oilyFrenchFries from "./img/oily-french-fries.png";
import greasyOnions from "./img/greasy-onions.png";
import fatPunch from "./img/fat-punch.png";
import motorOilPunch from "./img/motor-oil-punch.png";
import petrolPunch from "./img/petrol-punch.png";


const displayMenu = () => {
    const burgers = ["Big Fat Burger", "Big Oily Burger", "Big Greasy Burger"];
    const beverages = ["Fat Punch", "Motor Oil Punch", "Petrol Punch"];
    const sides = ["Oily French Fries", "Greasy Onions"];
    const content = document.querySelector("#content");
    const burgerContainer = document.createElement("div");
    const sideContainer = document.createElement("div");
    const beverageContainer = document.createElement("div");
    const burgerTitle = document.createElement("h2");
    const sideTitle = document.createElement("h2");
    const beverageTitle = document.createElement("h2");
    const title = document.createElement("h1");

    burgerContainer.classList.add("burgerContainer");
    sideContainer.classList.add("side-container");
    beverageContainer.classList.add("beverage-container");
    title.classList.add("title");

    title.textContent = "Menu";
    burgerTitle.textContent = "Burgers";
    sideTitle.textContent = "Sides";
    beverageTitle.textContent = "Beverages";

    content.appendChild(title);
    content.appendChild(burgerContainer);
    content.appendChild(sideContainer);
    content.appendChild(beverageContainer);
    burgerContainer.appendChild(burgerTitle);
    sideContainer.appendChild(sideTitle);
    beverageContainer.appendChild(beverageTitle);

    for (const burger of burgers) {

        if (burger === "Big Fat Burger") {
            const burgerCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            burgerCard.classList.add("burger-card");

            img.src = bigFatBurger;
            text.textContent = "Big Fat Burger";

            burgerContainer.appendChild(burgerCard);
            burgerCard.appendChild(img);
            burgerCard.appendChild(text);
        }
        else if (burger === "Big Oily Burger") {
            const burgerCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            burgerCard.classList.add("burger-card");

            img.src = bigOilyBurger;
            text.textContent = "Big Oily Burger"

            burgerContainer.appendChild(burgerCard);
            burgerCard.appendChild(img);
            burgerCard.appendChild(text);
        }
        else if (burger === "Big Greasy Burger") {
            const burgerCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            burgerCard.classList.add("burger-card");

            img.src = bigGreasyBurger;
            text.textContent = "Big Greasy Burger";

            burgerContainer.appendChild(burgerCard);
            burgerCard.appendChild(img);
            burgerCard.appendChild(text);
        }

    }

    for (const side of sides) {
        if (side === "Oily French Fries") {
            const sideCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            sideCard.classList.add("side-card");

            img.src = oilyFrenchFries;
            text.textContent = "Oily French Fries";

            sideContainer.appendChild(sideCard);
            sideCard.appendChild(img);
            sideCard.appendChild(text);
        }
        else if (side === "Greasy Onions") {
            const sideCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            sideCard.classList.add("side-card");

            img.src = greasyOnions;
            text.textContent = "Greasy Onions";

            sideContainer.appendChild(sideCard);
            sideCard.appendChild(img);
            sideCard.appendChild(text);
        }
    }

    for (const beverage of beverages) {
        if(beverage === "Fat Punch"){
            const beverageCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            beverageCard.classList.add("beverage-card");

            img.src = fatPunch;
            text.textContent = "Fat Punch";

            beverageContainer.appendChild(beverageCard);
            beverageCard.appendChild(img);
            beverageCard.appendChild(text);
        }
        else if(beverage === "Motor Oil Punch"){
            const beverageCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            beverageCard.classList.add("beverage-card");

            img.src = motorOilPunch;
            text.textContent = "Motor Oil Punch";

            beverageContainer.appendChild(beverageCard);
            beverageCard.appendChild(img);
            beverageCard.appendChild(text);
        }
        else if(beverage === "Petrol Punch"){
            const beverageCard = document.createElement("div");
            const img = document.createElement("img");
            const text = document.createElement("div");

            beverageCard.classList.add("beverage-card");

            img.src = petrolPunch;
            text.textContent = "Petrol Punch";

            beverageContainer.appendChild(beverageCard);
            beverageCard.appendChild(img);
            beverageCard.appendChild(text);
        }
    }
};

export { displayMenu };