let sections = ["Biography", "DevelopmentSkills", "PersonalPortfolio"]

// Avvio creazione
document.addEventListener("DOMContentLoaded", section);

function section(){

    for(let i = 0; i < sections.length; i++){
        // Creazione elementi
        let section = document.createElement("section");
        let titleS = document.createElement("h2");
        // Inserimento attributi
        section.setAttribute("id", `${sections[i]}`);
        titleS.innerHTML = sections[i];
        // Inserimento nella pagina
        document.querySelector("main").append(section);
        document.querySelector(`#${sections[i]}`).prepend(titleS);
    }

}
