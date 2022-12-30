import { useUIStore } from 'store';
import { useEffect } from 'react';
import Link from 'next/link';

import { Head } from 'seo/Head/Head';

import * as S from './IndexPage.styles';
import { Vaporwave3D } from 'components/canvas/vaporwave/Vaporwave3D/Vaporwave3D';

export default function IndexPage() {
  return (
    <>
      <Head />
    </>
  );
}

IndexPage.r3f = (
  <>
    <Vaporwave3D />
  </>
);
