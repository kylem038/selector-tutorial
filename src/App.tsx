import { Outlet } from 'react-router-dom';
import Root from './components/Root';
import './App.css';

function App() {
  return (
    <div className="App">
      <Root />
      <Outlet />
    </div>
  );
}

export default App;
