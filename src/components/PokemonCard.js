import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickedSprite = () =>{
    this.setState((prevState)=>({
      clicked: !prevState.clicked
    }))
  }
  render() {
    
    let {front, back} = this.props.pokemon.sprites
    return (
      
      <Card>
        
        <div>
          <div className="image">
            <img
            onClick = {this.clickedSprite} 
            src={this.state.clicked? back:front}
            alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[0].value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
