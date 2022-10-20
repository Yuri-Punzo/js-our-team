/* CONSEGNA
Utilizzando i dati forniti,
creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1: Trasformare la stringa foto in una immagine effettiva

BONUS 2: Organizzare i singoli membri in card/schede */

const ourTeam = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]

//console.log(ourTeam);

const selection = document.querySelector(".info")

cardsCreator(ourTeam)
function cardsCreator(teamArrayOfObjects) {
    for (let i = 0; i < teamArrayOfObjects.length; i++) {
        const teamMember = teamArrayOfObjects[i];
        //console.log(teamMember);
        cardMarkUp(teamMember)
    }
}

function cardMarkUp(object) {
    const card = document.createElement("div")
    card.classList.add("card", "col")
    selection.append(card)
    card.innerHTML = `<h4>${object.name}</h4> <p>${object.role}</p> <img src="./assets/img/${object.image}" alt="">`
}