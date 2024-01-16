import { POKEDEX_PAGE_ROUTE } from 'components/Pokemon/data_integration/constants'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './RadioImgType.module.css'

const RadioImgType = ({ page, imgType }: { page: number, imgType: string | undefined }) => {
   const navigate = useNavigate()

   const handleImgTypeCHange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value === 'gif') {
         navigate(`${POKEDEX_PAGE_ROUTE}${page}/gif`)
      } else {
         navigate(`${POKEDEX_PAGE_ROUTE}${page}/png`)
      }
   }

   return (
      <div className={styles.imgChoice}>
         <label htmlFor="gif">
            <input type="radio" name="imgType" value='gif' id="gif" checked={imgType === 'gif'} onChange={handleImgTypeCHange} />
            GIF
         </label>
         <label htmlFor="png">
            <input type="radio" name="imgType" value='png' id="png" checked={imgType === 'png'} onChange={handleImgTypeCHange} />
            PNG
         </label>
      </div>
   )
}

export default RadioImgType
