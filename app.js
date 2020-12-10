const rouge = document.querySelector(".faible");
const orange = document.querySelector(".moyen");
const vert = document.querySelector(".fort");
const text = document.querySelector(".text");
const champ = document.querySelector(".motDePasse");
const btn = document.querySelector(".btn");

btn.addEventListener("mousedown",(e)=> {
  e.preventDefault();
  champ.type= "text";
})


champ.addEventListener("keyup",(e)=> {
  verifMDP(champ.value);
})

let verifMDP = (motDePasse) => {
  text.innerHTML = motDePasse;
}