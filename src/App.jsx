import { useEffect } from 'react';
import {fetchDataFromApi} from './utlis/api'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//
import { useSelector, useDispatch } from 'react-redux'
//import actions work
import { getApiConfigaration } from './store/homeSlice';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResult/SearchREsult';
import PageNoteFound from './pages/404/pageNoteFound';
import Header from './components/header/Header';
import Footer from './components/footer/Footer'
function App() {
  //call action using useDispatch
  const dispatch = useDispatch()
  //read data  from the store  with the useSelectior hooks
  const {url} = useSelector((state) => state.home)
  useEffect(() =>{
    fetchApiConfig();
  },[])
  const fetchApiConfig = () =>{
    fetchDataFromApi("/configuration")
        // console.log(res);
        .then((res) =>{
          const url = {
            backdrop: res.images.secure_base_url + "original",
            poster: res.images.secure_base_url + "original",
            profile: res.images.secure_base_url  + "original",
          }
          dispatch(getApiConfigaration(url))
        });
        
     
  }
  return (
    // project route
   <BrowserRouter>
   <Header/>
      <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/:mediaType/:id' element={<Details/>}></Route>
         <Route path='/search/:query' element={<SearchResult/>}></Route>
         <Route path='/explore/:mediaType' element={<Explore/>}></Route>
         <Route path='*' element={<PageNoteFound/>}></Route>
      </Routes>
      <Footer/>
   </BrowserRouter>
  )
}

export default App
