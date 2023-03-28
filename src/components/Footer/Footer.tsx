import React from 'react';

import { BlogIcon, FacebookIcon, InstagramIcon, Logo } from '~/assets/svg';

import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Container>
      <div className="footer_wrapper">
        <div className="footer_top">
          <Logo />
          <div className="footer_icon">
            <FacebookIcon />
            <InstagramIcon />
            <BlogIcon />
          </div>
        </div>
        <div className="footer_menu">
          <div className="footer_menu_item">약관 및 정책</div>
          <div className="footer_menu_item">고객센터</div>
        </div>
        <div className="footer_info">
          <div>서울특별시 성동구 뚝섬로1나길 5 헤이그라운드 성수 시작점 G205</div>
          <div>사단법인 루트임팩트 | 대표자 허재형 | 사업자등록번호 101-82-21959</div>
          <br />
          <div className="footer_email">
            <h4>이메일</h4>
            <div>impactcampus@rootimpact.org</div>
          </div>
        </div>
        <div className="copyright">© Root Impact. All rights reserved.</div>
      </div>
    </S.Container>
  );
};

export default Footer;
