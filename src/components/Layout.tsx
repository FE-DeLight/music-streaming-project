import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import Player from './Player';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  min-width: 955px;
  max-width: 1600px;
  margin: 0 auto;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 96px;
  background: #fff;
  margin-bottom: 3rem;
  padding: 10px 80px 0;
`;

const LeftArea = styled.div`
  display: flex;
  align-items: center;
`;

const RightArea = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const UserLink = styled.a`
  font-size: 1.3rem;
  color: #8c8c8c;
`;

const ContentArea = styled.section`
  padding: 0 80px 40px;
  margin: 0 auto;
`;

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <Wrapper>
      <Header>
        <LeftArea>
          <Nav />
        </LeftArea>
        <RightArea>
          <Link href={'/login'} legacyBehavior passHref>
            <UserLink>로그인</UserLink>
          </Link>
          <Link href={'/signUp'} legacyBehavior passHref>
            <UserLink>회원가입</UserLink>
          </Link>
        </RightArea>
      </Header>
      <ContentArea>{children}</ContentArea>
      <Player />
    </Wrapper>
  );
}
