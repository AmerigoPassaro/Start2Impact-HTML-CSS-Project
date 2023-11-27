// Avvio creazione
document.addEventListener("DOMContentLoaded", portfolio);

function portfolio(){

    // Creazione portfolio
    let portfolio = document.createElement("article");

    // Inserimento attributo
    portfolio.setAttribute("id", "portfolio");


    question.innerHTML = "Vi mostro qualcosa?";
    // Inserimento nella section
    document.querySelector("#PersonalPortfolio").querySelector("h2").after(portfolio);
    // document.querySelector("#container-biotiext").append(question);

}

{/* <section id="section-port">
        <h2>
          Personal<b>Portfolio</b>
        </h2>
        <article id="port">
          <p class="main-question">
            Vi mostro qualcosa?
          </p>
          <p class="main-text">
            Dopo essermi presentato ed avervi detto cosa so fare, ecco qualche dimostrazione.<br>

            <div id="projects-container">

              <div class="project-box">
                <h3>AmerigoPassaro</h3>
                <h4>My personal website</h4>
                <img class="project-picutre" src="assets/img/projects/amerigopassaro.jpg">
                <p class="project-description">
                  Quello su cui state navigando &egrave; il mio primo progetto presente sul mio portfolio.<br>
                  Esso contiene tutte le informazioni su di me e sui miei lavori.<br>
                  Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.
                  <a class="project-link" href="https://github.com/AmerigoPassaro/Start2Impact-HTML-CSS-Project">Repository GitHub</a>
                  <a class="project-link" href="https://www.amerigopassaro.it/">Link al progetto</a>
                </p>
              </div>

              <div class="project-box">
                <h3>MyCounter</h3>
                <h4>A simple counter</h4>
                <img class="project-picutre" src="assets/img/projects/mycounter.jpg">
                <p class="project-description">
                  Lavorando con le basi del JavaScript ho prodotto questo nuovo progetto, sullo stesso stile del primo.<br>
                  Esso si fonda sulla semplice struttura di un contatore.<br>
                  Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.
                  <a class="project-link" href="https://github.com/AmerigoPassaro/Start2Impact-Basic-Javascript-Project">Repository GitHub</a>
                  <a class="project-link" href="https://www.amerigopassaro.it/projects/mycounter/">Link al progetto</a>
                </p>
              </div>

              <div class="project-box">
                <h3>Library</h3>
                <h4>What you want to read</h4>
                <img class="project-picutre" src="assets/img/projects/library.jpg">
                <p class="project-description">
                  Con un JavaScript pi&ugrave; complesso, ho prodotto questo secondo progetto assai interessante.<br>
                  Un modo per ottenere di consigli alla lettura, inserendo solo il genere.<br>
                  Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.
                  <a class="project-link" href="https://github.com/AmerigoPassaro/Start2Impact-Advanced-Javascript-Project">Repository GitHub</a>
                  <a class="project-link" href="https://www.amerigopassaro.it/projects/library/">Link al progetto</a>
                </p>
              </div>

              <div class="project-box">
                <h3>Meditation Time</h3>
                <h4>The time for you</h4>
                <img class="project-picutre" src="assets/img/projects/meditationtime.jpg">
                <p class="project-description">
                  Tramite l'utilizzo della liberia React, mi sono dilettato nella produzione di un timer.<br>
                  Tutti abbiamo bisogno di un po' di tempo per noi stessi e per meditare.<br>
                  Se desiderate vedere il codice trovate tutto sul mio profilo GitHub.
                  <a class="project-link" href="https://github.com/AmerigoPassaro/Start2Impact-React-Project">Repository GitHub</a>
                  <a class="project-link" href="https://amerigopassaro.github.io/Start2Impact-React-Project/">Link al progetto</a>
                </p>
              </div>


            </div>

            Per avere un'idea pi&ugrave; chiara sui miei progetti, &egrave; giusto che vi esponga alcune delle componenti comuni tra tutti questi.<br>
            L'intera struttura <strong>HTML</strong> &egrave; ben strutturata secondo i moderni utilizzi degli elementi sematici, i quali agevolano la navogazione per gli screen reader.<br>
            Il layout &egrave; gestito da pi&ugrave; fogli di stile in <strong>CSS</strong>, i quali sono suddivisi per ogni sezione della pagina, cos&igrave; da rendere pi&ugrave; agevole la consulatazione da parte di sviluppatori esterni.<br>
            Inoltre &egrave; presenta la pi&ugrave; che comoda tecnologia di layout <strgon>responsive</strong>, che si adatta al formato desktop e mobile.<br>
            Per ultimo, ma non per importanza, vorrei evidenziare l'utilizzo di <strong>meta tag</strong> utili per una buona indicizzazione, l'utilizzo dei tag <strong>Open Graph</strong> per una migliore interfaccia con i social newtowrk.
          </p>
        </article>
      </section> */}