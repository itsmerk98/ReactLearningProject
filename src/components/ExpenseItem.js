import './ExpenseItem.css';

let tital ="Car Insurence"

let ExpenseItem = () => <div className='expense-item'>
    <div>March 12th 2021</div>
    <div className='expense-item__description'>
        <h2>{tital}</h2>
        <div className='expense-item__price'>$200</div>
    </div>
</div>;

export default ExpenseItem;