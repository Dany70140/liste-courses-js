const formulaire = document.querySelector("#formulaire");
const boutonAjouter = document.querySelector("#ajouter-btn");
const conteneurListe = document.querySelector("#liste");
const boutonReinitialiser = document.querySelector("#reset-btn");
const compteurArticles = {};

boutonAjouter.addEventListener("click", () => {
    const achat = formulaire.course.value.trim();
    const quantite = parseInt(formulaire.quantite.value.trim(), 10);

    if (!formulaire.checkValidity() || achat === "" || quantite < 1) {
        formulaire.classList.add("was-validated");
        return;
    }
    if (compteurArticles[achat]) {
        compteurArticles[achat] += quantite;
    } else {
        compteurArticles[achat] = quantite;
    }

    const articleExistant = document.querySelector(`[data-article="${achat}"]`);
    if (articleExistant) {
        const badge = articleExistant.querySelector(".badge");
        badge.textContent = compteurArticles[achat];
    } else {
        const elementConteneur = document.createElement("div");
        elementConteneur.classList.add("d-flex", "align-items-center", "mb-3");
        elementConteneur.setAttribute("data-article", achat);

        const titreAchat = document.createElement("h2");
        titreAchat.classList.add("test", "me-3");
        titreAchat.textContent = `- ${achat}`;

        const badge = document.createElement("span");
        badge.classList.add("badge", "bg-primary", "ms-2");
        badge.style.fontSize = "0.8rem";
        badge.style.padding = "0.2em 0.4em";
        badge.textContent = compteurArticles[achat];
        titreAchat.appendChild(badge);


        const boutonAjouterElement = document.createElement("button");
        boutonAjouterElement.classList.add("btn", "btn-success", "me-2");
        boutonAjouterElement.textContent = "Ajouter";

        const boutonAcheter = document.createElement("button");
        boutonAcheter.classList.add("btn", "btn-warning", "me-2");
        boutonAcheter.textContent = "Acheter";


        const boutonSupprimer = document.createElement("button");
        boutonSupprimer.classList.add("btn", "btn-danger");
        boutonSupprimer.textContent = "Supprimer";
        elementConteneur.appendChild(titreAchat);

        elementConteneur.appendChild(boutonAjouterElement);
        elementConteneur.appendChild(boutonAcheter);
        elementConteneur.appendChild(boutonSupprimer);

        conteneurListe.appendChild(elementConteneur);
        boutonAcheter.addEventListener("click", () => {
            titreAchat.classList.toggle("text-decoration-line-through");
        });

        boutonAjouterElement.addEventListener("click", () => {
            compteurArticles[achat]++;
            badge.textContent = compteurArticles[achat];
        });

        boutonSupprimer.addEventListener("click", () => {
            compteurArticles[achat]--;
            if (compteurArticles[achat] === 0) {
                delete compteurArticles[achat];
                elementConteneur.remove();
            } else {
                badge.textContent = compteurArticles[achat];
            }
        });
    }
    formulaire.course.value = "";
    formulaire.quantite.value = 1;
});

boutonReinitialiser.addEventListener("click", () => {
    conteneurListe.innerHTML = "";
    for (const article in compteurArticles) {
        delete compteurArticles[article];
    }
});
