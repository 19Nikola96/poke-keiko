import styles from "./Home.module.css"
import { useState } from "react"
import PokemonList from "components/Pokemon/PokemonList/PokemonList"
import { Link, useParams } from "react-router-dom"

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")
  const { page } = useParams()
  const pageNumber = Number(page)

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={e => setFilterValue(e.target.value.toLowerCase())}
        value={filterValue}
      />
      <Link to={`/pokedex/${pageNumber === 0 ? 0 : pageNumber - 1}`}>
        {'<-'}
      </Link>
      <Link to={`/pokedex/${pageNumber === 10 ? 10 : pageNumber + 1}`}>
        {'->'}
      </Link>
      <PokemonList page={pageNumber} filterValue={filterValue} />
    </div>
  )
}
