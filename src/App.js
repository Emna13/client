import './App.css';
import Navbar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './component/UserList';

function App() {
  return (
    <div>
      <Navbar/>
      <UserList/>
    </div>
  );
}

export default App;
