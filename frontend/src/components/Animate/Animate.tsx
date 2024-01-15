import styles from './Animate.module.css'

type AnimateProps = {
   children: React.ReactNode,
   delay: number
}

export const AnimateTada = ({ children, delay }: AnimateProps) => {
   return (
      <div className={styles.tadaAnimation} style={{ animationDelay: `${delay}ms` }}>{children}</div>
   )
}
export const AnimateWobble = ({ children, delay }: AnimateProps) => {
   return (
      <div className={styles.wobbleAnimation} style={{ animationDelay: `${delay}ms` }}>{children}</div>
   )
}
export const AnimatePopUp = ({ children, delay }: AnimateProps) => {
   return (
      <div className={styles.popUpAnimation} style={{ animationDelay: `${delay}ms` }}>{children}</div>
   )
}
export const AnimateFadeIn = ({ children, delay }: AnimateProps) => {
   return (
      <div className={styles.fadeInAnimation} style={{ animationDelay: `${delay}ms` }}>{children}</div>
   )
}
