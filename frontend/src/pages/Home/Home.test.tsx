import { render, screen } from "@testing-library/react"
import { Home } from "./index"
import { http } from "msw"
import { setupServer } from "msw/node"

// const server = setupServer(
// 	http.get("http://localhost:8000/pokemons", (req, res, ctx) => {
// 		// Respond with a mocked user token that gets persisted
// 		// in the `sessionStorage` by the `Login` component.
// 		return res(
// 			ctx.json([
// 				{ id: 1, name: "bulbasaur", height: 7, weight: 69 },
// 				{ id: 2, name: "ivysaur", height: 10, weight: 130 },
// 			]),
// 		)
// 	}),
// )

// describe("Test Fetching pokemon", () => {
// 	// Enable API mocking before tests.
// 	beforeAll(() => server.listen())

// 	// Reset any runtime request handlers we may add during the tests.
// 	afterEach(() => server.resetHandlers())

// 	// Disable API mocking after the tests are done.
// 	afterAll(() => server.close())

// 	it("should display the list of the first 151 pokemons", () => {
// 		console.log('croissant');
// 		render(<Home />)
// 		const bulbasaur = screen.findByText(/bulbasaur/)
// 		const ivysaur = screen.findByText(/ivysaur/)
// 		expect(ivysaur).toBeInTheDocument()
// 		expect(bulbasaur).toBeInTheDocument()
// 	})
// })

describe("<Home />", () => {
	it("should display Héricendre", () => {
		render(<Home />)
		const hericendre = screen.getByText(/Héricendre/)
		expect(hericendre).toBeInTheDocument()
	})
})

// warning " > @testing-library/user-event@13.5.0" has unmet peer dependency "@testing-library/dom@>=7.21.4".
// warning " > @typescript-eslint/eslint-plugin@5.4.0" has unmet peer dependency "eslint@^6.0.0 || ^7.0.0 || ^8.0.0".
// warning "@typescript-eslint/eslint-plugin > @typescript-eslint/experimental-utils@5.4.0" has unmet peer dependency "eslint@*".
// warning "@typescript-eslint/eslint-plugin > @typescript-eslint/experimental-utils > eslint-utils@3.0.0" has unmet peer dependency "eslint@>=5".
// warning " > @typescript-eslint/parser@5.4.0" has unmet peer dependency "eslint@^6.0.0 || ^7.0.0 || ^8.0.0".
// warning " > eslint-config-prettier@8.10.0" has unmet peer dependency "eslint@>=7.0.0".
// warning " > eslint-plugin-prettier@4.2.1" has unmet peer dependency "eslint@>=7.28.0".
// warning " > eslint-plugin-react@7.27.1" has unmet peer dependency "eslint@^3 || ^4 || ^5 || ^6 || ^7 || ^8".
// warning " > eslint-plugin-react-hooks@4.3.0" has unmet peer dependency "eslint@^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0".
