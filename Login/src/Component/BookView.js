import React,{Component} from "react";
import './bookview.css';
import DescView from './DescView'
export default class BookView extends Component{
    constructor(props){
        super(props);
        this.state={
            bookdetails:[...props.bookList],
            descArray:[]
        }
    }


    showDesc=()=> {
        const {count} = this.props;
        console.log(count,"count")
        let newarray = this.state.bookdetails.filter((data) => {
            if (count == data.value) {
                return data.desc;
            }
        });

        this.setState({
            descArray:[...this.state.descArray,...newarray]
        })
        console.log(this.state.descArray,"inside show")
    }
    render() {
        console.log(this.state.descArray,"inside render")
        return(
            <div>
            <div className='bookContainer'>
                <div>{this.props.count}</div>
                <div className={'bookname'} onClick={this.showDesc}>{this.props.bookName}</div>
                <div className={'author'}>By:-{this.props.bookAuthor}</div>
            </div>
            <DescView filteredArray={this.state.descArray}/>
            </div>

    )
    }
}