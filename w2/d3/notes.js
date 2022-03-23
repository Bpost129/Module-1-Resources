let pokemonCreator = require('./pokemons');

let pokemons = pokemonCreator();

// console.log(pokemonCreator());

let displayPokemon = function(pokemons, cb) {
    if (!cb) return pokemons;
    let results = cb(pokemons);
    return results;
}

let names = function(pokemons) {
    return pokemons.map(function(pokemon) {
        return pokemon.name;
    })
}

let fires = function(pokemons) {
    return pokemons.filter(function(pokemon) {
        return pokemon.type === "Fire";
    })
}

let levels = function(pokemons) {
    return pokemons.reduce(function(count, pokemon) {
        if (pokemon.level >= 30 && pokemon.level <= 50) {
            return count + 1;
        } else {
            return count;
        }
    }, 0)
}

// console.log(displayPokemon(pokemons));
// console.log(displayPokemon(pokemons, names));
// console.log(displayPokemon(pokemons, fires));
console.log(displayPokemon(pokemons, levels));
