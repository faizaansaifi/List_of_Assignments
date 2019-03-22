import React, {Component} from 'react';

export default class Main extends Component{
    render(){
        return(
            <div className="main">
                Main Content
                <button onClick={this.props.toChild}>Click</button>
            </div>
        )
    }
}