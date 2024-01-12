import styles from './PokemonCard.module.css'
import { Link } from 'react-router-dom'
import { PokemonInfo } from '../domain/buisness_objetcs/pokemon.type'
import { POKEMON_IMAGE_BASE_URL } from '../data_integration/constants'

const PokemonCard = ({ name, id, weight, height }: PokemonInfo) => {
   return (
      <Link to={`/pokemon/${id}`}>
         <div className={styles.card}>
            <h3>{name}</h3>
            <img src={`${POKEMON_IMAGE_BASE_URL}/other/showdown/${id}.gif`} alt={`pokemon_${id}`} />
            <div>
               <p>Id: {id}</p>
               <p>Weight: {weight / 10} kg</p>
               <p>Height: {height * 10} cm</p>
            </div>
         </div>
      </Link>
   )
}

export default PokemonCard
