import React from 'react';
import ExpenseForm from './ExpenseForm';


import './NewExpenses.css';

const NewExpenses = () => {
    const saveExpenseDataHandler = (enteredExpenseData) => { };
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpenses;
