import { useEffect, useState } from "react"
import "./App.css"
import Card from "./components/Card"
import Content from "./components/Content"


export default function App() {

  const [pokemonList, setPokemonList] = useState([])
  const [pokemon, setPokemon] = useState({})

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
     .then(response =>response.json())
     .then(data => {
        setPokemonList(data.results)
        setPokemon(data.results[0])
      })
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

    <Card>
      <Content pokemon={pokemon}/>
    </Card>
    </>
  )
}