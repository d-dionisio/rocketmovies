import styled from 'styled-components'

export const Container = styled.div`

`
export const Header = styled.div`
  width: 100%;
  height: 144px;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding: 64px 168px;

  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -84px auto;
  text-align: center;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 64px;

  width: 186px;
  height: 186px;

  img {
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  label {
    width: 48px;
    height: 48px;

    background: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }
`
