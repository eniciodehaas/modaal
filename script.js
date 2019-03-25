const modaalContent = document.querySelectorAll(".modaalContent");

for (let i = 0; i < modaalContent.length; i++) {
  let modaalNode = modaalContent[i];
  modaalNode.parentNode.removeChild(modaalNode);
}

const modaalKnoppen = document.querySelectorAll(".modaalKnop");
const modaalKnoppenArray = [];

let modaalAchtergrond = document.createElement("div");
modaalAchtergrond.className = "modaal-achtergrond";
let modaal = document.createElement("div");
modaal.className = "modaal";
let sluitKnop = document.createElement("button");
sluitKnop.className = "sluit-knop";
sluitKnop.innerHTML = "&#x00D7;";


const voegContentToe = (event) => {
  const teller = modaalKnoppenArray.indexOf(event.target);
  console.log(teller);
  modaal.appendChild(sluitKnop);
  modaal.appendChild(modaalContent[teller]);
  modaalAchtergrond.appendChild(modaal);
  document.body.appendChild(modaalAchtergrond);
}

const sluitModaal = () => {
  modaal.innerHTML = "";
  modaalAchtergrond.innerHTML = "";
  document.body.removeChild(modaalAchtergrond);
}

sluitKnop.addEventListener('click', sluitModaal);

//zet modaalKnoppen in array en add eventlisteners
for (let i = 0; i < modaalKnoppen.length; i++) {
  //toevoegen
  modaalKnoppenArray.push(modaalKnoppen[i]);
  //klik event
  modaalKnoppen[i].addEventListener('click', voegContentToe);
}
