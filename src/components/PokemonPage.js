import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(r => r.json())
    .then(pokemonArr => this.setState({pokemon: pokemonArr}))

  }

  searchFilter(){
    let pokemonFiltered = [...this.state.pokemon]
    return pokemonFiltered.filter(pokemon=>{
      return pokemon.name.includes(this.state.searchTerm)
    })

  }

  onChange = (event) =>{
    this.setState({
      searchTerm: event.target.value
    },()=>console.log(this.state))
  }

  newPokemon = (pokemonResponse) =>{
    this.setState((prevState) => ({
      pokemon: [...prevState.pokemon, pokemonResponse]
    }))
  }
  
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm newPokemon = {this.newPokemon} />
        <br />
        <Search onChange={this.onChange} search = {this.state.searchTerm} />
        <br />
        <PokemonCollection pokemon = {this.searchFilter()} />
      </Container>
    )
  }
}

export default PokemonPage
