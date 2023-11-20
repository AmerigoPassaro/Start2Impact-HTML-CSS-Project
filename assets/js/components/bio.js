// Avvio creazione
document.addEventListener("DOMContentLoaded", bio);

function bio(){

    // Creazione bio
    let bio = document.createElement("article");
    let figAvatar = document.createElement("figure");
    let textContainer = document.createElement("div")
    // Inserimento attributo
    bio.setAttribute("id", "bio");
    figAvatar.setAttribute("id", "avatar-container");
    textContainer.setAttribute("id", "bio-container");
    // Inserimento nella section
    document.querySelector("#Biography").querySelector("h2").after(bio);
    document.querySelector("#bio").append(figAvatar);
    document.querySelector("#bio").append(textContainer);

}


//   <section>
    //     <h2>
    //       <b>Bio</b>graphy
    //     </h2>
    //     <article id="bio">
    //       <figure>
    //         <img id="avatar" src="assets/img/avatar.jpg">
    //         <p id="social">
    //           <a href="https://www.instagram.com/amerigo_passaro/"><img class="social-icon" src="assets/img/social/ig.svg"></a>
    //           <a href="https://www.linkedin.com/in/amerigo-passaro-280162152/"><img class="social-icon" src="assets/img/social/in.svg"></a>
    //           <a href="https://github.com/AmerigoPassaro"><img class="social-icon" src="assets/img/social/git.svg"></a>
    //         </p>
    //       </figure>
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