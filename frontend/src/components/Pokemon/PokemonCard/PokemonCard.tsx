import styles from './PokemonCard.module.css'
import { Link } from 'react-router-dom'
import { POKEMON_IMAGE_BASE_URL } from '../data_integration/constants'
import { AnimateFadeIn } from 'components/Animate/Animate'

type PokemonCardProps = {
   name: string
   id: number
   weight: number
   height: number
   imgLink: {
      route: string
      type: string
   }
   index: number
}

const PokemonCard = ({ name, id, weight, height, imgLink, index }: PokemonCardProps) => {
   return (
      <AnimateFadeIn delay={index * 50}>
         <Link to={`/pokemon/${id}/${imgLink.type}`}>
            <div className={styles.card}>
               <h3>{name}</h3>
               <img src={`${POKEMON_IMAGE_BASE_URL}${imgLink.route}${id}.${imgLink.type}`} alt={`pokemon_${id}`} />
               <div>
                  <p>Id: {id}</p>
                  <p>Weight: {weight / 10} kg</p>
                  <p>Height: {height * 10} cm</p>
               </div>
            </div>
         </Link>
      </AnimateFadeIn>
   )
}

export default PokemonCard
