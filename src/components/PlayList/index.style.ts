import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 57px;
`;

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
export const Title = styled.span`
  font-size: 2.2rem;
  font-weight: 700;
  color: #333;
`;

export const ListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 19px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 175px;
  gap: 10px;
`;

export const ImgWrapper = styled.span`
  position: relative;
  display: block;
  border-radius: 6px;
  overflow: hidden;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: 1;
    }
  }
`;

interface TextProps {
  fontSize?: number;
  color?: string;
  fontWeight?: number;
}

export const Text = styled.span<TextProps>`
  ${(props) => (props.fontSize ? `font-size: ${props.fontSize}rem;` : 'font-size:1.3rem;')}
  ${(props) => (props.color ? `color: ${props.color};` : 'color: #969696;')}
  ${(props) => (props.fontWeight ? `font-weight: ${props.fontWeight};` : 'font-weight: 400;')}

  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;
