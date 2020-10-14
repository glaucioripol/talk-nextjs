import React from 'react'
import Router from 'next/router'

import { Container, Header, TopBar } from '../../components'
import { IGithubModel } from '../../interfaces'
import {
  Section,
  BioParagraph,
  ProfileImageContainer,
  TitleWhoIm,
  ContactMeLink,
} from './styles'

export const Home: React.FC<IGithubModel> = ({ avatar_url, bio, html_url, blog }) => (
  <>
    <Header title="Página inicial" />

    <TopBar />

    <Container>
      <section>
        <ProfileImageContainer>
          <img src={avatar_url} width="250" alt="Minha imagem de perfil do github" />
        </ProfileImageContainer>

        <Section>
          <TitleWhoIm>Quem sou eu?</TitleWhoIm>

          <BioParagraph>{bio}</BioParagraph>

          <ContactMeLink onClick={() => Router.push('/fale_comigo')} type="button">
            Fale comigo
          </ContactMeLink>
        </Section>
      </section>

      <Section>
        <h2>Minhas redes Sociais</h2>

        <a target="_black" href={html_url}>
          Github
        </a>
        <a target="_black" href={blog}>
          Linkedin
        </a>
      </Section>
    </Container>
  </>
)
