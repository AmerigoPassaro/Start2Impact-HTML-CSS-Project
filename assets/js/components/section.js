// Avvio creazione
document.addEventListener("DOMContentLoaded", section);

function section(){

    for(let i = 0; i < sections.length; i++){
        // Creazione elementi
        let section = document.createElement("section");
        let titleS = document.createElement("h2");
        let containerS = document.createElement("div");
        let articleS = document.createElement("article");
        let question = document.createElement("p");
        // Inserimento attributi
        section.setAttribute("id", `${sections[i]}`);
        titleS.innerHTML = sections[i];
        containerS.setAttribute("id", `container-${sections[i]}`);
        question.setAttribute("class", "main-question");
        // Inserimento valori
        question.innerHTML = questions[i];
        // Inserimento nella pagina
        document.querySelector("main").append(section);
        document.querySelector(`#${sections[i]}`).prepend(titleS);
        document.querySelector(`#${sections[i]}`).querySelector("h2").after(containerS);
        document.querySelector(`#container-${sections[i]}`).append(articleS);
        document.querySelector(`#container-${sections[i]}`).querySelector("article").append(question);
    }

}
