import styles from './SideMenu.module.css'

const SideMenu = ({children}: {children: React.ReactNode}) => {
    return(
      <div className={styles.userHolder}>
        <div className={styles.logoAndUsers}>
         {children}
        </div>
      </div>
    )
}

export default SideMenu