let pokemonCreator = require('./pokemons');

let pokemons = pokemonCreator();

// console.log(pokemonCreator());

let displayPokemon = function(pokemons) {
    return pokemons;
}

console.log(displayPokemon(pokemons));
