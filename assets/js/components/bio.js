// Avvio creazione
document.addEventListener("DOMContentLoaded", bio);

function bio(){

    // Creazione bio
    let bio = document.createElement("article");
    let figAvatar = document.createElement("figure");
    let textContainer = document.createElement("div");
    // Inserimento attributo
    bio.setAttribute("id", "bio");
    figAvatar.setAttribute("id", "avatar-container");
    textContainer.setAttribute("id", "bio-container");
    // Inserimento nella section
    document.querySelector("#Biography").querySelector("h2").after(bio);
    document.querySelector("#bio").append(figAvatar);
    document.querySelector("#bio").append(textContainer);

}