import React from 'react'
import { Form } from 'semantic-ui-react'

let initialState = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
}
class PokemonForm extends React.Component {
  
  constructor(){
    super()
    this.state = initialState
  }

  onSubmitPokemon = (e) =>{
      e.preventDefault()
      let pokemonObject = {
        name: this.state.name,
        stats:[{
          value: this.state.hp,
          name: "hp"
        }],
        sprites:{
          front: this.state.frontUrl,
          back: this.state.backUrl
        }
      }

      this.setState( initialState)


      fetch('http://localhost:3000/pokemon',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pokemonObject)
      })
      .then(r=>r.json())
      .then(pokemon => this.props.newPokemon(pokemon))
  }

  onChangePokemon = (event) =>{
    this.setState({
      [event.target.name] : event.target.value
    },()=> console.log(this.state))


  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.onSubmitPokemon}>
          <Form.Group widths="equal">
            <Form.Input onChange = {this.onChangePokemon} value = {this.state.name} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input onChange = {this.onChangePokemon} value = {this.state.hp} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input onChange = {this.onChangePokemon} value = {this.state.frontUrl} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input onChange = {this.onChangePokemon} value = {this.state.backUrl} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
