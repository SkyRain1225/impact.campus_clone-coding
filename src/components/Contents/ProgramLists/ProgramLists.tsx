import React from 'react';

import {
  DataMachineImg,
  NextImg,
  ProgrammersImg,
  PublishingImg,
  VanillaJSImg,
} from '~/assets/images';

import * as S from './ProgramLists.styled';

const ProgramLists = () => {
  interface ProgramListType {
    id: number;
    title: string;
    status: boolean;
    date: string;
    img: string;
    provider: string;
  }

  const data: ProgramListType[] = [
    {
      id: 1,
      title: '프론트엔드 개발을 위한 자바스크립트 (feat.VanillaJS) 19기',
      status: false, // true = 모집 중, false = 모집 마감
      date: '5주',
      img: VanillaJSImg,
      provider: ProgrammersImg,
    },
    {
      id: 2,
      title: '누구나 할 수 있는 데이터분석&머신러닝 스터디',
      status: false,
      date: '5주',
      img: DataMachineImg,
      provider: ProgrammersImg,
    },
    {
      id: 3,
      title: '만들면서 배우는 실전 퍼블리싱 스터디 3기',
      status: false,
      date: '4주',
      img: PublishingImg,
      provider: ProgrammersImg,
    },
  ];

  return (
    <S.Container>
      <div className="programs_title">
        <h2>최근 오픈한 프로그램</h2>
        <div>
          전체 보기
          <img src={NextImg} alt="next-img" />
        </div>
      </div>
      <div className="programs_wrapper">
        {data.map(item => (
          <div key={item.id} className="program_desc">
            <img src={item.img} alt="program" />
            <h3>{item.title}</h3>
            <div>
              <div>{item.status ? '모집 중' : '모집 마감'}</div>
              <div>{item.date}</div>
              <img src={item.provider} alt="provider" />
            </div>
          </div>
        ))}
      </div>
    </S.Container>
  );
};

export default ProgramLists;
