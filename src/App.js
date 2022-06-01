import Expenses from './components/Expenses.js'

function App() {
    let expenses = [
        {
            id: 'e1',
            title: 'School Fee',
            amount: '250',
            date: new Date(2022, 22, 23)
        },
        {
            id: 'e2',
            title: 'Book Fee',
            amount: '230',
            date: new Date(2022, 22, 23)
        }, {
            id: 'e3',
            title: 'House Rent',
            amount: '700',
            date: new Date(2022, 22, 23)
        },
        {
            id: 'e4',
            title: 'Food',
            amount: '250',
            date: new Date(2022, 22, 23)
        }
    ];
    
    return (
        <div className='app-container'>
            <Expenses item={expenses}  />
        </div>
    );
}

export default App;