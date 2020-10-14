import styled, { css } from 'styled-components';
import { TypeTheme } from '../../styles';

export const TopBarContainer = styled.header`
${({ theme }: TypeTheme) => css`
  background-color: ${theme.colors.primary.color};
  color: ${theme.colors.primary.contrastColor};
  display: flex;
  justify-content: space-between;
  padding: ${theme.spaces.small} ${theme.spaces.large};
  position: fixed;
  width: 100%;

  .optionsMenu {
    align-items: center;
    display: flex;
    gap: ${theme.spaces.small};
    height: 100%;

    li a {
    color: ${theme.colors.primary.contrastColor};
      text-decoration: none;
    }

    li:hover {
      font-weight: bolder;
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: ${theme.spaces.middle};
  }
`}
`
