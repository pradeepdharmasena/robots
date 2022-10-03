import React from 'react'
import { CardList } from '../CardList/CardList'
import './CardListContainer.css'

export const CardListContainer = (props) => {
    return (
        <div className='card-list-container'>
            {
                props.robots.map(robot => (
                    <CardList key={robot.id} firstName={robot.firstName} lastName={robot.lastName} />
                ))
            }
        </div>
    );
}