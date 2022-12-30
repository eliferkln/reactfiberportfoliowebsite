import React from 'react';
import { LinkHandler } from '../LinkHandler/LinkHandler';
import * as S from './Footer.styles';

interface Props {
  repoHref?: string;
}

export const Footer = (props: Props) => {
  const { repoHref = 'https://github.com/eliferkln/myportfolio' } = props;

  return (
    <>
      <S.GithubWrapper></S.GithubWrapper>
      <S.AuthorWrapper>Designed | Developed by Hanife Erkalan</S.AuthorWrapper>
    </>
  );
};
