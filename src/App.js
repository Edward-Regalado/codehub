import './assets/styles/App.css';
import tables from './assets/data/tables.js';
import Table from './components/Table.js';

function App() {
  return (
    <div className="App">
        <Table data={tables}/>
    </div>
  );
}

export default App;
