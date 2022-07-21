import moment from 'moment'
import styles from './Cards.module.css'

const Cards = ({itens}) => {

    console.log(itens)

    return(
        <section className={styles.cards}>
            {
                itens.map((i, index) => (
                    <div key={index}>
                        <div>
                            <h1>{i.name}</h1>
                            <p>{i.description !== null ? i.description : 'Não possui descrição'}</p>
                        </div>
                        <div>
                            <small>Criado em: {moment(i.created_at).format('DD/MM/YYYY')}</small>
                            <small>Ultima atualização: {moment(i.update_at).format('DD/MM/YYYY')}</small>
                            <small>Linguagem utilizada: {i.language}</small>
                            <a target='_blank' href={i.html_url}>See more</a>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}

export default Cards