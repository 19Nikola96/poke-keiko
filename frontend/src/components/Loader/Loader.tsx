import React from 'react'
import styles from "./Loader.module.css"
import LoaderLogo from "./loader.svg"

type PokeLoader = {
   isLoading: boolean
}

const Loader = ({ isLoading }: PokeLoader) => {
   return (
      <div className={styles.loader}>
         {
            isLoading &&
            <div>
               <img src={LoaderLogo} alt="loadind_img" />
            </div>
         }
      </div>
   )
}

export default Loader
