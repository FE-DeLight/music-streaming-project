import styled from 'styled-components';

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 42px 46px 200px 200px 1fr 1fr 1fr 1fr;
  font-size: 13px;
  color: rgb(160, 160, 160);
  width: 100%;

  .browse-list {
    &-head-item,
    &-body-item {
      display: flex;
      align-items: center;
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
