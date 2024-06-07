import logo from './logo.svg';
import './App.css';
import { AddUser } from './components/AddUser';
import SearchUser from './components/SearchUser';
import DeleteUser from './components/DeleteUser';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewUser from './components/ViewUser';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element ={<AddUser/>}/>
      <Route path='/search' element ={<SearchUser/>}/>
      <Route path='/delete' element ={<DeleteUser/>}/>
      <Route path='/ViewUser' element ={<ViewUser/>}/>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
