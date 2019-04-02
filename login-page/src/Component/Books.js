import React,{Component} from 'react';
import BookView from '../Component/BookView';
export default class Books extends Component{
    constructor(props) {
        super(props);
        this.state = {
            bookList: [
                {
                    value:1,
                    name: "D3.js in Action",
                    author: "Elijah Meeks",
                    desc: "There is a lot of useful text and many examples that explain how to use D3.js, which is a fine data visualization tool. (Recommendation by Chris Hermansen)"
                },
                {
                    value:2,
                    name: "Effective JavaScript",
                    author: "David Herman",
                    desc: "This book was a good read for me when I got started with JavaScript; I was coming from the C++ world. If you start with JavaScript and want to learn nifty details like what the difference is between == and ===, this book can help you make your way. (Recommendation by Manuel Dewald)"
                },
                {
                    value:3,
                    name: "JavaScript: The Definitive Guide",
                    author: "David Flanagan",
                    desc: "In its 6th edition, this definitive guide lives up to its title.  This book has been around for more than a decade, is comprehensive, and it is and well organized. If you pick only one JavaScript book to add to your library, this is the one. (Recommendation by Tom Manor)"
                },
                {
                    value:4,
                    name: "Eloquent JavaScript: A Modern Introduction to Programming",
                    author: "Marijn Haverbeke0",
                    desc: "This book is a work of art. It walks you through the essential concepts with a clear roadmap using clear language. It’s masterfully composed and edited, and unlike most programming books, it’s full of exercises for you to practice. If I were teaching the basics of programming in high school or college, I would use this as a text book."
                },
                {
                    value:5,
                    name: "JavaScript: The Good Parts",
                    author: "Douglas Crockford",
                    desc: "It may seem absurd now, but when this book was written, JavaScript was still a young language which started life as a tiny scripting language in browsers. At the time, browsers were just beginning to be explored by serious application developers."
                }]
        };
    }
    render() {
        return(
            <div>
                <h2>Books with Author Names</h2>
                {/*<p>(Click on Book names for Description)<p>*/}
                {this.state.bookList.map((data,index)=>(
                    <BookView key={index}
                              bookName={data.name}
                              bookAuthor={data.author}
                              bookList={this.state.bookList}
                              count={data.value}
                    />
                    )
                )}
           </div>
        )
            }



}