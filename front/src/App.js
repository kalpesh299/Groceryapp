
import './App.css';
import Header from './comonents/Header'
import Addgroc from './comonents/Addgroc'
import Month from './comonents/Month'
import Grocery from './comonents/Grocery'
import {Provider} from './context'

function App() {
  return (
    <Provider>
    <div className='app-container'>
    
     <Header></Header>
     <Month></Month>
     <Addgroc></Addgroc>
     <Grocery></Grocery>
    </div></Provider>
  );
}

export default App;
