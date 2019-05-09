import React, { Component } from "react";
import MyNameComp from "./components/Header";
import ToChoose from "./components/ToChoose";
import Card from "./components/Card";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myCollection: []
    };
    this.addToCollection = this.addToCollection.bind(this);
    this.removeFromCollection = this.removeFromCollection.bind(this);
  }

  addToCollection(pokemon) {
    this.setState({
      myCollection: [...this.state.myCollection, pokemon]
    });
  }

  removeFromCollection(index) {
    let coppiedCollection = [...this.state.myCollection];
    coppiedCollection.splice(index, 1);
    this.setState({
      myCollection: coppiedCollection
    });
  }

  render() {
    const myCollection = this.state.myCollection.map((pokemon, index) => {
      return (
        <Card
          addToCollection={this.addToCollection}
          removeFromCollection={this.removeFromCollection}
          key={pokemon.id}
          index={index}
          {...pokemon}
        />
      );
    });

    return (
      <div className="App">
        <MyNameComp name="Aarti" />
        <div className={"my-collection collection"}>{myCollection}</div>
        <ToChoose addToCollection={this.addToCollection} />
      </div>
    );
  }
}

export default App;
