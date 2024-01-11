export const fetchPokemons = async (url: string) => {
   try {
      const response = await fetch(url, { headers: { accept: "application/json" } })
      const jsonResponse = await response.json()
      return jsonResponse
   } catch (error) {
      throw error
   }
}
