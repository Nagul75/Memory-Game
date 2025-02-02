import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Content from "./components/Content"


export default function App() {

  const [pokemonList, setPokemonList] = useState([])

  function fisherYatesShuffle(arr) {
  	for (let i = arr.length - 1; i > 0; i--) {
    	const j = Math.floor(Math.random() * (i + 1));
    	[arr[i], arr[j]] = [arr[j], arr[i]];
  	}
  	return arr;
  }

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
     .then(response =>response.json())
     .then(data =>{
      setPokemonList(fisherYatesShuffle(data.results).slice(0,10))})
     .catch(err => console.error(err))
  }, [])

  return (
    <>
    <header>
      <h1>POKEMON MEMORY GAME</h1>
    </header>

    <div className="scoreboard">
      <p>Round {"5"}/{"10"}</p>
    </div>
    <div className="options-container">
    <div className="options">
    {pokemonList.map(pokemon =>
      <Card>
        <Content key = {pokemon.name} pokemon={pokemon}/>
      </Card>
    )}
    </div>
    </div>
    </>
  )
}