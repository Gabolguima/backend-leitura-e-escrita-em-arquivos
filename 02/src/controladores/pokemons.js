const { listaPokemons, detalharPokemon, listarPokemons } = require("utils-playground");

const pokemons = async (req, res) => {
  const { pagina } = req.query;

  try {
    const listaPokemons = await listarPokemons(pagina ?? 1);

    return res.json(listaPokemons);
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
};

const pokemon = async (req, res) => {
  const { idOuNome } = req.params;

  try {
    const pokemonDetalhado = await detalharPokemon(idOuNome);

    const {
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species
    } = pokemonDetalhado;

    return res.json({
      id,
      name,
      height,
      weight,
      base_experience,
      forms,
      abilities,
      species
    });
  } catch (error) {
    return res.status(400).json({
      mensagem: error.message
    });
  }
};

module.exports = {
  pokemon,
  pokemons
}