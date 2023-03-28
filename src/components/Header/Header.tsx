import { useEffect, useState } from 'react';

import { ListIcon, Logo } from '~/assets/svg';

import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Container>
      <div className="header_wrapper">
        <div className="header_menu_list">
          <Logo />
          <div className="header_menu_item">프로그램</div>
          <div className="header_menu_item">코치</div>
          <div className="header_menu_item">소개</div>
        </div>

        <div className="header_menu_sign">
          <div className="header_menu_item">로그인</div>
          <div className="header_menu_item">회원가입</div>
        </div>
        <ListIcon />
      </div>
    </S.Container>
  );
};

export default Header;
