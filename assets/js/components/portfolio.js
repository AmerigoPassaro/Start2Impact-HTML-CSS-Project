// Avvio creazione
document.addEventListener("DOMContentLoaded", portfolio);

function portfolio(){

    // Creazione portfolio
    let portfolio = document.createElement("p");
    let projCont = document.createElement("div");
    let expP = document.createElement("p");
    // Inserimento attributo
    portfolio.setAttribute("id", "portfolio");
    projCont.setAttribute("id", "projects-container");
    expP.setAttribute("id", "projects-exp");
    // Inserimento contneuto
    portfolio.innerHTML = "Dopo essermi presentato ed avervi detto cosa so fare, ecco qualche dimostrazione." ;
    expP.innerHTML = `Per avere un'idea pi&ugrave; chiara sui miei progetti, &egrave; giusto che vi esponga alcune delle componenti comuni tra tutti questi.<br>
    L'intera struttura <strong>HTML</strong> &egrave; ben strutturata secondo i moderni utilizzi degli elementi sematici, i quali agevolano la navogazione per gli screen reader.<br>
    Il layout &egrave; gestito da pi&ugrave; fogli di stile in <strong>CSS</strong>, i quali sono suddivisi per ogni sezione della pagina, cos&igrave; da rendere pi&ugrave; agevole la consulatazione da parte di sviluppatori esterni.<br>
    Inoltre &egrave; presenta la pi&ugrave; che comoda tecnologia di layout <strgon>responsive</strong>, che si adatta al formato desktop e mobile.<br>
    Per ultimo, ma non per importanza, vorrei evidenziare l'utilizzo di <strong>meta tag</strong> utili per una buona indicizzazione, l'utilizzo dei tag <strong>Open Graph</strong> per una migliore interfaccia con i social newtowrk.` ;
    // Inserimento nella section
    document.querySelector("#container-PersonalPortfolio").querySelector(".main-question").after(portfolio);
    document.querySelector("#portfolio").after(projCont);
    createPro();
    ocument.querySelector("#projects-container").after(expP);
}