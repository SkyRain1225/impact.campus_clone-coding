import React from 'react';

import { CommunityImg, ExperienceImg, NextImg, ProgramImg, RealWorldImg } from '~/assets/images';

import * as S from './ShowCase.styled';

const ShowCase = () => {
  return (
    <S.Container>
      <div className="header_wrapper">
        <div className="header_title">
          <h2>임팩트캠퍼스 활용하기</h2>
          <div>
            자세히 보기
            <img src={NextImg} alt="next-img" />
          </div>
        </div>
        <div className="header_contents">
          <div>나에게 꼭 필요한 경험을 찾아 동료들과 함께</div>
          <div>배우며 경험을 진짜 내 것으로 만들어보세요.</div>
          <div>체인지메이커가 되고 싶은 나에게</div>
          <div>무한한 커리어 세계가 펼쳐집니다.</div>
        </div>
      </div>
      <div className="image_wrapper">
        <div>
          <img src={ProgramImg} alt="header_img" />
          <img src={ExperienceImg} alt="header_img" />
        </div>
        <div>
          <img src={RealWorldImg} alt="header_img" />
          <img src={CommunityImg} alt="header_img" />
        </div>
      </div>
    </S.Container>
  );
};

export default ShowCase;
