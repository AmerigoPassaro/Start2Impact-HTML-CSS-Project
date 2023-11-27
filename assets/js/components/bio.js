let textBio = `Mi presento, sono <strong>Amerigo</strong> e sono un <strong>Graphic Deisgner</strong> e un <strong>Frontend Developer</strong>.<br>
Nato a <strong>Caltanissetta</strong>, una piccola citt&agrave; dell'entroterra siciliano, ho conseguito il diploma presso l'ITC "Mario Rapisardi" nell'anno 2013.<br>
Dopo una lunga esperienza come graphic designer all'interno di un'azienda locale, ho deciso di focalizzarmi su una mia vecchia passio, lo sviluppo web.<br>
Per questo ho intrapreso nel 2022 il percorso di sviluppo frontend presso <strong>Start2Impact</strong> e il percorso di ingegneria informatica presso l'universit&agrave; telematica <strong>Universitas Mercatorum</strong>.<br>`

// Avvio creazione
document.addEventListener("DOMContentLoaded", bio);

function bio(){

    // Creazione avatar
    let bio = document.createElement("p");
    // Inserimento attributo
    bio.setAttribute("class", "main-text");
    // Inserimento contneuto
    bio.innerHTML = textBio;
    // Inserimento nella section
    document.querySelector("#container-Biography").querySelector(".main-question").after(bio);

}