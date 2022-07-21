import Cards from "../Cards/Cards"
import styles from "./Repositorios.module.css"

const Repositorios = ({itens}) => {

    return(
        <section className={styles.repositorios}>
            <h1 className={styles.titulo}>Repositórios</h1>
            <Cards itens={itens} />
        </section>
    )
}

export default Repositorios