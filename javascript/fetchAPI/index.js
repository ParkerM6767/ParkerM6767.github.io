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
    pSound.innerHTML = pSound.innerHTML + `<source src=${pokeData.cries.latest} type="audio/ogg">`

    currentPokemon = pokeData.name;
    

    for (var i = 1; i < 5; i++) {
        var moveDropdown = document.getElementById(`move${i}`)

        for (var j = 0; j < pokeData.moves.length; j++) {
             moveDropdown.innerHTML = moveDropdown.innerHTML + `<option id=${pokeData.moves[j].move.name}>${pokeData.moves[j].move.name}</option>`
        }

    }


}



function addToTeam() {
    const pokeTable = document.getElementById("pTeam")

    pokeTable.innerHTML = pokeTable.innerHTML + 
    `<tr>
    <p>${currentPokemon}</p>
    <ul></ul>
    <tr>`
}