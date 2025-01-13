import './App.css';
import { useEffect, usseEffect} from 'react';
//87541b7b want ti fetch data from api as soon as component loads so useEFFET

const API_URL = 'http://omdbapi.com?apikey=87541b7b'

const App = () => {
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);

  }

  useEffect(() => {
    searchMovies('Spiderman');

  },[]);

  return (
    <div className="App">
      <h1>hi</h1>
     
    </div>
  );
}

export default App;
