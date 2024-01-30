import styled from 'styled-components'

export const Container = styled.span`
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  padding: 8px;
  border-radius: 8px;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 12px;
  margin: 40px 0;
`