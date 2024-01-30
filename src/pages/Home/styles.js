import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    padding: 40px 123px;
    margin: 0 auto;
    overflow-y: auto;

    > header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;

      h1 {
        font-size: 32px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`

export const Create = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ theme }) => theme.COLORS.PINK};

  color:  ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border: none;
  border-radius: 8px;

  padding: 14px 32px;

  cursor: pointer;

  > svg {
    font-size: 20px;
  }
`