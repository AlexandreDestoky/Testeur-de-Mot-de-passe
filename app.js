const rouge = document.querySelector(".faible");
const orange = document.querySelector(".moyen");
const vert = document.querySelector(".fort");
const text = document.querySelector(".text");
const champ = document.querySelector(".motDePasse");
const btn = document.querySelector(".btn");

let carSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

//Lorsqu'on clique sur l'oeil on voit le mot de passe
btn.addEventListener("mousedown", (e) => {
  e.preventDefault();
  champ.type = "text";
});

champ.addEventListener("keyup", (e) => {
  verifMDP(champ.value);
});

let verifMDP = (motDePasse) => {
  let cpt = 0;
  let min = false;
  let maj = false;

  //TEST Niveau 1 : longueur >= a -
  if(motDePasse.length >= 8) {
    cpt++;
  }

  //TEST Niveua 2 : contient caractères spécial
  if(carSpecial.test(motDePasse)){
    cpt++;
  }

  //TEST Niveau 3 = contient au moins une lettre minuscule et majuscule
  tabLettres = motDePasse.split("");
  tabLettres.forEach((lettre) => {
    if (lettre.match(/[A-Z]/)) {
      min = true;
    } else if (lettre.match(/[a-z]/)) {
      maj = true;
    }
  });
  if (min == true && maj == true) {
    cpt++;
  }

  switch (cpt) {
    case 1:
      rouge.style.visibility = "visible";
      break;
    case 2:
      rouge.style.visibility = "visible";
      orange.style.visibility = "visible";
      break;
    case 3:
      rouge.style.visibility = "visible";
      orange.style.visibility = "visible";
      vert.style.visibility = "visible";
      break;

    default:
      break;
  }
};
