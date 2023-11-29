function createPro(){

    for(let i = 0; i < Object.keys(project.porjectInfo).length; i++){
        // Creazione voce del menu
        let boxProject = document.createElement("div");
        let titleP = document.createElement("h3");
        let subP = document.createElement("h4");
        let prevP = document.createElement("img");
        let desP = document.createElement("p");
        let repoP = document.createElement("a");
        let pageP = document.createElement("a");
        // Inserimento attributi
        boxProject.setAttribute("class", "project-box");
        prevP.setAttribute("class", "project-picutre");
        prevP.setAttribute("src", project.porjectInfo[i].preview);
        desP.setAttribute("class", "project-description");
        repoP.setAttribute("class", "project-link");
        repoP.setAttribute("href", project.porjectInfo[i].repository);
        pageP.setAttribute("class", "project-link");
        pageP.setAttribute("href", project.porjectInfo[i].page);
        // Inserimento valore
        titleP.innerHTML = project.porjectInfo[i].namePorject;
        subP.innerHTML = project.porjectInfo[i].subtitle;
        desP.innerHTML = project.porjectInfo[i].description;
        repoP.innerHTML = "repository";
        pageP.innerHTML = "link al progetto";
        // Inserimento nel nav
        document.querySelector("#projects-container").append(boxProject);
        document.querySelectorAll(".project-box")[i].append(titleP);
        document.querySelectorAll("h3")[i].after(subP);
        document.querySelectorAll("h4")[i].after(prevP);
        document.querySelectorAll(".project-box")[i].querySelector("img").after(desP);
        document.querySelectorAll(".project-description")[i].after(repoP);
        document.querySelectorAll(".project-description")[i].after(pageP);
    }

}