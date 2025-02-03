import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Content from "./components/Content"
import fisherYatesShuffle from "./Shuffle"


export default function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [round, setRound] = useState(1)
  const [pokemonClicked, setPokemonClicked] = useState([])
  const [reset, setReset] = useState(false)

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
     .then(response =>response.json())
     .then(data =>{
      setPokemonList(fisherYatesShuffle(data.results).slice(0,10))})
     .catch(err => console.error(err))
  }, [reset])

  function pokemonClick(pokemon) {
    if(pokemonClicked.includes(pokemon)) {
      setReset(!reset)
      setRound(1)
      setPokemonClicked([])
      return
    }
    if(round >= 10) {
      setReset(!reset)
      setRound(1)
      setPokemonClicked([])
      return
    }
    setPokemonClicked([...pokemonClicked, pokemon])
  }

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
      <Card handleClick = {{setRound, setPokemonList, pokemonClick}} data = {{round, pokemonList, pokemon}}>
        <Content key = {pokemon.name} pokemon={pokemon}/>
      </Card>
    )}
    </div>
    </div>
    </>
  )
}