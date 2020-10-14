import Link from 'next/link'
import { Header, TopBar } from '../../components'
import { Container, } from './styles'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Página inicial" />
      <TopBar />


    </Container>
  )
}