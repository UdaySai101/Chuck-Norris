'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Categories from './Components/Categories';
import Joke from './Components/Joke';
import './style.css';

const categories = ["", "Animal", "Career", "Celebrity", "Dev", "Explicit", "Fashion", "Food", "History", "Money", "Movie", "Music", "Political", "Religion", "Science", "Sport", "Travel"];

ReactDOM.render(

    <HashRouter >

        <Categories />

        <Switch>
            {categories.map((text) => {

                return <Route path={`/${text}/`} ><Joke text={'...'} cat={text}></Joke></Route>

            })}
        </Switch>


    </HashRouter>

    , document.getElementById('section'));


document.body.onload = () => {

    const arr = document.getElementsByClassName("catElements");
    const sel = document.querySelector('.selectedpar');
    const newJ = document.querySelector('.newJoke');


    for (let i = 0; i < arr.length; i++) {

        arr[i].addEventListener('click',
            () => {

                getJoke(arr[i].textContent.toLowerCase());
                arr[i].style.backgroundColor = '#9c2318';
                arr[i].style.color = 'white';
                document.querySelector('.para').scrollIntoView();
                for (let j = 0; j < arr.length; j++) {
                    if (j != i) {
                        arr[j].style.backgroundColor = 'white';
                        arr[j].style.color = 'black';
                    }
                }

            });

    }

    newJ.addEventListener('click', () => {

        if (sel.textContent === ("Selected Category : ")) {
            getJokeR();

        }
        else {
            let s = sel.textContent.split(" : ");

            getJoke(s[1].toLowerCase());
        }

        document.querySelector('.para').scrollIntoView();

    })


    function getJoke(catg) {

        fetch(`https://api.chucknorris.io/jokes/random?category=${catg}`).then((response) => response.json()).then(data => {

            document.querySelector('.pjoke').innerHTML = `${data.value}`;

        })

    }
    function getJokeR() {

        fetch(`https://api.chucknorris.io/jokes/random`).then((response) => response.json()).then(data => {

            document.querySelector('.pjoke').innerHTML = `${data.value}`;

        })

    }

    document.querySelector('.catBtn').addEventListener('click', () => {

        if (document.querySelector('.flexContainer').classList.contains('hidden')) {
            document.querySelector('.flexContainer').classList.remove('hidden');
            document.querySelector('.arrow').classList.add('up');
            document.querySelector('.arrow').classList.remove('down');
        }

        else {
            document.querySelector('.flexContainer').classList.add('hidden');
            document.querySelector('.arrow').classList.add('down');
            document.querySelector('.arrow').classList.remove('up');

        }
    });


}
