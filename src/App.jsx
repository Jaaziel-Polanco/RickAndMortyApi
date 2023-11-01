import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Characters from "./components/Characters";
import Pagination from "./components/pagination";

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setinfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";
  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
        setinfo(data.info)

      })
      .catch(error => console.log(error));
  };

  const onPrevious =()=> {
    fetchCharacters(info.prev);
  }

  const onNext =()=> {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <NavBar tittleNav="Rick and Morty app" />
      <div className="container">
        <Pagination prevp={info.prev} nextp={info.next} onPrevious={onPrevious} onNext={onNext}/>
        <Characters characters={characters}/>
        <Pagination prevp={info.prev} nextp={info.next} onPrevious={onPrevious} onNext={onNext}/>
      </div>
    </>
  );
}

export default App;
