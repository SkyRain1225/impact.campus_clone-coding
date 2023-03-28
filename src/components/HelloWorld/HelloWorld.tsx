import { useEffect, useState } from 'react';

import { ReactComponent as Logo } from '~/assets/svg/logo.svg';

import * as S from './HelloWorld.styled';

const HelloWorld = () => {
  return (
    <S.Container>
      <div className="header_wrapper">
        <div className="header_menu">
          <Logo />

          <div className="header_menu_item">프로그램</div>
          <div className="header_menu_item">코치</div>
          <div className="header_menu_item">소개</div>
        </div>
        <div className="header_menu">
          <div className="header_menu_item">로그인</div>
          <div className="header_menu_item">회원가입</div>
        </div>
      </div>
    </S.Container>
  );
};

export default HelloWorld;
