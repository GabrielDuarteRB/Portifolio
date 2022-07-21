import Imagem from "../Imagem/Imagem"
import styles from "./Perfil.module.css"

const Perfil = ({urlImagem, name}) => {

    return(
        <section className={styles.perfil}>
            <div>
                <p>Bem vindo ao perfil do(a) </p>
                <h1 className={styles.animacaoCursor}>{name}</h1>
            </div>
            <Imagem url={urlImagem}/>
        </section>
    )

}

export default Perfil