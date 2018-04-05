const getImage = (idHero, taille) => {
    const heroes = fetch ("https://akabab.github.io/superhero-api/api/all.json")
    .then(res => res.json())
    .then(heroes => {
        console.log(heroes[idHero].images[taille])
    })
}



getImage(2,"xs")

