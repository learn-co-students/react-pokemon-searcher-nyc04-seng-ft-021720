import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false,
  };

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }

  render() {

    const {
      // height,
      // weight,
      // id,
      name,
      // abilities,
      // moves,
      stats,
      // types,
      sprites,
    } = this.props.pokemon;

    const capitalizedName = name.charAt(0).toUpperCase()+name.slice(1);

    const statsObj = {};
    stats.forEach(statObj => {
      statsObj[statObj.name] = statObj.value;
    })

    return (
      <Card onClick={this.flip}>
        <div>
          <div className="image">
            {
              this.state.flipped
              ?
              <img src={sprites.back} alt={`${capitalizedName} back`} />
              :
              <img src={sprites.front} alt={`${capitalizedName} front`} />
            }
          </div>
          <div className="content">
            <div className="header">{capitalizedName}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {statsObj.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
