import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddFriend from './components/AddFriend';
import ViewFriend from './components/ViewFriend';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddFriend/>}/>
      <Route path='/view' element={<ViewFriend/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
