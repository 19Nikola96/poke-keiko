import { POKEDEX_PAGE_ROUTE } from 'components/Pokemon/data_integration/constants'
import styles from './Pagination.module.css'
import { Link } from 'react-router-dom'

const Pagination = ({ page, imgType }: { page: number, imgType: string | undefined }) => {
   const previousPokedexPageIndex = `${POKEDEX_PAGE_ROUTE}${page === 0 ? 10 : page - 1}/${imgType}`
   const nextPokedexPageIndex = `${POKEDEX_PAGE_ROUTE}${page === 10 ? 0 : page + 1}/${imgType}`

   return (
      <div className={styles.pagination}>
         <Link to={previousPokedexPageIndex}>{'<'}</Link>
         <Link to={nextPokedexPageIndex}>{'>'}</Link>
      </div>
   )
}

export default Pagination
