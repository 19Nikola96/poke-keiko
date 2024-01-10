import React from 'react'
import styles from './Pokemon.module.css'

type PokemonProps = {
   name: string
   id: number
   weight: number
   height: number
}

const Pokemon = ({ name, id, weight, height }: PokemonProps) => {
   return (
      <div className={styles.card}>
         <h3>{name}</h3>
         <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`} alt={`pokemon_${id}`} />
         <div>
            <p>Id: {id}</p>
            <p>Weight: {weight / 10} kg</p>
            <p>Height: {height * 10} cm</p>
         </div>
      </div>
   )
}

export default Pokemon
