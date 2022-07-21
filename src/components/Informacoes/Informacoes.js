import Lista from "../Lista/Lista"
import styles from './Informacoes.module.css'

const Informacoes = ({name, informacoes}) => {

    const nomeSplit = String(name).split(' ')

    return(
        <div className={styles.informacao}>
            <h1>Informações do(a) {nomeSplit[0]}</h1>
            <Lista itens={informacoes}/>
        </div>
    )
}

export default Informacoes