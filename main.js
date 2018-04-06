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
const idA = document.getElementById("idA")
const idB = document.getElementById("idB")
const resultatBattle = document.getElementById("battle")
const titleResult = document.getElementById("result")
const lifeA = document.getElementById("life-A")
const namePlayerA = document.getElementById("namePlayerA").value
const lifeB = document.getElementById("life-B")
const namePlayerB = document.getElementById("namePlayerB").value

//tableau des 10 héros des 2 decks
const displayedHeroes = []

// conditions initiales
let vieA = 300
let vieB = 300

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
    const combattantA = parseInt(idA.getAttribute("value"))
    const combattantB = parseInt(idB.getAttribute("value"))
    let perdant = ""
    const diffCombat=displayedHeroes[combattantA].powerstats.combat-displayedHeroes[combattantB].powerstats.combat
    const diffPower=displayedHeroes[combattantA].powerstats.power-displayedHeroes[combattantB].powerstats.power
    const diffIntelligence=displayedHeroes[combattantA].powerstats.intelligence-displayedHeroes[combattantB].powerstats.intelligence
    const diff = diffCombat+diffPower+diffIntelligence
    if (diff>0) {
        vieB -= Math.abs(diff)
        perdant = 'B'
    }
    else if (diff<0) {
        vieA -= Math.abs(diff)
        perdant = 'A'
    }
    else {
        perdant = '-'
    }

    if (perdant!='-') {
        resultatBattle.innerHTML=`le joueur ${perdant} a perdu ${Math.abs(diff)} points de vie`
        titleResult.innerHTML=`Resultat`
    }
    lifeA.innerHTML=`Vie de ${namePlayerA}: ${vieA}`
    lifeB.innerHTML=`Vie de ${namePlayerB}: ${vieB}` 

    let contenuResultatBattle = resultatBattle.innerHTML
    if (vieA <= 0 || vieB <= 0) {
        contenuResultatBattle += `<hr>gagnant: ${(vieA < vieB) ? namePlayerB : namePlayerA}`
        resultatBattle.innerHTML = contenuResultatBattle
        } 
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
            // pour se souvenir de l'index du combattant A
            idA.setAttribute("value",indexHero)
        }
        const copyB = (e) => {
            const indexHero = e.target.id.split('-')[1]
            nameB.innerHTML = displayedHeroes[indexHero].name
            combatB.innerHTML = `Combat : ${displayedHeroes[indexHero].powerstats.combat}`
            powerB.innerHTML = `Power : ${displayedHeroes[indexHero].powerstats.power}`
            intelligenceB.innerHTML = `Intelligence : ${displayedHeroes[indexHero].powerstats.intelligence}`
            const imageCombattantB = displayedHeroes[indexHero].images.sm
            imgSourceCombattantB.setAttribute("src", imageCombattantB)
            // pour se souvenir de l'index du combattant B
            idB.setAttribute("value",indexHero)
        }
        // mise en place des écouteurs sur les boutons du deck A et B
        for (let buttonA of buttonsA) {
            buttonA.addEventListener("click",copyA)
        }
        for (let buttonB of buttonsB) {
            buttonB.addEventListener("click", copyB)
        }
            buttonBattle.addEventListener("click",battle)
    })
}

// utilisation de la fonction d'initialisation des 2 decks

    construcObject()


