const getImage = (idHero, taille, position) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        const image = heroes[idHero].images[taille]
        const imgSource = document.getElementById(`img-perso${position}`)
        imgSource.setAttribute("src",image)
    })
}

const getName = (idHero, position) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        const name = heroes[idHero].name
        const nameSource = document.getElementById(`name-perso${position}`)
        nameSource.innerHTML=name
    })
}

const getStat = (idHero, position) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        const stat = heroes[idHero].powerstats
        const combatSource = document.getElementById(`combat${position}`)
        combatSource.innerHTML=`combat: ${stat["combat"]}`
        const powerSource = document.getElementById(`power${position}`)
        powerSource.innerHTML=`power: ${stat["power"]}`
        const intelSource = document.getElementById(`intelligence${position}`)
        intelSource.innerHTML=`intelligence: ${stat["intelligence"]}`
    })
}

getImage(122,"sm",2)
getName(122,2)
getStat(122,2)
getImage(562, "sm", 4)
getName(562,4)
getStat(562,4)

