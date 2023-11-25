// Avvio creazione
document.addEventListener("DOMContentLoaded", skill);

function skill(){

    // Creazione bio
    let skill = document.createElement("article");
    // Inserimento attributo
    skill.setAttribute("id", "skill");
    // Inserimento nella section
    document.querySelector("#DevelopmentSkills").querySelector("h2").after(skill);

}