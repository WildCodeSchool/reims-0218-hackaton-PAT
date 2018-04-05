const getImage = (idHero, taille) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        const image = heroes[idHero].images[taille]
        console.log(image)
    })
}

getImage(2,"xs")

