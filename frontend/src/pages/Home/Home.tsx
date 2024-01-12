import styles from "./Home.module.css"
import { useState } from "react"
import PokemonList from "components/Pokemon/PokemonList/PokemonList"
import { Link, useParams } from "react-router-dom"
import { POKEDEX_PAGE_ROUTE } from "components/Pokemon/data_integration/constants"

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")
  const { page } = useParams()
  const pageNumber = Number(page)

  const previousPokedexPageIndex = `${POKEDEX_PAGE_ROUTE}${pageNumber === 0 ? 10 : pageNumber - 1}`
  const nextPokedexPageIndex = `${POKEDEX_PAGE_ROUTE}${pageNumber === 10 ? 0 : pageNumber + 1}`

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={e => setFilterValue(e.target.value.toLowerCase())}
        value={filterValue}
      />
      <div className={styles.pagination}>
        <Link to={previousPokedexPageIndex}>{'<'}</Link>
        <Link to={nextPokedexPageIndex}>{'>'}</Link>
      </div>
      <PokemonList page={pageNumber} filterValue={filterValue} />
    </div>
  )
}
