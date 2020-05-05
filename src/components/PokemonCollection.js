import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

    renderPokemonCards = (pokemonData) => {
        return pokemonData.map(onePokemonData => 
            <PokemonCard key={onePokemonData.id} pokemonData={onePokemonData}/>
        )
    }

    render() {
        //   console.log(this.props.pokemonData)
        return (
        <Card.Group itemsPerRow={5}>
            {this.renderPokemonCards(this.props.pokemonData)}
        </Card.Group>
        )
    }
}

export default PokemonCollection
