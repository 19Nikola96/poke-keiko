export type PokemonType = {
   name: string
   id: number
   weight: number
   height: number
}

export type PokemonListType = {
   pokemonList: PokemonType[]
   filterValue: string
}
