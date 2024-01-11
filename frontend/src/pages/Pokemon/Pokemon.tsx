import { useParams } from 'react-router-dom'
import styles from './Pokemon.module.css'
import PokemonDetail from 'components/Pokemon/PokemonDetail/PokemonDetail'

const Pokemon = () => {
   const { id } = useParams()

   return (
      <div className={styles.pokemonDetails}>
         <PokemonDetail pokeId={id} />
      </div>
   )
}

export default Pokemon
