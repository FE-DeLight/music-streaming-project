import styled from "styled-components";

export const GridWrap = styled.div`
  display: grid;
  grid-template-columns: 42px 46px 1fr 250px 1fr 1fr 1fr 1fr;
  font-size: 13px;
  color: rgb(160, 160, 160);
  &.browse-list-head {
    height: 39px;
    font-weight: 400;
    border-top: 1px solid rgb(235, 235, 235);
    border-bottom: 1px solid rgb(235, 235, 235);
  }
  &.browse-list-body {
  }
  .browse-list-head-item,
  .browse-list-body-item {
    display: flex;
    align-items: center;
  }
`;
