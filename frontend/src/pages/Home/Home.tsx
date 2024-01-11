import styles from "./Home.module.css"
import { useState } from "react"
import PokemonList from "components/Pokemon/PokemonList/PokemonList"

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={e => setFilterValue(e.target.value.toLowerCase())}
        value={filterValue}
      />
      <PokemonList filterValue={filterValue} />
    </div>
  )
}
