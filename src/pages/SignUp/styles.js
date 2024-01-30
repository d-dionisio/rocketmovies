import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 0 136px;

  h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 48px 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 2.5px;
    color: ${({ theme }) => theme.COLORS.PINK};
    margin-top: 42px;
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
  filter: brightness(60%) blur(1px) contrast(80%);
`