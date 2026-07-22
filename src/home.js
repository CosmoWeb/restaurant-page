import bfbBanner from "./img/bfb-banner.png";

const displayHome = () => {
    const content = document.querySelector("#content");
    const title = document.createElement("h1");
    const banner = document.createElement("div");
    const img = document.createElement("img");
    const about = document.createElement("div");
    const hours = document.createElement("div");
    const location = document.createElement("div");

    title.classList.add("title");
    banner.classList.add("banner");
    img.classList.add("banner-img");
    about.classList.add("about");
    hours.classList.add("hours");
    location.classList.add("location");

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            const subTitle = document.createElement("h2");
            const text = document.createElement("span");
            subTitle.textContent = "Who we are";
            text.textContent = "Enjoy the gritty taste of a Big Fat Burger! Since 1892, BFB has been serving the oilest and fatter burgers of all the country. What are you waiting for? Get your hands dirty with our best burgers!";
            about.appendChild(subTitle);
            about.appendChild(text);
        }
        else if (i === 1) {
            const subTitle = document.createElement("h2");
            const text = document.createElement("span");
            subTitle.textContent = "Hours";
            text.textContent = "24/7 WE NEVER CLOSE!!!";
            hours.appendChild(subTitle);
            hours.appendChild(text);
        }
        else {
            const subTitle = document.createElement("h2");
            const text = document.createElement("span");
            subTitle.textContent = "Location";
            text.textContent = "66 Dusty Road, Junkyard, Bidon County";
            location.appendChild(subTitle),
            location.appendChild(text);
        }
    }

    title.textContent = "Big Fat Burgers";
    img.src = bfbBanner;

    content.appendChild(title);
    content.appendChild(banner);
    content.appendChild(about);
    content.appendChild(hours);
    content.appendChild(location);
    banner.appendChild(img);
};

export { displayHome };