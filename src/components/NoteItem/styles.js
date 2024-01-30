import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme,isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};

  border-radius: 10px;

  margin-right: 24px;

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.WHITE}` : "none"};

  input {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 16px;
    border: none;
    background: transparent;

    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }

  button {
    border: none;
    background: transparent;
    padding-right: 16px;
    cursor: pointer;

    svg {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.PINK : 'red'};
      width: 22px;
      height: 22px;
    }
  }
`