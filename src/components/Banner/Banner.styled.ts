import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  > img {
    width: 100%;
    height: 520px;
    object-position: center bottom;
    object-fit: cover;
  }

  > .banner_center {
    width: 100%;
    max-width: 1276px;
    height: fit-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    text-align: left;
    color: ${props => props.theme.colors.white};

    > .banner_title {
      width: 420px;
      letter-spacing: -5px;
      font-size: 3rem;
      font-weight: 700;
      white-space: pre-line;
    }

    > .banner_desc {
      font-size: 1.3rem;
      font-weight: 500;
      letter-spacing: -2px;
    }
  }

  @media (max-width: 1023px) {
    > img {
      height: 430px;
    }

    > .banner_center {
      margin-left: 1rem;
      top: 35%;

      > .banner_title {
        font-size: 1.5rem;
        letter-spacing: -3px;
        width: 200px;
      }
      > .banner_desc {
        font-size: 0.9rem;
        font-weight: 500;
      }
    }
  }
`;
