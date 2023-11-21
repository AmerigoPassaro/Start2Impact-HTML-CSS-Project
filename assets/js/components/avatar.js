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

//   <section>
    //     <h2>
    //       <b>Bio</b>graphy
    //     </h2>
    //     <article id="bio">
    //       <div>
    //         <p class="main-question">
    //           Chi sono?
    //         </p>
    //         <p class="main-text">
    //           Mi presento, sono <strong>Amerigo</strong> e sono un <strong>Graphic Deisgner</strong> e un <strong>Frontend Developer</strong>.<br>
    //           Nato a <strong>Caltanissetta</strong>, una piccola citt&agrave; dell'entroterra siciliano, ho conseguito il diploma presso l'ITC "Mario Rapisardi" nell'anno 2013.<br>
    //           Dopo una lunga esperienza come graphic designer all'interno di un'azienda locale, ho deciso di focalizzarmi su una mia vecchia passio, lo sviluppo web.<br>
    //           Per questo ho intrapreso nel 2022 il percorso di sviluppo frontend presso <strong>Start2Impact</strong> e il percorso di ingegneria informatica presso l'universit&agrave; telematica <strong>Universitas Mercatorum</strong>.<br>
    //         </p>

    //       </div>
    //     </article>
    //   </section>