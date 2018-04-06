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
    fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        const displayedHeroes = []
        for (let i=0;i<10; i++) {
            const idAleatoire = Math.floor(Math.random()*562)
            fillHero(heroes, idAleatoire, "sm", i)
            displayedHeroes.push(heroes[idAleatoire])
        }
        console.log(displayedHeroes)
        const copyA = (e) => {
            console.log("copyA")
            console.log("index of the selected hero: ",e.target.id.split('-')[1])
            const indexHero = e.target.id.split('-')[1]
            console.log("selected hero: ", displayedHeroes[indexHero])
            const nameA = document.getElementById("name-A")
            nameA.innerHTML = displayedHeroes[indexHero].name
            const combatA = document.getElementById("combat-A")
            combatA.innerHTML = `Combat : ${displayedHeroes[indexHero].powerstats.combat}`
            const powerA = document.getElementById("power-A")
            powerA.innerHTML = `Power : ${displayedHeroes[indexHero].powerstats.power}`
            const intelligenceA = document.getElementById("intelligence-A")
            intelligenceA.innerHTML = `Intelligence : ${displayedHeroes[indexHero].powerstats.intelligence}`
            const imageCombattantA = displayedHeroes[indexHero].images.sm
            const imgSourceCombattantA = document.getElementById("img-A")
            imgSourceCombattantA.setAttribute("src", imageCombattantA)
        }
        const copyB = (e) => {
            console.log("copyB")
            console.log("index of the selected hero: ", e.target.id.split('-')[1])
            const indexHero = e.target.id.split('-')[1]
            console.log("selected hero: ", displayedHeroes[indexHero])
            const nameB = document.getElementById("name-B")
            nameB.innerHTML = displayedHeroes[indexHero].name
            const combatB = document.getElementById("combat-B")
            combatB.innerHTML = `Combat : ${displayedHeroes[indexHero].powerstats.combat}`
            const powerB = document.getElementById("power-B")
            powerB.innerHTML = `Power : ${displayedHeroes[indexHero].powerstats.power}`
            const intelligenceB = document.getElementById("intelligence-B")
            intelligenceB.innerHTML = `Intelligence : ${displayedHeroes[indexHero].powerstats.intelligence}`
            const imageCombattantB = displayedHeroes[indexHero].images.sm
            const imgSourceCombattantB = document.getElementById("img-B")
            imgSourceCombattantB.setAttribute("src", imageCombattantB)
        }
        // mise en place des écouteurs sur les boutons du deck A
        const buttonsA = document.getElementsByClassName("btn-primary")
        const buttonsB = document.getElementsByClassName("btn-success")
        
        for (let buttonA of buttonsA) {
            buttonA.addEventListener("click",copyA)
        }
        for (let buttonB of buttonsB) {
            buttonB.addEventListener("click", copyB)
        }
    })
}



// utilisation de la fonction d'initialisation des 2 decks
construcObject()

