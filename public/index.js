let initializePage = () => {
  fetchCat();
  mainContainer();
  container();
  headerDiv();
  catCard();
};

// Your code here
let fetchCat = async () => {
  let res = await fetch("https://api.thecatapi.com/v1/images/search");
  let data = await res.json();
  let url = data[0].url;

  return url;
};

let mainContainer = () => {
  document.body.style.display = "flex";
  document.body.style.justifyContent = "center";
  document.body.style.flexDirection = "column";
  document.body.style.height = "1500px";
  document.body.style.width = "100%";
  document.body.style.alignItems = "center";
  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "mainContainer");
  mainContainer.style.display = "flex";
  mainContainer.style.height = "525px";
  mainContainer.style.width = "1129px";
  mainContainer.style.justifyContent = "center";

  document.body.appendChild(mainContainer);
};

let container = () => {
  let container = document.createElement("div");
  container.setAttribute("class", "class-container");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.justifyContent = "center";
  container.style.alignItems = "center";
  container.style.border = "1px solid black";
  container.style.boxShadow = "1px 1px 3px 1px grey";
  container.style.margin = "50px";
  container.style.height = "100%";
  container.style.width = "100%";

  //   container.style.width = "1129px";
  //   container.style.height = "525px";
  let containerSelector = document.querySelector(".mainContainer");
  containerSelector.appendChild(container);
  //HEADER DIV
};

let headerDiv = () => {
  let headerDiv = document.createElement("h1");
  headerDiv.innerText = "Kitten Pic";
  headerDiv.style.margin = "15px";
  let containerSelector = document.querySelector(".class-container");
  containerSelector.appendChild(headerDiv);
};
//CAT CARD
let catCard = async () => {
  let catCard = document.createElement("img");
  catCard.src = await fetchCat();
  catCard.style.width = "50%";
  catCard.style.height = "50%";
  catCard.style.margin = "25px";
  let containerSelector = document.querySelector(".class-container");
  containerSelector.appendChild(catCard);
};
//Set the img to a specific size
//500x500

// let mainContainer = async () => {

//   let catImg = await fetchCat();

//   //Set the size of container
//   //change it to flex
//   //specify flex attributes

//   //specify its dimensions
//   //append that to the body

//   //set head
// };
window.onload = () => {
  initializePage();
};
