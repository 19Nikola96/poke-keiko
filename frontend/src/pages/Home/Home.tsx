import styles from "./Home.module.css"
import { useState } from "react"
import PokemonList from "components/Pokemon/PokemonList/PokemonList"
import { useParams } from "react-router-dom"
import RadioImgType from "components/RadioImgType/RadioImgType"
import Pagination from "components/Pagination/Pagination"

export const Home = () => {
  const [filterValue, setFilterValue] = useState("")
  const { page, imgType } = useParams()
  const pageNumber = page !== undefined ? Number(page) : 0

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={e => setFilterValue(e.target.value.toLowerCase())}
        value={filterValue}
      />
      <RadioImgType page={pageNumber} imgType={imgType} />
      <Pagination page={pageNumber} imgType={imgType} />
      <PokemonList filterValue={filterValue} page={pageNumber} />
    </div>
  )
}
