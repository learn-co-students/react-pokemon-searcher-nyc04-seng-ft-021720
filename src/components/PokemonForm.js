import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const {name, hp, frontUrl, backUrl} = this.state;
    const newPokemon = {
      'name': name,
      "stats": [
        {
          "value": hp,
          "name": "hp"
        }
      ],
      "sprites": {
        // "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        "front": frontUrl,
        "back": backUrl,
      },
    }

    this.setState({ name: '', hp: '', frontUrl: '', backUrl: '' });
    this.props.addPokemon(newPokemon);
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid value={this.state.name} onChange={this.handleInputChange} label="Name" placeholder="Name" name="name" />
            <Form.Input fluid value={this.state.hp} onChange={this.handleInputChange} label="hp" placeholder="hp" name="hp" />
            <Form.Input fluid value={this.state.frontUrl} onChange={this.handleInputChange} label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input fluid value={this.state.backUrl} onChange={this.handleInputChange} label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
