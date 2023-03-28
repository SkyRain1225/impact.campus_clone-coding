import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.1rem;
  background-color: ${props => props.theme.colors.white};

  @media screen and (max-width: 1023px) {
    height: 55px;
  }

  > .header_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1276px;

    > .header_menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2.5rem;
      font-size: 14px;
      font-weight: 900;
      letter-spacing: -1px;

      > .header__logo {
        margin-right: 1.5rem;
        cursor: pointer;

        @media screen and (max-width: 1023px) {
          height: 20px;
          margin-left: -3rem;
        }
      }

      > .header_menu_item {
        cursor: pointer;
        transition: all 0.1s ease-in-out;

        &:hover {
          color: ${props => props.theme.colors.blue};
        }
      }
    }
  }
`;
