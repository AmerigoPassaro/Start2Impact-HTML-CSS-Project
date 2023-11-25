let skills = ["html", "css", "javascript", "react"];

// Avvio creazione
document.addEventListener("DOMContentLoaded", skillText);

function skillText(){

    // Creazione bio
    let question = document.createElement("p");
    let skillText = document.createElement("p");
    let skillIntro = document.createElement("p");
    let listSkill = document.createElement("ul");
    // Inserimento attributo
    question.setAttribute("class", "main-question");
    skillText.setAttribute("id", "container-skills");
    skillIntro.setAttribute("id", "skill-intro");
    listSkill.setAttribute("id", "skill-list");
    // Inserimento contneuto
    question.innerHTML = "Cosa so fare?";
    skillIntro.innerHTML = "Ecco una lista delle mie skill relative allo sviluppo web:"
    // Inserimento nella section
    document.querySelector("#skill").append(question);
    document.querySelector("#skill").querySelector(".main-question").after(skillText);
    document.querySelector("#skill").querySelector(".main-question").after(skillIntro);
    document.querySelector("#skill").querySelector("#skill-intro").after(listSkill);
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