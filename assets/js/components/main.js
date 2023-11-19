// Avvio creazione
document.addEventListener("DOMContentLoaded", main);

function main(){
    // Creazione elementi
    let main = document.createElement("main");
    // Inserimento nella pagina
    document.querySelector("header").after(main);
    
}