import React, {Component} from 'react';
export default class Header extends Component{
    render(){
        return (
            <header>
                Head of The Page
                <p>{this.props.num}</p>
            </header>
        )
    }
}