import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js'
import Card from '../UI/Card.js';

const ExpenseItem = (props) => {
    /*
    
    //event handling in react js

    const [newTitle, setNewTitle] = useState("Hii");

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle(newTitle);
    }
    const changeHandler = event => {
        setNewTitle(event.target.value);
    }*/
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>

            {/* <input type="text" value={newTitle} onChange={changeHandler} />
            <button className='' onClick={clickHandler}>Change Title</button> */}
        </Card>);
}
export default ExpenseItem;