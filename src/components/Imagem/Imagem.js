import styles from './Imagem.module.css'

const Imagem = ({url}) => {

    return(
        <img src={url} className={styles.redonda} />
        
    )

}

export default Imagem