import React,{Component} from 'react'
import './descview_styles.css';
export default class DescView extends Component{
    render(){

        const {filteredArray}=this.props;
        console.log(filteredArray)
        const renderBooks = filteredArray.map((books) => {
            return (
                <p className={'temp'}>
                    {books.desc}
                </p>
            )
        });
        return(
            <div className={'descContainer'}>
                {renderBooks}
            </div>
        )
    }
}