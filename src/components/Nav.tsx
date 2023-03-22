import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { routes } from './route';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 2.8rem;
  margin: 0 4rem;
`;

const NavItem = styled.a<{ active: boolean }>`
  font-size: 1.6rem;

  ${(props) => props.active && `color: #3f3fff;`}
`;

const Logo = styled.h1`
  flex: 0 0 55px;
  height: 23px;
  background: url('/logo.svg') no-repeat;
  cursor: pointer;
`;

export default function Nav(): JSX.Element {
  const router = useRouter();
  return (
    <>
      <Logo
        onClick={() => {
          router.push('/');
        }}
      />
      <NavWrapper>
        {routes.map((route, index) => (
          <Link href={route.link} key={index} legacyBehavior passHref>
            <NavItem active={router.pathname === route.link}>{route.title}</NavItem>
          </Link>
        ))}
      </NavWrapper>
    </>
  );
}
