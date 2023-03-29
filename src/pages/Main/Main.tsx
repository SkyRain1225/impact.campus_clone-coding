import React from 'react';

import { Banner, Contents, Footer, Header } from '~/components';

import * as S from './Main.styled';

const Main = () => {
  return (
    <S.Container>
      <Header />
      <Banner />
      <Contents />
      <Footer />
    </S.Container>
  );
};

export default Main;
