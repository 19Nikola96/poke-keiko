import React from 'react'
import Pokemon from 'components/Pokemon/Pokemon'
import styles from "./PokemonList.module.css"
import { PokemonType, PokemonListType } from 'Types'

function filterPokemonsByName(pokemons: PokemonType[], filteredName: string) {
   return pokemons.filter(({ name }) => name.toLowerCase().includes(filteredName))
}

const PokemonList = ({ pokemonList, filterValue }: PokemonListType) => {
   return (
      <>
         {
            pokemonList.length !== 0 &&
            <div className={styles.cardList}>
               {filterPokemonsByName(pokemonList, filterValue).map(({ name, id, weight, height }) => {
                  return <Pokemon name={name} id={id} key={id} weight={weight} height={height} />
               })}
            </div>
         }
      </>
   )
}

export default PokemonList
