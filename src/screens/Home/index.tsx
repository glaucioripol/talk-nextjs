import React from 'react'

import { Container, Header, TopBar } from '../../components'
import { ProfileImageContainer } from './styles'

interface IProps {
  profileImageUrl: string
  githubUrl: string
  linkedinUrl: string
  bio: string
}

export const Home: React.FC<IProps> = ({
  profileImageUrl,
  bio,
  githubUrl,
  linkedinUrl,
}) => (
  <>
    <Header title="Página inicial" />

    <TopBar />
    <Container>
      <section>
        <ProfileImageContainer>
          <img src={profileImageUrl} width="250" alt="Minha imagem de perfil do github" />
        </ProfileImageContainer>

        <article style={{ textAlign: 'center' }}>
          <h2>Quem sou eu?</h2>
          <p>{bio}</p>

          <button>Fale comigo</button>
        </article>
      </section>

      <section style={{ textAlign: 'center' }}>
        <h2>Minhas redes Sociais</h2>

        <a target="_black" href={githubUrl}>
          Github
        </a>
        <a target="_black" href={linkedinUrl}>
          Linkedin
        </a>
      </section>
    </Container>
  </>
)
