const getImage = (objetHeros, idHero, taille, position) => {
        const image = objetHeros[idHero].images[taille]
        const imgSource = document.getElementById(`img-perso${position}`)
   /*     if (imgsource)  // si j'ai une balise img avec le bon id dans le html
            imgSource.setAttribute("src",image)
        else
            imgSource.setAttribute("src",`http://via.placeholder.com/350x150/?text='sorry, no images'`)*/
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

const fillHero = (idHero, taille, position) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        getImage(heroes,idHero,taille,position)
        getName(heroes,idHero, position)
        getStat(heroes,idHero, position)
    })
}


for (let i=0;i<10; i++) {
    const idAleatoire = Math.floor(Math.random()*562)
    fillHero(idAleatoire,"sm", i)
}

