
import React,{useEffect, useState} from 'react'
import axios from 'axios';

const App = () => {
  const [nameList, setNameList] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() =>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=500')
    .then((response)=>{setNameList(response.data.results)})
  },[])

  return (
    <div >
      <h1>Emoji Search</h1>
      <input type="text" placeholder='Search' onChange={(e)=>setSearch(e.target.value)}/>
      {nameList.filter((item)=>{
        if(search===""){
          return item
        }
        else if(item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
          return item
        }
      })
      .map((item)=>{
        return <h4>{item.name}</h4>
        
      })}
    </div>

  )
}

export default App;
