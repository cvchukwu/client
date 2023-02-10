import React from 'react';
import './Home.css';
import {useState, useEffect} from 'react';
import Axios from 'axios';

function Home(){
    const [advice, setAdvice] = useState("")

    const handleClick = () => {
        Axios.get("https://api.adviceslip.com/advice").then((res) => {
        setAdvice(res.data.slip.advice)
    })}

    useEffect(() => {
        Axios.get("https://api.adviceslip.com/advice").then((res) => {
        setAdvice(res.data.slip.advice)
    })
    }, [advice])
    return(
        <div className='main-container'>
            <div className='content'>
                <div className='content--header'>
                    <h4>ADVICE #117</h4>
                </div>
                <div className='content--body'>
                    <h2>{advice}</h2>
                </div>
                <div className='content--footer'>
                    <img id='pattern-divider-mobile' src="/images/pattern-divider-mobile.svg" alt="pattern-divider" />
                    <img id='pattern-divider-desktop' src="/images/pattern-divider-desktop.svg" alt="pattern-divider" />
                </div>
                <div className='icon-dice-container' onClick={handleClick}>
                    <img src="/images/icon-dice.svg" alt="icon-logo" onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
