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
        Name: "Wayne Barnett",
        Role: "Founder & CEO",
        Image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        Name: "Angela Caroll",
        Role: "Chief Editor",
        Image: "angela-caroll-chief-editor.jpg"
    },
    {
        Name: "Walter Gordon",
        Role: "Office Manager",
        Image: "walter-gordon-office-manager.jpg"
    },
    {
        Name: "Angela Lopez",
        Role: "Social Media Manager",
        Image: "angela-lopez-social-media-manager.jpg"
    },
    {
        Name: "Scott Estrada",
        Role: "Developer",
        Image: "scott-estrada-developer.jpg"
    },
    {
        Name: "Barbara Ramos",
        Role: "Graphic Designer",
        Image: "barbara-ramos-graphic-designer.jpg"
    },
]

//console.log(ourTeam);

const selection = document.querySelector(".info")

cardsCreator(ourTeam)
function cardsCreator(teamArrayOfObjects) {
    for (let i = 0; i < teamArrayOfObjects.length; i++) {
        const teamMember = teamArrayOfObjects[i];
        //console.log(teamMember);
        const card = document.createElement("div")
        card.classList.add("card", "col")
        selection.append(card)
        card.innerHTML = `<h4>${teamMember.Name}</h4> <p>${teamMember.Role}</p> <img src="./assets/img/${teamMember.Image}" alt="">`
    }
}