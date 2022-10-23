const data = [
  {
    name: "Launch vehicle",
    images: {
      portrait: "../assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "../assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: "Spaceport",
    images: {
      portrait: "../assets/technology/image-spaceport-portrait.jpg",
      landscape: "../assets/technology/image-spaceport-landscape.jpg",
    },
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: "Space capsule",
    images: {
      portrait: "../assets/technology/image-space-capsule-portrait.jpg",
      landscape: "../assets/technology/image-space-capsule-landscape.jpg",
    },
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

const technologyList = document.querySelectorAll(".technology-selected");

function selectTechnology(e) {
  technologyList.forEach((technology) => {
    technology.setAttribute("aria-selected", false);
  });

  e.target.setAttribute("aria-selected", true);
}

const info = document.querySelector(".technology-details");
const name = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#img");

const changeDisplay = function (title) {
  // Fetch the data
  const pageData = data.find((technology) => technology.name === title);

  //Update image
  image.setAttribute("src", pageData.images.portrait);
  image.alt = pageData.name;

  // Update Name
  info.querySelector("#name").textContent = pageData.name;

  // Update description
  info.querySelector("#description").textContent = pageData.description;
};

technologyList.forEach((item) => {
  item.addEventListener("click", (e) => {
    selectTechnology(e);
    const title = e.target.textContent.trim().slice(1);
    changeDisplay(title);
  });
});
