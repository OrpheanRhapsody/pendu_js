//  etapes :

// - dictionnaire de mots fr à télécharger


// - choisir un mot random
// Réinitialisation
function newGame(data){
    // On vide les différents champs de texte
    penduField.innerHTML = ''   
    msgField.innerHTML = ''     
    penduField.className=""     

    // On réinitialise toutes les variables
    wordArray = [];git 
    pendu = [];
    found = 0;
    attempt = 0;
    inputs = [];
    gameIsOver = false;

    // On prend un mot aléatoire dans le tableau des mots
    let rand = Math.floor(Math.random() * data.words.length)
    word = data.words[rand]
    log(`Mot numéro ${rand}`)
    
}

// - mini prompt qui indique le nombre de lettre du mots + choix de la lettre



// - rep(" _ ", length(motadeviner) )


// - structure conditionnelles pour checker la lettre


// - return nombre d'essais ... 