import { useEffect, useState } from 'react'
import Loader from 'components/Loader/Loader'
import ErrorCard from 'components/Error/Error'
import styles from './PokemonDetail.module.css'
import { fetchPokemons } from '../data_integration/fetchPokemons'
import { PokemonProps } from '../domain/buisness_objetcs/pokemon.type'

const PokemonDetail = ({ pokeId }: { pokeId: string | undefined }) => {
   const [pokemonDetails, setPokemonDetails] = useState<PokemonProps>({
      name: '',
      id: 0,
      weight: 0,
      height: 0,
   })
   const [isLoading, setIsLoading] = useState(true)
   const [errorMessage, setErrorMessage] = useState('')

   const updatePokemonDetails = async () => {
      const pokemonDetails = await fetchPokemons(`http://localhost:8000/pokemon/${pokeId}`)
      setIsLoading(false)
      if (pokemonDetails.statusCode && pokemonDetails.statusCode !== 200) {
         setErrorMessage(pokemonDetails.message)
      } else {
         setPokemonDetails(pokemonDetails)
      }
   }

   useEffect(() => {
      updatePokemonDetails()
   }, [])

   return (
      <>
         <Loader isLoading={isLoading} />
         {pokemonDetails.id !== 0 &&
            <div className={styles.pokemonDetail}>
               <h2>{pokemonDetails.name}</h2>
               <div>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeId}.gif`} alt={`pokemon_front_${pokeId}`} />
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/${pokeId}.gif`} alt={`pokemon_back_${pokeId}`} />
               </div>
               <div>
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${pokeId}.gif`} alt={`pokemon_front_shiny${pokeId}`} />
                  <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/back/shiny/${pokeId}.gif`} alt={`pokemon_back_shiny${pokeId}`} />
               </div>
               <div className={styles.detail}>
                  <p>Id: {pokemonDetails.id}</p>
                  <p>Weight: {pokemonDetails.weight / 10} kg</p>
                  <p>Height: {pokemonDetails.height * 10} cm</p>
               </div>
            </div>
         }
         <ErrorCard errorMessage={errorMessage} />
      </>
   )
}

export default PokemonDetail
