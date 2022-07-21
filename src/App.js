import './App.css';
import axios from 'axios'
import moment from 'moment'
import {useEffect, useState} from 'react'
import Perfil from './components/Perfil/Perfil';
import Informacoes from './components/Informacoes/Informacoes';
import Repositorios from './components/Repositorios/Repositorios';


function  App()  {

  const [imagemPerfil, setImagemPerfil] = useState()
  const [nomePerfil, setNomePerfil] = useState()
  const [informacao, setInformacao] = useState([])
  const [arrayRepositorios, setArrayRepositorios] = useState([])

  const api = async () => {
  
    try {
      const {data: array} = await axios.get('https://api.github.com/users/GabrielDuarteRB')
      const {data: repositorios} = await axios.get('https://api.github.com/users/GabrielDuarteRB/repos')
      setImagemPerfil(array.avatar_url)
      setNomePerfil(array.name)
      setInformacao([
        {texto: 'Seguidores', informacao: array.followers},
        {texto: 'Seguindo', informacao: array.following},
        {texto: 'Empresa', informacao: array.company},
        {texto: 'Repositórios', informacao: array.public_repos},
        {texto: 'Data de criação', informacao: moment(array.created_at).format('DD/MM/YYYY')},
        {texto: 'Ultima atualização', informacao: moment(array.updated_at).format('DD/MM/YYYY')}
      ])
      for(let i = 0; i <= 5; i++){
        setArrayRepositorios((arrayRepositorios) => [...arrayRepositorios, repositorios[i]])
      }
    } catch (error) {
      console.log(error)
    }
  }
  
    useEffect(  () => {
      api()
    }, [])

    console.log(arrayRepositorios)
  
  return  (
    <div className='pagina'>
      <div className='perfil'>
        <Perfil name={nomePerfil} urlImagem={imagemPerfil}/>
      </div>
      <div>
        <Informacoes name={nomePerfil} informacoes={informacao}/>
      </div>
      <div>
        <Repositorios itens={arrayRepositorios}/>
      </div>

      
    </div>
  );
}

export default App;
