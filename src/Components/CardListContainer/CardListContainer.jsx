import React from 'react'
import { Card } from '../CardList/Card'
import './CardListContainer.css'

export const CardListContainer = (props) => {
    return (
        <div className='card-list-container'>
            {
                props.robots.map(robot => (
                    <Card key={robot.id} firstName={robot.firstName} lastName={robot.lastName} email = {robot.email} image = {robot.image} />
                ))
            }
        </div>
    );
}