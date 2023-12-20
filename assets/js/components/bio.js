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
    for(let i = 1; i < sections.length; i++){
        // Creazione elemento
        let navSection = document.createElement("button");
        // Inserimento attributi
        navSection.setAttribute("id", `${sections[i]}`);
        navSection.setAttribute("class", "nav-section-item");
        // Inserimento valore
        navSection.innerHTML = sections[i];
        // Inserimento nella pagina
        document.querySelector("#container-Biography").querySelector(".main-text").append(navSection);
    }

}