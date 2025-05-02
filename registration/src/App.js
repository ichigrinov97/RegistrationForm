import './App.css';
import { Route,Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage.js'
import Registration from './pages/Registration/Registration.js'


function App() {
  return (
    <Routes>
      <Route path='/login' element = {<LoginPage></LoginPage>}></Route>
      <Route path='/registration' element = {<Registration></Registration>}></Route>
    </Routes>
  );
}

export default App;
