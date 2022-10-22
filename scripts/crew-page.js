const data = [
  {
    name: "Douglas Hurley",
    images: {
      png: "../assets/crew/image-douglas-hurley.png",
      webp: "../assets/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    images: {
      png: "../assets/crew/image-mark-shuttleworth.png",
      webp: "../assets/crew/image-mark-shuttleworth.webp",
    },
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    images: {
      png: "../assets/crew/image-victor-glover.png",
      webp: "../assets/crew/image-victor-glover.webp",
    },
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    images: {
      png: "../assets/crew/image-anousheh-ansari.png",
      webp: "../assets/crew/image-anousheh-ansari.webp",
    },
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

const crewList = document.querySelectorAll(".crew-selected");

function selectCrew(e) {
  crewList.forEach((crew) => {
    crew.setAttribute("aria-selected", false);
  });

  e.target.setAttribute("aria-selected", true);
}

const info = document.querySelector(".crew-details");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#img");
const srcImage = document.querySelector("#srcImg");

const changeDisplay = function (title) {
  // Fetch the data
  const pageData = data.find((crew) => crew.role === title.trim());

  //Update image
  image.setAttribute("src", pageData.images.png);
  srcImage.setAttribute("srcset", pageData.images.webp);
  image.alt = pageData.name;

  // Update role
  info.querySelector("#role").textContent = pageData.role;

  // Update Name
  info.querySelector("#name").textContent = pageData.name;

  // Update description
  info.querySelector("#description").textContent = pageData.bio;
};

crewList.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectCrew(e);
    const role = e.target.textContent;
    changeDisplay(role);
  });
});
