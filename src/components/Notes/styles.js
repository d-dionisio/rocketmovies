import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;

  border: none;
  border-radius: 16px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 32px 32px 0 32px;

  text-align: left;

  margin-bottom: 24px;

  cursor: pointer;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 24px;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 12px;
    margin: 8px 6px 15px 0;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  > footer {
    display: flex;
    gap: 8px;
  }
`