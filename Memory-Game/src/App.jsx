import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Content from "./components/Content"
import fisherYatesShuffle from "./Shuffle"


export default function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [round, setRound] = useState(1)

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
      <p>Round {round}/{"10"}</p>
    </div>
    <div className="options-container">
    <div className="options">
    {pokemonList.map(pokemon =>
      <Card handleClick = {{setRound, setPokemonList}} data = {{round, pokemonList}}>
        <Content key = {pokemon.name} pokemon={pokemon}/>
      </Card>
    )}
    </div>
    </div>
    </>
  )
}