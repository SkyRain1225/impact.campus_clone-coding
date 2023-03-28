import styled from 'styled-components';

export const Container = styled.div<{ scroll: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3.1rem;
  transition: 0.3s ease-in-out;
  background-color: ${({ scroll }) => (scroll ? 'white' : 'none')};
  border-bottom: 1px solid ${props => props.theme.colors.gray};

  > .header_wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1276px;

    > .header_menu_list,
    .header_menu_sign {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;

      > .header_menu_item {
        color: ${props => props.theme.colors.black};
        font-size: 0.9rem;
        font-weight: 900;
        letter-spacing: -1px;
        cursor: pointer;
        transition: 0.1s ease-in-out;
        &:hover {
          color: ${props => props.theme.colors.blue};
        }
      }

      > .header_logo {
        fill: ${props => props.theme.colors.black};
        margin-right: 1.5rem;
        cursor: pointer;
      }
    }

    > .header_list {
      display: none;
    }
  }

  @media (max-width: 1023px) {
    height: 55px;
    padding: 0 1.2rem;
    > .header_wrapper {
      > .header_list {
        display: flex;
        cursor: pointer;
      }

      > .header_menu_list,
      .header_menu_sign {
        > .header_logo {
          width: 9.7rem;
        }
        > .header_menu_item {
          display: none;
        }
      }
    }
  }
`;
