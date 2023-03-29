import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  width: 1060px;

  > .image_wrapper {
    display: flex;
    gap: 1.5rem;
    margin-top: 10rem;
    > div {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      &:first-child {
        margin-top: 4rem;
        margin-bottom: 4rem;
      }
    }

    > div > img {
      width: 277px;
      height: 346px;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 10px ${props => props.theme.colors.gray6};
      }
    }
  }

  > .header_wrapper {
    width: 1276px;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.7rem;
    margin-top: -26rem;

    > .header_title {
      > h2 {
        font-size: 1.6rem;
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

    > .header_contents {
      display: flex;
      flex-direction: column;
      color: ${props => props.theme.colors.gray3};
      font-weight: 500;
      font-size: 1.2rem;
      letter-spacing: -1px;
    }
  }

  @media (max-width: 1023px) {
    height: 100%;
    margin-top: 3rem;
    flex-direction: column;

    > .image_wrapper {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        &:first-child,
        &:last-child {
          margin-top: 0;
        }

        &:last-child {
          margin-bottom: 2rem;
        }
      }

      > div > img {
        width: 90%;
        height: 90%;
      }
    }

    > .header_wrapper {
      width: 100%;
      margin-top: 0rem;
      gap: 0;
      > .header_title {
        width: 100%;
        display: flex;
        justify-content: space-between;
        > h2 {
          font-size: 1.2rem;
          letter-spacing: -1px;
        }
      }

      > .header_contents {
        margin-top: 1.5rem;
        line-height: 1.6rem;
        width: 100%;
        text-align: left;
        font-size: 1rem;
        font-weight: 500;
        margin-bottom: 4rem;
      }
    }
  }
`;

// width: 1276px;
