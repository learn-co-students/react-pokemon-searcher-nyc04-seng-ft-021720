import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: '',
    pokemonLoaded: false,
  }

  constructor() {
    super();
    console.log('constructed');
  }

  componentDidMount() {
    console.log('mounted');
    this.fetchPokemon();
  }

  fetchPokemon() {
    console.log('fetching...')
    // fetch the pokemon list
    fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemon => this.setState({ pokemon: pokemon, pokemonLoaded: true }));
  }

  filteredPokemon = () => {
    console.log('filtering...')

    let filteredPokemon = this.state.pokemon
    
    if (this.state.search.length > 0) {
      filteredPokemon = filteredPokemon.filter(pokemon => pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0);
    }

    return filteredPokemon;
  }

  handleFilterChange = (event) => {
    this.setState({ search: event.target.value });
  }

  addPokemon = (pokemon) => {
    fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pokemon),
    })
      .then(r => r.json())
      .then(newPokemon => {
        // console.log(newPokemon);
        // debugger;
        this.setState({ pokemon: this.state.pokemon.concat([newPokemon]) });
      });
  }

  render() {

    console.log('pokemonpage rendering...')

    return (
      <Container>
        <br />
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <Search onChange={this.handleFilterChange} searchText={this.state.search} />
        <br />
        {
          this.state.pokemonLoaded 
          ?
          <PokemonCollection pokemon={this.filteredPokemon()} />
          :
          <h2>Loading...</h2>
        }
      </Container>
    )
  }
}

export default PokemonPage
