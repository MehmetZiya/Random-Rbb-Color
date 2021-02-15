
import React from 'react';

import {RandomColor} from './RandomColor' ;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: [0,220,0]
    }
    this.changeColor = this.changeColor.bind(this);
  }

  formatColor(array){
    return 'rgb('+ array.join(',')+ ')' ;
  }

  applyColor(){
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  chooseColor(){
    const random = [];
    for ( let i = 0 ; i < 3 ; i++){
      random.push(Math.floor(Math.random() * 256))
    }
    return random;
  }

  changeColor(){
    this.setState(
      {color : this.chooseColor()}
    );
  }
  

  render() {
    return (
      <div className="App">
        <h1 className="head">Your Color is : {this.formatColor(this.state.color)}</h1>
        <RandomColor onClick={this.changeColor} />
      </div>
    );
  }
  
}

export default App;
