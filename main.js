//  etapes :

// - dictionnaire de mots fr à télécharger


// - choisir un mot random


// - mini prompt qui indique le nombre de lettre du mots + choix de la lettre



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


// - return nombre d'essais ... —