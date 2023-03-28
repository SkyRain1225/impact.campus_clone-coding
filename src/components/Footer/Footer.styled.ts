import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  /* height: 360px; */
  height: 300rem;
  background-color: ${props => props.theme.colors.gray};

  > .footer_wrapper {
    flex-direction: column;
    width: 1276px;

    > .footer_top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      > .footer_icon {
        cursor: pointer;
        display: flex;
        gap: 1.5rem;
      }
    }

    > .footer_menu {
      margin-top: 2.25rem;
      display: flex;
      gap: 1rem;
      font-size: 0.9rem;
      font-weight: 900;
      letter-spacing: -1px;
      color: ${props => props.theme.colors.gray2};

      > .footer_menu_item {
        transition: 0.1s ease-in-out;
        cursor: pointer;
        &:hover {
          color: ${props => props.theme.colors.blue};
        }
      }
    }

    > .footer_info {
      color: ${props => props.theme.colors.gray3};
      font-size: 0.8rem;
      line-height: 1.25rem;
      font-weight: 500;
      margin-top: 0.75rem;

      > .footer_email {
        display: flex;
        gap: 0.3rem;
        color: ${props => props.theme.colors.gray5};

        > div {
          font-size: 0.9rem;
        }
      }
    }

    > .copyright {
      color: ${props => props.theme.colors.gray4};
      font-size: 0.8rem;
      font-weight: 600;
      margin-top: 2.5rem;
    }
  }

  @media (max-width: 1023px) {
    height: 290px;
    padding: 0 1.5rem;
    > .footer_wrapper {
      > .footer_top {
        > .footer_icon {
          gap: 0.5rem;
        }
      }

      > .footer_menu {
        margin-top: 2.25rem;
        > .footer_menu_item {
          font-size: 0.75rem;
          font-weight: 900;
          color: ${props => props.theme.colors.gray2};
        }
      }

      > .footer_info {
        color: ${props => props.theme.colors.gray4};
        font-size: 0.7rem;
        font-weight: 600;
        line-height: 1.1rem;
        letter-spacing: -0.5px;

        > .footer_email {
          > h4 {
            color: ${props => props.theme.colors.gray3};
            font-weight: 900;
          }
          > div {
            font-size: 0.8rem;
            font-weight: 500;
          }
        }
      }

      > .copyright {
        border-top: 1px solid ${props => props.theme.colors.gray6};
        font-size: 0.75rem;
        font-weight: 500;
        margin-top: 3rem;
        padding-top: 1rem;
      }
    }
  }
`;
