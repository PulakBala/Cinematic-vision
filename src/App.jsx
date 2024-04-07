import { useEffect } from 'react';
import {fetchDataFromApi} from './utlis/api'

//
import { useSelector, useDispatch } from 'react-redux'
//import actions work
import { getApiConfigaration } from './store/homeSlice';

function App() {
  //call action using useDispatch
  const dispatch = useDispatch()
  //read data  from the store  with the useSelectior hooks
  const {url} = useSelector((state) => state.home)

  useEffect(() =>{
    apiTesting();
  },[])
  const apiTesting = () =>{
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        dispatch(getApiConfigaration(res))
      })
  }
  return (
    <>
      <div>
        app
      {url?.total_pages}
      </div>
    </>
  )
}

export default App
