import { useEffect, useState } from "react"
import "../styles/Content.css"

export default function Content({pokemon}) {
    const [pokemonDetails, setPokemonDetails] = useState({})
    useEffect(()=> {
        fetch(`${pokemon.url}`)
         .then(result => result.json())
         .then(data => {
            setPokemonDetails(data)})
         .catch(err => console.error(err))
    }, [pokemon.url])
    return (
        <>
        <div className="card-content">
            <h2>{pokemonDetails.name}</h2>
            {pokemonDetails.sprites?.front_default ? (
          <img
            src={pokemonDetails.sprites.front_default}
            alt={pokemonDetails.name}
          />
        ) : (
          <p>No image available</p>
        )}
        </div>
        </>
    )
}