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