import { useEffect, useState } from 'react'
import PokemonCard from 'components/Pokemon/PokemonCard/PokemonCard'
import styles from "./PokemonList.module.css"
import Loader from 'components/Loader/Loader'
import ErrorCard from 'components/Error/Error'
import { PokemonDisplay, PokemonInfo } from '../domain/buisness_objetcs/pokemon.type'
import { fetchPokemons } from '../data_integration/fetchPokemons'
import { POKEMON_LIST_ROUTE } from '../data_integration/constants'
import { useParams } from 'react-router-dom'

function filterPokemonsByName(pokemons: PokemonInfo[], filteredName: string) {
   return pokemons.filter(({ name }) => name.toLowerCase().includes(filteredName))
}

const PokemonList = ({ filterValue, page }: PokemonDisplay) => {
   const [pokemonList, setPokemonList] = useState([])
   const [isLoading, setIsLoading] = useState(true)
   const [errorMessage, setErrorMessage] = useState('')
   const [imgLink, setImgLink] = useState({ route: '/other/showdown/', type: 'gif' })
   const { imgType } = useParams()

   const updatePokemonList = async () => {
      const pokemonList = await fetchPokemons(`${POKEMON_LIST_ROUTE}?page=${page}`)
      setIsLoading(false)
      if (pokemonList.statusCode && pokemonList.statusCode !== 200) {
         setErrorMessage(pokemonList.message)
      } else {
         setPokemonList(pokemonList)
      }
   }

   useEffect(() => {
      updatePokemonList()
   }, [page])

   useEffect(() => {
      if (imgType === 'gif') {
         setImgLink({ route: '/other/showdown/', type: 'gif' })
      } else setImgLink({ route: '/', type: 'png' })
   }, [imgType])

   const filteredPokemons = filterPokemonsByName(pokemonList, filterValue);

   if (filteredPokemons.length === 0 && !errorMessage)
      return null

   return (
      <>
         <Loader isLoading={isLoading} />
         <div className={styles.pokemonList}>
            {
               filteredPokemons.map(({ name, id, weight, height }, index) => <PokemonCard name={name} id={id} key={id} weight={weight} height={height} index={index} imgLink={imgLink} />)
            }
         </div>
         <ErrorCard errorMessage={errorMessage} />
      </>
   )
}

export default PokemonList
