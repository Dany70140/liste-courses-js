// Liste de courses

const formulaire = document.querySelector("#formulaire")
const ajouterBtn = document.querySelector("#ajouter-btn")
const enfant = document.querySelector("#liste")
const resteBtn = document.querySelector("#reset-btn")

ajouterBtn.addEventListener("click", () => {
    const course = formulaire.course.value.trim()
    if (!formulaire.checkValidity()) {
        // Ajouter dynamiquement la classe qui s'appelle "was-validated" de boostrap
        formulaire.classList.add("was-validated")
        return
    }
    const h2 = document.createElement("h2")
        h2.classList.add("flex-row")
        h2.textContent =
        `Achats : ${course}`
    enfant.appendChild(h2)
    const button = document.createElement("button")
    button.classList.add("btn")
    button.classList.add("btn-danger")
    button.classList.add("me-5")

    button.textContent =
        `supprimer`
    enfant.appendChild(button)
})

resteBtn.addEventListener("click", () => {
    test.remove()
})


