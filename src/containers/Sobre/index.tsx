import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Githubsecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Trabalho com desenvolvimento há 2 anos, atualmente faço projetos como
      Freelancer e estudo pela EBAC. Minha especialidade está voltada ao
      front-end, mas procuro ampliar minhas capacitações ao fullstack, e assim,
      ingressar como um programador completo no mercado.
    </Paragrafo>
    <Githubsecao>
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leoliveira11&layout=compact&langs_count=7&theme=dracula" />
    </Githubsecao>
  </section>
)

export default Sobre
