const getImage = (objetHeros, idHero, taille, position) => {
        const image = objetHeros[idHero].images[taille]
        const imgSource = document.getElementById(`img-perso${position}`)
        imgSource.setAttribute("src",image)
        const hiddenId = document.getElementById(`id${position}`)
        hiddenId.setAttribute("value",idHero)
}

const getName = (objetHero, idHero, position) => {
    const name = objetHero[idHero].name
    const nameSource = document.getElementById(`name-perso${position}`)
    nameSource.innerHTML=name
}


const getStat = (objetHero, idHero, position) => {
    const stat = objetHero[idHero].powerstats
    const combatSource = document.getElementById(`combat${position}`)
    combatSource.innerHTML=`combat: ${stat["combat"]}`
    const powerSource = document.getElementById(`power${position}`)
    powerSource.innerHTML=`power: ${stat["power"]}`
    const intelSource = document.getElementById(`intelligence${position}`)
    intelSource.innerHTML=`intelligence: ${stat["intelligence"]}`
}

const fillHero = (tabHero, idHero, taille, position) => {
    getImage(tabHero,idHero,taille,position)
    getName(tabHero,idHero, position)
    getStat(tabHero,idHero, position)
}

const construcObject = () => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        for (let i=0;i<10; i++) {
            const idAleatoire = Math.floor(Math.random()*562)
            fillHero(heroes, idAleatoire, "sm", i)
        }
    })
}

const copyA = () => {
    
}

// utilisation de la fonction d'initialisation des 2 decks
construcObject()

// mise en place des écouteurs sur les boutons du deck A
const buttonsA = document.getElementsByClassName("btn-primary")
for (let buttonA of buttonsA) {
    buttonA.addEventListener("click",copyA())
}
