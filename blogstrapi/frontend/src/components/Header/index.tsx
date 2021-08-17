import Link from 'next/link';
import React from 'react';

import { SITE_NAME } from '../../config/app-config';
import { Container } from './styled';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
}
