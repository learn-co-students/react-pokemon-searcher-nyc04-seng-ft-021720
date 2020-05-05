import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  
    state = {
        pokemonData: [],
        searchTerm: ""
    }

    componentDidMount() {
        this.fetchPokemonData()
    }

    fetchPokemonData() {
        fetch(`http://localhost:3000/pokemon`)
            .then(response => response.json())
            .then(pokemonData => {
                this.setState({
                    pokemonData: pokemonData
                }) //, console.log(this.state.pokemonData)
            })
    }

    changeSearchTerm = (event) => {
        // console.log(event.target.value)
        this.setState({searchTerm: event.target.value})
    }

    filterListBasedOnSearchTerm = () => {
        let filteredPokemonData = this.state.pokemonData.filter(onePokemonData => {
            return onePokemonData.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        })
        return filteredPokemonData
    } 

    render() {
        return (
        <Container>
            <h1>Pokemon Searcher</h1>
            <br />
            <PokemonForm />
            <br />
            <Search searchTerm={this.state.searchTerm} changeSearchTerm={this.changeSearchTerm} />
            <br />
            <PokemonCollection pokemonData={this.filterListBasedOnSearchTerm()}/>
        </Container>
        )
    }
}

export default PokemonPage
