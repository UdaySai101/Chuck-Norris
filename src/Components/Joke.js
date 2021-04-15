
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Joke extends Component {

    render() {

        return (

            <div>

                <p className="selectedpar">{`Selected Category : ${this.props.cat}`}</p>
                <div className="para" id="jk">
                    <p className="pjoke"> {this.props.text} </p>
                </div>
                <Link className="newJoke" to={`/${this.props.cat}/`}>New Joke</Link>

            </div>

        );
    }
}


export default Joke;
