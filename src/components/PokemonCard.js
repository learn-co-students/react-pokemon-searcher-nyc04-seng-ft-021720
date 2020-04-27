import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  toggleImage = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    const cardFront = this.props.pokemon.sprites.front
    const cardBack = this.props.pokemon.sprites.back
    return (
      <Card> 
        <div onClick={this.toggleImage}>
          <div className="image">
            <img
              src={this.state.clicked ? cardBack : cardFront}
            alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
