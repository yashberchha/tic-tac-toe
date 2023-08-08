import './App.css';
import Board from './components/Board';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <Board />
      <Toaster />
    </div>
  );
}

export default App;
