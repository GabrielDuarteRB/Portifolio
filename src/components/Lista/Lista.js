import styles from './Lista.module.css'

const Lista = ({itens}) => {


    return(
        <ul className={styles.lista}>
            {itens.map((item, index) => (
                <li 
                    key={index} 
                >
                    <p>{item.informacao}</p>
                    <p>{item.texto}</p>
                </li>
            ))}
        </ul>
    )
}

export default Lista