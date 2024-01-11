import React, { useEffect, useState } from 'react'
import Pokemon from 'components/Pokemon/Pokemon'
import styles from "./PokemonList.module.css"
import { PokemonInfo, PokemonDisplay } from 'components/PokemonList/domain/business_objects/pokemon.type'
import Loader from 'components/Loader/Loader'
import { fetchPokemons } from './data_integration/fetchPokemons'
import ErrorCard from 'components/Error/Error'

function filterPokemonsByName(pokemons: PokemonInfo[], filteredName: string) {
   return pokemons.filter(({ name }) => name.toLowerCase().includes(filteredName))
}

const PokemonList = ({ filterValue }: PokemonDisplay) => {
   const [pokemonList, setPokemonList] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [errorMessage, setErrorMessage] = useState('')

   const updatePokemonList = async () => {
      const pokemonList = await fetchPokemons("http://localhost:8000/pokemons")
      setIsLoading(false)
      if (pokemonList.statusCode && pokemonList.statusCode !== 200) {
         setErrorMessage(pokemonList.message)
      } else {
         setPokemonList(pokemonList)
      }
   }

   useEffect(() => {
      updatePokemonList()
   }, [])

   const filteredPokemons = filterPokemonsByName(pokemonList, filterValue);

   if (filteredPokemons.length === 0 && !errorMessage)
      return null

   return (
      <>
         <Loader isLoading={isLoading} />
         <div className={styles.pokemonList}>
            {
               filteredPokemons.map(({ name, id, weight, height }) => <Pokemon name={name} id={id} key={id} weight={weight} height={height} />)
            }
         </div>
         <ErrorCard errorMessage={errorMessage} />
      </>
   )
}

export default PokemonList
