import { useEffect } from 'react';
import {fetchDataFromApi} from './utlis/api'
function App() {
  useEffect(() =>{
    apiTesting();
  },[])
  const apiTesting = () =>{
    fetchDataFromApi("/movie/popular")
      .then((res) => {
        console.log(res);
      })
  }
  return (
    <>
      <div>app</div>
    </>
  )
}

export default App
