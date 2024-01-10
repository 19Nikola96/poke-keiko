import Pokemon from "components/Pokemon/Pokemon"
import styles from "./Home.module.css"
import { useEffect, useState } from "react"

type PokemonList = {
  pokemonList: Pokemon[]
  filterValue: string
}

type Pokemon = {
  name: string
  id: number
  weight: number
  height: number
}

function filterPokemonsByName(pokemons: Pokemon[], filteredName: string) {
  return pokemons.filter(({ name }) => name.toLowerCase().includes(filteredName))
}

const fetchPokemons = async (url: string) => {
  try {
    const response = await fetch(url, { headers: { accept: "application/json" } })
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    console.log(error)
    return []
  }
}

export const Home = () => {
  const [pokemonList, setPokemonList] = useState([])
  const [filterValue, setFilterValue] = useState("")

  const updatePokemonList = async () => {
    const pokemonList = await fetchPokemons("http://localhost:8000/pokemons")
    setPokemonList(pokemonList)
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
      <PokemonList pokemonList={pokemonList} filterValue={filterValue} />
    </div>
  )
}

const PokemonList = ({ pokemonList, filterValue }: PokemonList) => {
  return (
    <div className={styles.cardList}>
      {filterPokemonsByName(pokemonList, filterValue).map(({ name, id, weight, height }) => {
        return <Pokemon name={name} id={id} key={id} weight={weight} height={height} />
      })}
    </div>
  )
}
