// définition de tous les éléments Html utiles au programme
const nameA = document.getElementById("name-A")
const imgSourceCombattantA = document.getElementById("img-A")
const combatA = document.getElementById("combat-A")
const intelligenceA = document.getElementById("intelligence-A")
const powerA = document.getElementById("power-A")
const checkA= document.getElementById("checkA")
const nameB = document.getElementById("name-B")
const imgSourceCombattantB = document.getElementById("img-B")
const combatB = document.getElementById("combat-B")
const intelligenceB = document.getElementById("intelligence-B")
const powerB = document.getElementById("power-B")
const checkB= document.getElementById("checkB")
const buttonsA = document.getElementsByClassName("btn-primary")
const buttonsB = document.getElementsByClassName("btn-success")
const buttonBattle = document.getElementById("btn-danger")

const displayedHeroes = []

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

const battle = () => {

}

const construcObject = () => {
    fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        for (let i=0;i<10; i++) {
            const idAleatoire = Math.floor(Math.random()*562)
            fillHero(heroes, idAleatoire, "sm", i)
            displayedHeroes.push(heroes[idAleatoire])
        }
        console.log(displayedHeroes)
        const copyA = (e) => {
            const indexHero = e.target.id.split('-')[1]
            nameA.innerHTML = displayedHeroes[indexHero].name
            combatA.innerHTML = `Combat : ${displayedHeroes[indexHero].powerstats.combat}`
            powerA.innerHTML = `Power : ${displayedHeroes[indexHero].powerstats.power}`
            intelligenceA.innerHTML = `Intelligence : ${displayedHeroes[indexHero].powerstats.intelligence}`
            const imageCombattantA = displayedHeroes[indexHero].images.sm
            imgSourceCombattantA.setAttribute("src", imageCombattantA)
        }
        const copyB = (e) => {
            const indexHero = e.target.id.split('-')[1]
            nameB.innerHTML = displayedHeroes[indexHero].name
            combatB.innerHTML = `Combat : ${displayedHeroes[indexHero].powerstats.combat}`
            powerB.innerHTML = `Power : ${displayedHeroes[indexHero].powerstats.power}`
            intelligenceB.innerHTML = `Intelligence : ${displayedHeroes[indexHero].powerstats.intelligence}`
            const imageCombattantB = displayedHeroes[indexHero].images.sm
            imgSourceCombattantB.setAttribute("src", imageCombattantB)
        }
        // mise en place des écouteurs sur les boutons du deck A et B
        for (let buttonA of buttonsA) {
            buttonA.addEventListener("click",copyA)
        }
        for (let buttonB of buttonsB) {
            buttonB.addEventListener("click", copyB)
        }
   //     if ((checkA.getAttribute("checked")==="checked") && (checkB.getAttribute("checked")==="checked"))
            buttonBattle.addEventListener("click",battle)
    })
}

// utilisation de la fonction d'initialisation des 2 decks
construcObject()

