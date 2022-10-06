import React from 'react'
import './Card.css'

export const Card = (props) => {
    return (
        <div className='card'>
            <img src = {props.image}/>
            <h1 id='name-font'>{props.firstName}</h1>
            <h1 id='name-font'>{props.lastName}</h1>
            <h4 id='name-font'>{props.email}</h4>
        </div>
    );
} 