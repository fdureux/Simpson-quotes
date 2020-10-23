import React from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import './App.css';

const sampleCharacter = {
    quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
    character: "Nelson Muntz",
    image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
    characterDirection : "Left"
};

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      character: sampleCharacter,
    };
    this.getCharacter = this.getCharacter.bind(this);
  }
  getCharacter() {
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      .then(response => response.data)
      .then(data => {
        this.setState({
            character: data[0],
      });
    });
  }
  render () {
    return (
    <div className="App">
      <QuoteCard character={this.state.character}> </QuoteCard>
      <button type="button" onClick={this.getCharacter}> Get new quote </button>     
    </div>   
    );
  }
}

export default App;
