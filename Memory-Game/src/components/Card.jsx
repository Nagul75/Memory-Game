import "../styles/Card.css"
import fisherYatesShuffle from "../Shuffle"

export default function Card({children, handleClick, data}) {
    return (
        <a href="#" className="card-link" onClick={()=> {
            if(data.round < 10) {
                handleClick.setRound(data.round+1)
                handleClick.setPokemonList(fisherYatesShuffle(data.pokemonList))
                handleClick.pokemonClick(data.pokemon)
            }
        }}>
        <div className="card-container">
        {children}
        </div>
        </a>
    )
}