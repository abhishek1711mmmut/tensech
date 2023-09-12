import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage';
import AddItem from './components/AddItem';
import GetItem from './components/GetItem';
import ListBasket from './components/ListBasket';
import UpdateBasket from './components/UpdateBasket';
import DeleteBasket from './components/DeleteBasket';
import ErrorPage from './pages/ErrorPage';

function App() {

  const location=useLocation();

  return (
    <div className='mt-6 max-w-[1300px] mx-auto'>
      <h1 className='text-center text-3xl font-bold underline shadow-md'>
        CRUD Operation using Pantry API
      </h1>

      <Routes>
        <Route path='/tensech' element={<Homepage/>}/>
        <Route path='/add-item' element={<AddItem/>}/>
        <Route path='/get-item' element={<GetItem/>}/>
        <Route path='/list-baskets' element={<ListBasket/>}/>
        <Route path='/update-item' element={<UpdateBasket/>}/>
        <Route path='/delete-item' element={<DeleteBasket/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      
      <div>
        {
          location.pathname!=="/" && (
            <Link to="/">
              <button className=" ml-5 bg-slate-400 rounded font-medium px-4 py-2 mt-4 border border-black">
                Return to home page
              </button>
            </Link>
          )
        }
      </div>

    </div>
  );
}

export default App;