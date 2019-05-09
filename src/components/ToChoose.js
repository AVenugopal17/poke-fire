import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";

export default class MyComponent extends Component {
  // make a constructor with state
  // state should have a property call pokemon
  constructor(props){
    super(props)
    this.state = {
      pokemon: []
    }
  }
  // choose the best lifecycle method for requesting data via HTTP (hint: after the component mounts)


  componentDidMount(){
    let promise = axios.get("https://api.pokemontcg.io/v1/cards");
    promise .then(response => {
      console.log(response.data.cards);
      this.setState({
        pokemon: response.data.cards
      })
    });
  }
  // within the lifecyle method, create a promise that will fetch our pokemon, and then when it returns, will set state with the response


  render() {
    const { pokemon } = this.state;
    console.log(pokemon);

    // const myPokeCollection = pokemon.map((element, index, array) => {
    //   return <div key={element.id}>{element.name}</div>;
    // });

    const myPokeCollection = pokemon.map(pokemon => {
      return (
        <Card
          addToCollection={this.props.addToCollection}
          removeFromCollection={this.props.removeFromCollection}
          key={pokemon.id}
          {...pokemon}
        />
      );
    });
    return <div className="my-collection">{myPokeCollection}</div>;
  }
}
