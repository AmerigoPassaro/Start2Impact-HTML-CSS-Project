// Avvio creazione
document.addEventListener("DOMContentLoaded", footer);

function footer(){
    // Creazione elementi
    let footer = document.createElement("footer");
    let disclaimer = document.createElement("h3");
    // Inserimento attributi
    disclaimer.innerHTML = copy;
    // Inserimento nella pagina
    document.querySelector("main").after(footer);
    document.querySelector("footer").prepend(disclaimer);
    
}