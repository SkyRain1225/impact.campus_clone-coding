import styled from 'styled-components';

export const Container = styled.div`
  height: 450px;
  margin-top: 9rem;
  width: 1060px;
  padding: 0 1rem;
  > .programs_title {
    margin-bottom: 2.5rem;
    > h2 {
      font-size: 1.6rem;
      font-weight: 900;
    }
    > div {
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.9rem;
      font-weight: 900;
      color: ${props => props.theme.colors.gray4};
      letter-spacing: -1px;
      cursor: pointer;

      img {
        width: 16px;
      }
    }
  }

  > .programs_wrapper {
    max-width: 1060px;
    display: flex;
    gap: 1.5rem;
    > .program_desc {
      width: 340px;
      height: 315px;
      display: flex;
      flex-direction: column;
      letter-spacing: -1px;
      gap: 1rem;
      > img {
        border-radius: 6px;
        cursor: pointer;
      }

      > div {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        gap: 1rem;
        color: ${props => props.theme.colors.gray3};

        > div {
          // 수정 왜 안나옴?
          &:after {
            width: 1px;
            height: 10px;
            content: '';
            background-color: black;
            margin: 0 8px;
          }
        }
      }

      > h3 {
        line-height: 28px;
      }

      > div > img {
        width: 100px;
        height: 13.24px;
        object-fit: contain;
      }
    }
  }

  @media (max-width: 1023px) {
    max-width: 1060px;
    width: 100%;
    height: 100%;
    padding: 0 2.5rem;
    margin-top: 0rem;
    margin-bottom: 3rem;
    > .programs_title {
      width: 100%;
      display: flex;
      gap: 0;
      justify-content: space-between;
      > h2 {
        font-size: 1.2rem;
        letter-spacing: -1px;
      }
    }

    > .programs_wrapper {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      > .program_desc {
        width: 100%;
        height: auto;

        > h3 {
          font-size: 0.9rem;
          margin-top: -0.6rem;
        }

        > div {
          font-size: 0.8rem;
          margin-top: -0.8rem;
        }
      }
    }
  }
`;
