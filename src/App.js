import './App.css';
import Header from './layout/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';


function App() {
  return (
    <div className="App d-flex vh-100 justify-content-between row">
      <Header />
      <Login />
    </div>
  );
}

export default App;
