import React from 'react'
import './CardList.css'

export const CardList = (props) => {
    return (
        <div className='card-list'>
            <h1>{props.firstName + " " + props.lastName}</h1>
        </div>
    );
}