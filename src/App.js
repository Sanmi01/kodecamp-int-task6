import './App.css';
import Header from './layout/Header';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CoursesPage from './pages/CoursesPage';
import SingleCourse from './pages/SingleCourse';


function App() {
  return (
    <div className="App d-flex vh-100 justify-content-between row">
      <Header />
      <SingleCourse />
    </div>
  );
}

export default App;
