//  etapes :

// - dictionnaire de mots fr à télécharger


// - choisir un mot random
// Réinitialisation
function newGame(type, data){
    // On vide les différents champs de texte
    penduField.innerHTML = ''   
    msgField.innerHTML = ''     
    penduField.className=""     

    // On réinitialise toutes les variables
    let wordArray = [];
    let pendu = [];

    let found = 0;
    let attempt = 0;
    let inputs = [];
    let gameIsOver = false;
    let word = ""
    if (type == "array"){
        // On prend un mot aléatoire dans le tableau des mots
        let rand = Math.floor(Math.random() * data.words.length)
        word = data.words[rand]
        log(`Mot numéro ${rand}`)
    } else { // Si on éxécute la fonction avec un argument, il récupérera cette valeur en tant que ce mot à trouver
        word = data
    }
}

// - mini prompt qui indique le nombre de lettre du mots + choix de la lettre

console.log(''.concat("Le mot à trouver fait :", mot_a_trouver.length()," caractères"))
let answer = console.log("Tapez 1 pour choisir une lettre ou tapez 2 pour trouver le mot ")

let mot_crypte = "_".repeat()
function mot_cache(mot_a_trouver, mot_crypte,  mot_courant, lettre_choisie ){
  let position = mot_a_trouver.indexOf(lettre_choisie) 
  if (position > 0) {

  }
}  // mot à trouver est le mot generé et mot courant est le mot deviné enrichi des précédents choix de lettres

// - rep(" _ ", length(motadeviner) )


// - structure conditionnelles pour checker la lettre
// let choiceLetter = "m"; // choix lettre user
// let wordToGuess = "pomme"; // mot à diviner
// let countTries = 15; 
// let currentGuess = ""

function isInWord(choiceLetter, wordToGuess){  
  
  if (wordToGuess.indexOf(choiceLetter.toLowerCase()) > -1)
  {
    console.log(`${choiceLetter} se trouve dans ${wordToGuess}.`);
    console.log(`${wordToGuess.indexOf(choiceLetter.toLowerCase())}`)
    console.log(`Il vous reste ${countTries} essais.`)

  }
  if (wordToGuess.indexOf(choiceLetter.toLowerCase()) <= -1)
  {
    console.log(`${choiceLetter} ne se trouve pas dans ${wordToGuess}`);

  }
}

isInWord(choiceLetter, wordToGuess)

// essai de mot


// - return nombre d'essais ... —