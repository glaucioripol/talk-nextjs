import { retrieveProfileData } from '../src/services/detailsMyUser'

export { Home as default } from '../src/screens'

// getStaticProps -> é executado apenas em tempo de build, é usado para o SSG
// getServerSideProps -> é executado toda requisição e o servidor devolve processado, para dados mais dinamicos
// getStaticPaths -> é utilizado para rotas dinamicas baseado em dados

export async function getStaticProps() {
  const props = await retrieveProfileData()

  return {
    props,
  }
}
