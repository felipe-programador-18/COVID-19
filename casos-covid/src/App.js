import {useEffect, useReducer} from 'react'
import axios from 'axios';
import './App.css';


const Url = "kaggle datasets download -d yamqwe/omicron-covid19-variant-daily-cases"

const reducer = (state, action) => {
  
  if(action.type === 'REQUEST'){
    return {
      ...state,
      loading:true
    }
  }
  if(action.type === 'SUCCESS'){
    return {
      ...state,
      loading: false, 
      data: action.data
    }
  }



  return state
}

function App() {
   const [data, dispacth] = useReducer(reducer, {loading:true, data:{}})
  
  useEffect(() => {
    dispacth({type: 'REQUEST'})
    axios
    .get(Url)
    .then(res => {
     dispacth({type:'SUCCESS', data: res.data})
    })
  })   
  
  
  return (
    <div className="App">
      <h1>Covid-19 daily cases</h1>

      {JSON.stringify(data)}
    </div>
  );
}

export default App;
