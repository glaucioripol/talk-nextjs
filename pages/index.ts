import { IGithubModel } from '../src/interfaces'
export { Home as default } from '../src/screens'

// getStaticProps -> é executado apenas em tempo de build, é usado para o SSG
// getServerSideProps -> é executado toda requisição e o servidor devolve processado, para dados mais dinamicos
// getStaticPaths -> é utilizado para rotas dinamicas baseado em dados

export async function getStaticProps() {
  const response = await fetch('https://api.github.com/users/glaucioripol')
  const payload = (await response.json()) as IGithubModel

  return {
    props: {
      profileImageUrl: payload.avatar_url,
      githubUrl: payload.html_url,
      linkedinUrl: payload.blog,
      bio: payload.bio,
    },
  }
}
