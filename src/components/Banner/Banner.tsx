import React from 'react';

import BannerImage from '~/assets/images/banner_image.png';

import * as S from './Banner.styled';

const Banner = () => {
  return (
    <S.Container>
      <img src={BannerImage} alt="banner_image" />
      <div className="banner_center">
        <div className="banner_title">나의 무한한 커리어 가능성을 펼쳐보세요!</div>
        <div className="banner_desc">나를 위한 커리어 개발 플랫폼</div>
      </div>
    </S.Container>
  );
};

export default Banner;
