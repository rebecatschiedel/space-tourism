const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Toggle hamburguer menu
navToggle.addEventListener("click", function (e) {
  const visibility = nav.getAttribute("data-visible");

  if (visibility === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Destination Page
const list = document.querySelector("#destination-list");
const info = document.querySelector(".destination-info");
const image = document.querySelector("#image");

const data = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp",
    },
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp",
    },
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp",
    },
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

//--------// HOW TO READ JASON FILE

const changeDestination = function (destination, e) {
  // Add underline to the clicked button
  list.childNodes.forEach((child) => {
    // HOW TO TOOGLE AREA SELECTED?
    // console.log(child);
  });

  // Fetch the data
  const destinationData = data.find(
    (destinationObj) => destinationObj.name === destination
  );

  //Update image
  image.alt = "The " + destination;
  image.src = destinationData.images.png;
  //Image source NOT WORKING ----------<
  // change source in picture!
  console.log(destinationData.images.png);
  console.log(image.src);

  // Update title
  info.firstElementChild.textContent = destination;

  // Update description
  info.querySelector("#description").textContent = destinationData.description;

  // Update meta-data
  const meta = info.querySelector(".destination-meta");

  meta.querySelector("#distance").textContent = destinationData.distance;
  meta.querySelector("#travel").textContent = destinationData.travel;
};

list.childNodes.forEach((child) => {
  child.addEventListener("click", (e) =>
    changeDestination(child.textContent, e)
  );
});
