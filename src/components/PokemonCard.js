import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
    
    state = {
        showDetails: false,
        backImage: false
    }

    toggleBackImage = (event) => {
        this.setState({backImage: !this.state.backImage})
    }

    toggleDetails = (event) => {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        //   this.props.pokemonData.stats.map( stat => stat.name === "hp" ? console.log(stat.value) : null)
        const { pokemonData } = this.props
        return (
        <Card>
            {this.state.showDetails ? 
            <div>
                <div className="detailsheader"><h4>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h4></div>
                <div className="details">
                    <span>
                    Type(s): {pokemonData.types.map(type => type.charAt(0).toUpperCase() + type.slice(1))}
                    <br/>
                    Abilities: {pokemonData.abilities.map(ability => ability.charAt(0).toUpperCase() + ability.slice(1))}
                    <br/>
                    Height: {pokemonData.height}
                    <br/>
                    Weight: {pokemonData.weight}
                    <br/>
                    </span><br/>
                    <button onClick={this.toggleDetails}>Show Pokemon</button>
                </div>
            </div> :
            <div>
                <div className="image" onClick={this.toggleBackImage}>
                    {this.state.backImage ? <img src={pokemonData.sprites.back} alt={pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)} /> : 
                    <img src={pokemonData.sprites.front} alt={pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)} />}
                </div>
                <div className="content">
                    <div className="header">{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</div>
                </div>
                <div className="extra content">
                    <span>
                    <i className="icon heartbeat red" />
                    {pokemonData.stats.map( stat => stat.name === "hp" ? stat.value : null)} hp
                    </span><br/>
                    <button onClick={this.toggleDetails}>Show Details</button>
                </div>
            </div>}
        </Card>
        )
    }
}

export default PokemonCard
