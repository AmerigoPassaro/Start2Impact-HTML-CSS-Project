// Liste di elementi
let project = {
  porjectInfo :
  [
    { 
      namePorject: "AmerigoPassaro",
      subtitle: "My personal website",
      preview: "assets/img/projects/amerigopassaro.jpg",
      description: `Quello su cui state navigando &egrave; il mio primo progetto presente sul mio portfolio.<br>
      Esso contiene tutte le informazioni su di me e sui miei lavori.<br>
      Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.`,
      repository: "https://github.com/AmerigoPassaro/Start2Impact-HTML-CSS-Project",
      page: "https://www.amerigopassaro.it/"
    },
    { 
      namePorject: "MyCounter",
      subtitle: "A simple counter",
      preview: "assets/img/projects/mycounter.jpg",
      description: `Lavorando con le basi del JavaScript ho prodotto questo nuovo progetto, sullo stesso stile del primo.<br>
      Esso si fonda sulla semplice struttura di un contatore.<br>
      Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.`,
      repository: "https://github.com/AmerigoPassaro/Start2Impact-Basic-Javascript-Project",
      page: "https://www.amerigopassaro.it/projects/mycounter/"
    },
    { 
      namePorject: "Library",
      subtitle: "What you want to read",
      preview: "assets/img/projects/library.jpg",
      description: `Con un JavaScript pi&ugrave; complesso, ho prodotto questo secondo progetto assai interessante.<br>
      Un modo per ottenere di consigli alla lettura, inserendo solo il genere.<br>
      Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.`,
      repository: "https://github.com/AmerigoPassaro/Start2Impact-Advanced-Javascript-Project",
      page: "https://www.amerigopassaro.it/projects/library/"
    },
    { 
      namePorject: "Meditation Time",
      subtitle: "The time for you",
      preview: "assets/img/projects/meditationtime.jpg",
      description: `  Tramite l'utilizzo della liberia React, mi sono dilettato nella produzione di un timer.<br>
      Tutti abbiamo bisogno di un po' di tempo per noi stessi e per meditare.<br>
      Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.`,
      repository: "https://github.com/AmerigoPassaro/Start2Impact-React-Project",
      page: "https://amerigopassaro.github.io/Start2Impact-React-Project/"
    },
  ]   

}

// Avvio creazione
document.addEventListener("DOMContentLoaded", portfolio);

function portfolio(){

    // Creazione portfolio
    let portfolio = document.createElement("p");
    let projCont = document.createElement("div")
    // Inserimento attributo
    portfolio.setAttribute("id", "portfolio");
    projCont.setAttribute("id", "projects-container");
    // Inserimento contneuto
    portfolio.innerHTML = "Dopo essermi presentato ed avervi detto cosa so fare, ecco qualche dimostrazione."    
    // Inserimento nella section
    document.querySelector("#container-PersonalPortfolio").querySelector(".main-question").after(portfolio);
    document.querySelector("#portfolio").after(projCont);
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

{/* <section id="section-port">











            </div>

            Per avere un'idea pi&ugrave; chiara sui miei progetti, &egrave; giusto che vi esponga alcune delle componenti comuni tra tutti questi.<br>
            L'intera struttura <strong>HTML</strong> &egrave; ben strutturata secondo i moderni utilizzi degli elementi sematici, i quali agevolano la navogazione per gli screen reader.<br>
            Il layout &egrave; gestito da pi&ugrave; fogli di stile in <strong>CSS</strong>, i quali sono suddivisi per ogni sezione della pagina, cos&igrave; da rendere pi&ugrave; agevole la consulatazione da parte di sviluppatori esterni.<br>
            Inoltre &egrave; presenta la pi&ugrave; che comoda tecnologia di layout <strgon>responsive</strong>, che si adatta al formato desktop e mobile.<br>
            Per ultimo, ma non per importanza, vorrei evidenziare l'utilizzo di <strong>meta tag</strong> utili per una buona indicizzazione, l'utilizzo dei tag <strong>Open Graph</strong> per una migliore interfaccia con i social newtowrk.
          </p>
        </article>
      </section> */}