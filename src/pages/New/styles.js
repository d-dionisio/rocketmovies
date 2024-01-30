import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 40px 123px;
    overflow-y: auto;
  }
`
export const Form = styled.form`

  a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  h1 {
    font-size: 36px;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 24px 0 40px 0;
  }

  .btn {
    display: flex;
    gap: 40px;

    .btnDelete {
      background: #0D0C0F;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }
`
export const Title = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;
`
export const TextArea = styled.textarea`
  width: 100%;
  height: 274px;

  border-radius: 10px;
  border: none;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  padding: 19px 16px;

  resize: none;

  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.WHITE};

  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`

export const Section = styled.section`
  h2 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    margin: 40px 0 24px 0;
  }
`
export const Note = styled.div`
  display: flex;

  background: #0D0C0F;

  padding: 16px;
  border-radius: 8px;
`