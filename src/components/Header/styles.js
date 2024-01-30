import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 116px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 64px;

  padding: 24px 123px;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER};

  > h1 {
    font-size: 24px;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Profile = styled(Link)`
  display: flex;
  gap: 9px;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: right;

    span {
      word-wrap: normal;
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 14px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
      font-size: 14px;
    }
  }

  > img {
    width: 64px;
    height: 64px;

    border-radius: 50%;
  }
`