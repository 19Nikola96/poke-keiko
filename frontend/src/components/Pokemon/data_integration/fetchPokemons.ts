import { BASE_URL } from "./constants"

export const fetchPokemons = async (url: string) => {
   try {
      const response = await fetch(BASE_URL + url, { headers: { accept: "application/json" } })
      const jsonResponse = await response.json()
      return jsonResponse
   } catch (error) {
      throw error
   }
}
