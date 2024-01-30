import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  border: none;
  border-radius: 8px;
  background: ${({ theme }) => theme.COLORS.PINK};
  padding: 16px 0;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 16px;

  cursor: pointer;

  margin-top: 24px;
`