import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Root } from "./components/Root"
import { Home } from "./pages/Home"
import PokemonDetails from "pages/Pokemon/Pokemon"
import { POKEDEX_PAGE_ROUTE, POKEMON_SINGLE_ROUTE } from "components/Pokemon/data_integration/constants"

export const App = () => {
  return (
    <Root>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={`${POKEDEX_PAGE_ROUTE}0`} replace={true} />} />
          <Route path={`${POKEDEX_PAGE_ROUTE}:page`} element={<Home />} />
          <Route path={`${POKEMON_SINGLE_ROUTE}:id`} element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </Root>
  )
}
