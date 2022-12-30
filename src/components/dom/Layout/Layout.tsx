import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { useUIStore } from 'store';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import * as S from './Layout.styles';

interface Props {
  isReady: boolean;
  children: React.ReactNode;
  repoHref?: string;
}

export const Layout = (props: Props) => {
  const { isReady, children, repoHref } = props;
  const router = useRouter();

  useEffect(() => {
    if (isReady && !document.body.classList.contains('isReady')) {
      document.body.classList.add('isReady');
    }

    return () => {
      document.body.classList.remove('isReady');
    };
  }, [isReady]);

  return (
    <>
      <S.ReadyWrapper isReady={isReady} />
      <S.AppBackground />
      {router.pathname !== '/' && (
        <S.BackWrapper>
          <S.BackBtn>
            <S.BackBtnLabel>back</S.BackBtnLabel>
          </S.BackBtn>
        </S.BackWrapper>
      )}
      <Header repoHref={repoHref} />
      <Footer repoHref={repoHref} />
      {children}
    </>
  );
};
