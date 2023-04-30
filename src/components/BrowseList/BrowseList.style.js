import styled from 'styled-components';

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 42px 46px minmax(500px, auto) 250px 65px 65px 65px 65px;
  font-size: 13px;
  color: rgb(160, 160, 160);
  width: 100%;

  .browse-list {
    &-head-item,
    &-body-item {
      display: flex;
      align-items: center;
      margin-top: 10px;
      &.num {
        font-size: 15px;
        font-weight: 700;
        color: #333;
      }
      .album-desc {
        padding: 12px 0;
        width: 420px;
      }
      .tit {
        padding-bottom: 5px;
        font-size: 15px;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        padding-top: 6px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      &.artist-name {
        font-size: 15px;
        color: #333;
      }
      &.center {
        justify-content: center;
      }
    }
  }
`;

export const browseHead = styled.div`
  height: 39px;
  font-weight: 400;
  border-top: 1px solid rgb(235, 235, 235);
  border-bottom: 1px solid rgb(235, 235, 235);
  display: flex;
  align-items: center;
`;

export const ThumnailBox = styled.div`
  display: flex;
  align-items: center;

  .album-desc {
    flex: 1;
  }
`;

export const ThumnailImg = styled.figure`
  background-color: #ddd;
  margin: 0 10px 0 0;
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
  }
`;

const basicIconbuttonStyle = 'color: #333;';
export const iconButton = styled.button.attrs({ type: 'button' })`
  ${basicIconbuttonStyle}
  font-size: ${(props) => props.fontSize};
`;

export const iconLink = styled.a.attrs({ href: 'javascript:;' })`
  ${basicIconbuttonStyle}
  font-size: ${(props) => props.fontSize};
`;
