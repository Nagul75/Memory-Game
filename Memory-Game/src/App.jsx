import { useEffect } from "react"
import "./App.css"
import Card from "./components/Card"
import Content from "./components/Content"


export default function App() {


  return (
    <>
    <header>
      <h1>POKEMON MEMORY GAME</h1>
    </header>

    <div className="scoreboard">
      <p>Round {"5"}/{"10"}</p>
    </div>

    <Card>
      <Content pokemon= {data}/>
    </Card>

    </>
  )
}