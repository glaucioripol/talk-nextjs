import React from 'react'
import Link from 'next/link'

import { TopBarContainer } from './styles';

export const TopBar: React.FC = () => (
  <TopBarContainer>
    <h1>Gláucio Dev &gt;__ </h1>

    <nav>
      <ul className="optionsMenu">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/fale_comigo">Fale comigo</Link>
        </li>
      </ul>
    </nav>
  </TopBarContainer>
)