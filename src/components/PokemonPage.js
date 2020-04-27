import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import TypeFilter from './filterByType'
import SortByHp from './SortByHp'

class PokemonPage extends React.Component {
  state = {
    pokemon: [],
    searchTerm: "",
    typeFilter: "",
    sortByHp: false
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/pokemon')
      .then((response) => {
        return response.json();
      })
      .then((pokemonArr) => {
        this.setState({
          pokemon: pokemonArr
        });
      });
    }

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  findFilteredPokemon = () => {
    return this.state.pokemon.filter(p =>{
      let pokemonArr = []
      if (p.types[0] || p.types[1] === this.state.typeFilter){
        pokemonArr.push(p)
        return pokemonArr
      } else if (p.types[0] || p.types[1] !== this.state.typeFilter){
        null
      }
      console.log(pokemonArr)
    })
  }

  handleSortByHp = () => {
    this.setState({
      sortByHp: !this.sortByHp
    })
  }

  handleTypeFilter = (e) => {
    this.setState({ typeFilter: e.target.value})
    this.findFilteredPokemon()
  }

  addPokemon = newPokemon => {
    this.setState({ pokemon: [...this.state.pokemon, newPokemon]})
  }

  render() {
    const filteredPokemon = this.state.pokemon.filter(p => p.name.includes(this.state.searchTerm))
    let filteredByType = filteredPokemon.filter(p => {
      if (p.types[0].includes(this.state.typeFilter)){
      return p
    } else if (p.types[1] && p.types[1].includes(this.state.typeFilter)){
      return p
    }
  })

    let sortedPokemon = [...filteredByType].sort((pokeA, pokeB) => {
        return pokeB.stats[5].value - pokeA.stats[5].value
      })

    return (
      <Container>
        
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={(event) => this.handleSearchChange(event)} />
        <br />
        <SortByHp onChange={(event) => {this.handleSortByHp(event)}}/>
        
        <TypeFilter onChange={(event) => {this.setState({
          typeFilter: event.target.value
        })}}/>
        <br />
        <PokemonCollection 
        pokemon={this.state.sortByHp ? sortedPokemon : filteredByType} 
        searchTerm={this.state.searchTerm}/>
      </Container>
    )
  }
}

export default PokemonPage
