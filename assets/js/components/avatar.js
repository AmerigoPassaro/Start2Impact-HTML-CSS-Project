let socials = ["https://www.instagram.com/amerigo_passaro/", "https://www.linkedin.com/in/amerigo-passaro-280162152/", "https://github.com/AmerigoPassaro"]
let iconS = ["assets/img/social/ig.svg", "assets/img/social/in.svg", "assets/img/social/git.svg"]


// Avvio creazione
document.addEventListener("DOMContentLoaded", avatar);

function avatar(){

    // Creazione avatar
    let avatar = document.createElement("img");
    let socialCont = document.createElement("p");
    // Inserimento attributo
    avatar.setAttribute("id", "avatar");
    avatar.setAttribute("src", "assets/img/avatar.jpg");
    socialCont.setAttribute("id", "social");
    // Inserimento nella section
    document.querySelector("#bio-container").append(avatar);
    document.querySelector("#bio-container").append(socialCont);
    for(let i = 0; i < socials.length; i++){
        // Creazione griglia social
        let siocialLink = document.createElement("a");
        let socialIcon = document.createElement("img");
        // Inserimento attributo
        siocialLink.setAttribute("id", `social${[1]}`);
        siocialLink.setAttribute("href", socials[i]);
        socialIcon.setAttribute("class", "social-icon");
        socialIcon.setAttribute("src", iconS[i]);
        // Inserimento  nella griglia
        document.querySelector("#social").append(siocialLink);
        document.querySelector(`#social${[1]}`).append(socialIcon);
    }

}