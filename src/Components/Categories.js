import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const categories = ["Animal", "Career", "Celebrity", "Dev", "Explicit", "Fashion", "Food", "History", "Money", "Movie", "Music", "Political", "Religion", "Science", "Sport", "Travel"];


function Pcomp(props) {

    return <Link className={props.cn} to={`/${props.text}/`}>{props.text}</Link>;

}

class Categories extends Component {


    render() {

        return (

            <div style={this.fcStyles} className="flexContainer hidden">

                {

                    categories.map(text => {

                        return (<Pcomp cn="catElements" text={text}></Pcomp>);

                    })

                }
            </div>

        );

    }

}

export default Categories;