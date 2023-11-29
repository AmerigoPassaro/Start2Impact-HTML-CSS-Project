// Avvio creazione
document.addEventListener("DOMContentLoaded", header);

function header(){
    // Creazione elementi
    let header = document.createElement("header");
    let siteBrand = document.createElement("div");
    let nav = document.createElement("nav");
    let hamMenu = document.createElement("input")
    let menu = document.createElement("ul");
    // Inserimento attributi
    siteBrand.setAttribute("id", "site-brand");
    siteBrand.innerHTML = brand;
    hamMenu.setAttribute("type", "button");
    hamMenu.setAttribute("id", "hambuger-menu")
    menu.setAttribute("id", "menu");
    // Inserimento nella pagina
    document.body.prepend(header);
    document.querySelector("header").prepend(siteBrand);
    document.querySelector("header").append(nav);
    document.querySelector("nav").before(hamMenu);
    // Gestione menu
    for(let i = 0; i < menuItem.length; i++){
        // Creazione voce del menu
        let mItem = document.createElement("li");
        // Inserimento attributi
        mItem.setAttribute("class", "menu-item");
        mItem.innerHTML = `<button>${menuItem[i]}</button>`;
        // Inserimento nel nav
        document.querySelector("nav").append(mItem);
    }   
    
}
