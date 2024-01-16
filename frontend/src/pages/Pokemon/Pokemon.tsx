import { useNavigate, useParams } from 'react-router-dom'
import styles from './Pokemon.module.css'
import PokemonDetail from 'components/Pokemon/PokemonDetail/PokemonDetail'

const Pokemon = () => {
   const { id } = useParams()
   const navigate = useNavigate();

   return (
      <div className={styles.pokemonDetails}>
         <button onClick={() => navigate(-1)}>🔙</button>
         <PokemonDetail pokeId={id} />
      </div>
   )
}

export default Pokemon
