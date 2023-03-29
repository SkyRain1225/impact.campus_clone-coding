import React from 'react';

import { ProgramLists, ShowCase } from '~/components/Contents';

import * as S from './Contents.styled';

const Contents = () => {
  return (
    <S.Container>
      <ShowCase />
      <ProgramLists />
    </S.Container>
  );
};

export default Contents;
