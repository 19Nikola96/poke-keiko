import styles from './PokemonCard.module.css'
import { Link } from 'react-router-dom'
import { PokemonProps } from '../domain/buisness_objetcs/pokemon.type'

const Pokemon = ({ name, id, weight, height }: PokemonProps) => {
   return (
      <Link to={`/pokemon/${id}`}>
         <div className={styles.card}>
            <h3>{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`} alt={`pokemon_${id}`} />
            <div>
               <p>Id: {id}</p>
               <p>Weight: {weight / 10} kg</p>
               <p>Height: {height * 10} cm</p>
            </div>
         </div>
      </Link>
   )
}

export default Pokemon
