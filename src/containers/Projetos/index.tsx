import { useEffect, useState } from 'react'
import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

type Repo = {
  id: number
  name: string
  description: string
  html_url: string
  fork: boolean
  create_at: string
}

const Projetos = () => {
  const [repos, setRepos] = useState<Repo[]>([])

  useEffect(() => {
    fetch('https://api.github.com/users/leoliveira11/repos')
      .then((res) => res.json())
      .then((data) => setRepos(data))
  }, [])

  return (
    <section>
      <Titulo fontSize={16}>Projetos</Titulo>
      <Lista>
        {repos
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.create_at).getTime() - new Date(b.create_at).getTime()
          )
          .slice(0, 6)
          .map((repo) => (
            <li key={repo.id}>
              <Projeto
                titulo={repo.name}
                descricao={repo.description}
                link={repo.html_url}
              />
            </li>
          ))}
      </Lista>
    </section>
  )
}

export default Projetos
