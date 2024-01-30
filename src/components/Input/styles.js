import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  color: ${({ theme }) => theme.COLORS.GRAY_200};

  border-radius: 10px;

  margin-bottom: 8px;

  > svg {
    margin-left: 16px;
  }

  > input {
    width: 100%;
    height: 56px;

    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    padding: 19px;

    background: transparent;

    outline: none;

    &::placeholder {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }

  }
`