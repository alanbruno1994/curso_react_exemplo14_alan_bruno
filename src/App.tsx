import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import cityThunk from './store/city_thunk'

function App() {
  const {loadingCity,uf,city,district} =useSelector((state:any)=>state.city)
  const dispacth=useDispatch()
  const [cep, setCep]=useState('')

  function search(){
    dispacth(cityThunk(cep))
  }
  console.log(loadingCity)

  return <div>
    {loadingCity===false ? <p>{uf}-{city}-{district}</p> :'' }
    <button onClick={search}>Click</button>  
    <input onChange={event=>setCep(event.target.value)}></input>
  </div>
}

export default App;
