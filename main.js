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

getImage(127,"md",2)
getName(127,2)

