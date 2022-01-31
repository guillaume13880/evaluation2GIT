let modalContainer = document.querySelector(".modalContain");
let modalTriggers = document.querySelectorAll(".modal-trigger");
//bouton sécuriser
let buttonSecuriser = document.querySelector("#btnSecuriser");
//recuperer le bouton nouvelle partie
let newGame = document.querySelector("#btnNewGame");
//recupere le bouton lancer
let buttonLancer = document.querySelector("#btnLancer");
//recupere la div de mon dé
let dés = document.querySelector("#imagesDés");
//recupere la div de player 1
let titrePlayer1 = document.querySelector("#titreJoueur1");
let joueur = "player1";
//recupere la div de player 2
let titrePlayer2 = document.getElementById("titreJoueur2");
//recupere le score global de player 1
let scoreGlobal1 = document.querySelector("#GLOBAL");
let globalSecuriser1 = 0;
let globalSecuriser2 = 0;
//recupere le score global de player 2
let scoreGlobal2 = document.querySelector("#GLOBAL2");
//recupere le premier round
let round1 = document.querySelector("#roundPlayer1");
let compteurRound1 = 0;
let compteurRound2 = 0;
//recupe deuxieme round
let round2 = document.querySelector("#roundPlayer2");
let winner = "WINNER";
let loose = "LOOSE";

//affichage modal regle
modalTriggers.forEach((trigger) =>
  trigger.addEventListener("click", toggleModal)
);

function toggleModal() {
  modalContainer.classList.toggle("active");
}

//ecouteur nouvelle partie
newGame.addEventListener("click", function () {
  if (globalSecuriser1 >= 1) {
    scoreGlobal2.textContent = 0;
    globalSecuriser2 = 0;
    scoreGlobal1.textContent = 0;
    globalSecuriser1 = 0;
    compteurRound1 = 0;
    round1.textContent = compteurRound1;
    compteurRound2 = 0;
    round2.textContent = compteurRound2;
    titrePlayer1.style.border = "solid red 4px";
    scoreGlobal1.style.color = "red";
  }
  if (globalSecuriser2 >= 1) {
    scoreGlobal2.textContent = 0;
    globalSecuriser2 = 0;
    scoreGlobal1.textContent = 0;
    globalSecuriser1 = 0;
    compteurRound1 = 0;
    round1.textContent = compteurRound1;
    compteurRound2 = 0;
    round2.textContent = compteurRound2;
    titrePlayer1.style.border = "solid red 4px";
    scoreGlobal2.style.color = "red";
  }
  dés.style.opacity = "1";
  titrePlayer1.style.border = "solid red 4px";
  titrePlayer2.style.border = "solid black 2px";
  scoreGlobal1.style.opacity = "1";
  scoreGlobal2.style.opacity = "1";
});

//fonction qui retourne un nombre aléatoire
const lancerDeDé = function () {
  //génére un nombre entre 1 et 6
  const nombreDecimal = Math.random() * 6 + 1;
  //coupe de nombre en entier
  const nombre = Math.trunc(nombreDecimal);

  return nombre;
};

const clickSurBouton = function () {
  //lancer le dé est recupere le resultat
  const resultat = lancerDeDé();
  //recupere l'image
  const image = document.querySelector("#images6Face");
  //rajoute l'attribut source avec le résultat
  image.src = "img/face" + resultat + ".jpeg";

  if (joueur == "player1") {
    if (resultat === 1) {
      joueur = "player2";
      compteurRound2 = compteurRound2 + resultat;
      round2.textContent = compteurRound2;
      titrePlayer2.style.border = "solid red 4px";
      titrePlayer1.style.border = "solid black 2px";
      compteurRound1 = 0;
      round1.textContent = compteurRound1;
    } else {
      joueur = "player1";
      compteurRound1 = compteurRound1 + resultat;
      round1.textContent = compteurRound1;
      titrePlayer2.style.border = "solid black 2px";
      titrePlayer1.style.border = "solid red 4px";
      compteurRound2 = 0;
      round2.textContent = compteurRound2;
    }
  } else if (joueur == "player2") {
    if (resultat === 1) {
      joueur = "player1";
      compteurRound1 = compteurRound1 + resultat;
      round1.textContent = compteurRound1;
      titrePlayer2.style.border = "solid black 2px";
      titrePlayer1.style.border = "solid red 4px";
      compteurRound2 = 0;
      round2.textContent = compteurRound2;
    } else {
      joueur = "player2";
      compteurRound2 = compteurRound2 + resultat;
      round2.textContent = compteurRound2;
      titrePlayer2.style.border = "solid red 4px";
      titrePlayer1.style.border = "solid black 2px";
      compteurRound1 = 0;
      round1.textContent = compteurRound1;
    }
  }
};

const clickSurSecuriser = function () {
  //secure les points player1
  if (joueur === "player1") {
    joueur = "player2";
    titrePlayer2.style.border = "solid red 4px";
    titrePlayer1.style.border = "solid black 2px";
    globalSecuriser1 += compteurRound1;
    scoreGlobal1.textContent = globalSecuriser1;
    compteurRound1 = 0;
    round1.textContent = compteurRound1;
    if (globalSecuriser1 >= 100) {
      scoreGlobal1.textContent = winner;
      titrePlayer1.style.border = "solid yellow 4px";
      titrePlayer2.style.border = "solid black 2px";
      scoreGlobal1.style.color = "yellow";
      scoreGlobal2.textContent = loose;
    }
  } else {
    //secure les points player2
    joueur = "player1";
    titrePlayer2.style.border = "solid black 2px";
    titrePlayer1.style.border = "solid red 4px";
    globalSecuriser2 += compteurRound2;
    scoreGlobal2.textContent = globalSecuriser2;
    compteurRound2 = 0;
    round2.textContent = compteurRound2;
    if (globalSecuriser2 >= 100) {
      scoreGlobal2.textContent = winner;
      titrePlayer2.style.border = "solid yellow 4px";
      titrePlayer1.style.border = "solid black 2px";
      scoreGlobal2.style.color = "yellow";
      scoreGlobal1.textContent = loose;
    }
  }
};

// ecoute le lancer de dé au click
buttonLancer.addEventListener("click", clickSurBouton);
//ecoute  le bouton securiser
buttonSecuriser.addEventListener("click", clickSurSecuriser);
