
import React from 'react' ;
import './RandomColor.css' ;

export class RandomColor extends React.Component {
    render(){
        return(
            <div>
                <button className="btn" onClick={this.props.onClick}>Change Color</button>
            </div>
        );
    }
}
    