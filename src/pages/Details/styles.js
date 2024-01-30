import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
  "header"
  "content";

  > main {
    width: 100%;
    padding: 40px 123px;
    margin: 0 auto;
    overflow-y: auto;
    
    div {
      display: flex;
      align-items: center;
      gap: 2.5px;
      svg {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }

    .title {
      margin: 24px 0;
      display: flex;
      align-items: center;

      h1 {
        font-size: 36px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
        margin-right: 20px;
      }

      div {
        display: flex;
        gap: 10px;
        font-size: 20px;
      }
    }

    .description {
      display: flex;
      align-items: center;
      gap: 5px;

      color: ${({ theme }) => theme.COLORS.WHITE};

      > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        margin-right: 1.5px;
      }

      > svg {
        margin-left: 8px;
      }
    }

    .tags {
      display: flex;
      gap: 8px;
    }

    > p {
      text-align: justify;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`