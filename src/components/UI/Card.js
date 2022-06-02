import React from 'react';
import './Card.css';

const Card=(props)=> {
    //const classes = "card" + " " + props.className; /* css classes of "ExpenseItem Component" and "Card component in "classes" */
    const classes = `card ${props.className}`;
    return <div className={classes}>{props.children}</div>;
  }
export default Card;