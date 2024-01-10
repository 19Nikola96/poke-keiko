import styles from "./Home.module.css"
import { useEffect, useState } from "react"
import Loader from "components/Loader/Loader"
import Error from "components/Error/Error"
import PokemonList from "components/PokemonList/PokemonList"

const fetchPokemons = async (url: string) => {
  try {
    const response = await fetch(url, { headers: { accept: "application/json" } })
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    throw error
  }
}

export const Home = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [filterValue, setFilterValue] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  const updatePokemonList = async () => {
    const pokemonList = await fetchPokemons("http://localhost:8000/pokemons")
    setIsLoading(false)
    if (pokemonList.statusCode && pokemonList.statusCode !== 200) {
      setError(pokemonList.message)
    } else {
      setPokemonList(pokemonList)
    }
  }

  useEffect(() => {
    updatePokemonList()
  }, [])

  return (
    <div className={styles.intro}>
      <h1>Pokedex !</h1>
      <input
        className={styles.input}
        placeholder="Search"
        onChange={e => setFilterValue(e.target.value.toLowerCase())}
        value={filterValue}
      />
      <Loader isLoading={isLoading} />
      <PokemonList pokemonList={pokemonList} filterValue={filterValue} />
      <Error error={error} />
    </div>
  )
}
