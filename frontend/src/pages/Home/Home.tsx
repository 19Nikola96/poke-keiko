import Pokemon from "components/Pokemon/Pokemon"
import styles from "./Home.module.css"
import { useEffect, useState } from "react";

type Pokemon = {
   name: string
   id: number
   height: number
   weight: number
}

function filterPokemonsByName(pokemons: Pokemon[], filteredName: string) {
   return pokemons.filter(({ name }) => name.toLowerCase().includes(filteredName))
}

export const Home = () => {
   const [pokemonList, setPokemonList] = useState([])

   const fetchPokemons = () => {
      return fetch('http://localhost:8000/pokemons', { headers: { accept: "application/json" } })
         .then(response => response.json())
         .then(pokemonData => pokemonData);
   }

   useEffect(() => {
      fetchPokemons().then((data) => setPokemonList(data))
   }, [])

   const [filterValue, setFilterValue] = useState('');

   const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setFilterValue(event.target.value.toLowerCase());
   };

   return (
      <div className={styles.intro}>
         <div>Bienvenue sur ton futur pokédex !</div>
         <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
         <input className={styles.input} onChange={onInputChange} value={filterValue} />
         {
            filterPokemonsByName(pokemonList, filterValue).map(({ name, id }) => {
               return <Pokemon name={name} id={id} key={id} />
            })
         }
      </div>
   )
}
