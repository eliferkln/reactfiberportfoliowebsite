import React from 'react';
import { LinkHandler } from '../LinkHandler/LinkHandler';
import * as S from './Header.styles';
import { SiLinkedin, SiGithub } from 'react-icons/si';
import { BiHomeHeart } from 'react-icons/bi';
interface Props {
  repoHref?: string;
}

export const Header = (props: Props) => {
  const { repoHref = 'https://myportfolio-hanifeerkalan.vercel.app/' } = props;

  return (
    <>
      <S.MyWrapper>
        <S.HeadWrapper>
          <LinkHandler isExternal elHref={'https://github.com/eliferkln/'}>
            <S.HeadButton>
              <SiGithub size="2rem" color="white" /> Github
            </S.HeadButton>
          </LinkHandler>
          <LinkHandler isExternal elHref={'https://linkedin.com/in/hanifeerkalan'}>
            <S.HeadButton>
              <SiLinkedin size="2rem" color="white" /> LinkedIn
            </S.HeadButton>
          </LinkHandler>
          <LinkHandler isExternal elHref={repoHref}>
            <S.HeadButton>
              <BiHomeHeart size="2rem" color="white" />
              Portfolio Website
            </S.HeadButton>
          </LinkHandler>
        </S.HeadWrapper>
        {/* <S.BodyWrapper> s</S.BodyWrapper> */}
      </S.MyWrapper>
    </>
  );
};
