let currentPokemon = ""


async function pokeFetch() {

    var pokemonName = document.getElementById("pokemonInput").value;

    // Data sections

    const pName = document.getElementById("pName")
    const pImg = document.getElementById("pImg") 
    const pSound = document.getElementById("pSound")
    

    var response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    var pokeData = await response.json();

    pName.innerHTML = pokeData.name
    pImg.src = pokeData.sprites.front_default
    pSound.innerHTML = ""
    pSound.innerHTML = `
    <audio controls>
            <source src=${pokeData.cries.latest} type="audio/ogg"
            Your browser does not support the audio tag.
    </audio>
    `

    currentPokemon = pokeData.name;
    

    for (var i = 1; i < 5; i++) {
        var moveDropdown = document.getElementById(`move${i}`)

        for (var j = 0; j < pokeData.moves.length; j++) {
             moveDropdown.innerHTML = moveDropdown.innerHTML + `<option id=${pokeData.moves[j].move.name}>${pokeData.moves[j].move.name}</option>`
        }

    }


}



function addToTeam() {
    const pokeTable = document.getElementById("teamContainer")

    pokeTable.innerHTML = pokeTable.innerHTML + 
    `<article class="teamTable">
        <img width="150px" src="${document.getElementById("pImg").src}">
        <h2>${currentPokemon}</h2>
        <ul>
            <li id="tmove1">${document.getElementById("move1").value}</li>
            <li id="tmove2">${document.getElementById("move2").value}</li>
            <li id="tmove3">${document.getElementById("move3").value}</li>
            <li id="tmove4">${document.getElementById("move4").value}</li>
        </ul>
    </artcle>`
}