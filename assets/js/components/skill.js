// Avvio creazione
document.addEventListener("DOMContentLoaded", skill);

function skill(){

    // Creazione skill
    let skillIntro = document.createElement("p");
    let listSkill = document.createElement("ul");
    // Inserimento attributo
    skillIntro.setAttribute("id", "skill-intro");
    listSkill.setAttribute("id", "skill-list");
    // Inserimento contneuto
    skillIntro.innerHTML = "Ecco una lista delle mie skill relative allo sviluppo web:"
    // Inserimento nella section
    document.querySelector("#container-DevelopmentSkills").querySelector(".main-question").after(skillIntro);
    document.querySelector("#container-DevelopmentSkills").querySelector("#skill-intro").after(listSkill);
    // Gestione skill
    for(let i = 0; i < skills.length; i++){
        // Creazione voce del menu
        let sItem = document.createElement("li");
        // Inserimento attributi
        sItem.setAttribute("class", "skill-item");
        sItem.innerHTML = `${skills[i]}`;
        // Inserimento nel nav
        document.querySelector("#skill-list").append(sItem);
    }
    
}