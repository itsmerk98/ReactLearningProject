import './App.css';
import SubComponent from './components/SubComponent.js'

function App() {
    return (
        <>
            
            <div className='app-container'>
                <h3>First component</h3>
                <p>This is a p tag.</p>
                <SubComponent />
            </div>
        </>
    );
}

export default App;