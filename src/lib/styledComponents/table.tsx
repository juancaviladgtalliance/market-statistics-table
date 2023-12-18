import styled from "styled-components";
const fontSize = "12px";
const gridSize = 1.5;
const fontTitle1 = `
h3 {
  color: white;
  text-align: center;
  font-weight: 600;
}
h4 {
  color: white;
  text-align: center;
  font-weight: 600;
}
p {
  color:white;
  text-align: center;
}

`;
const fontTitle2 = `
h3 {
  color: #fff;
  text-align: center;
  font-weight: 600;
}
h4 {
  color: #fff;
  text-align: center;
  font-weight: 600;
}
p {
  color:#fff;
  text-align: center;
}

`;
const aligGlobal = `flex-direction: column;align-items: center; justify-content: center; display: flex;`;
export const CeldWrapper = styled.div`
  border: 1px solid black;
  padding: 7px 15px 7px 15px;
  ${aligGlobal}
  font-size: ${fontSize};
  text-align: center;
  border-radius: 5px;
  height: 85px;
  overflow: hidden;
  transition: all 0.5s;
  // background-color: ${({ color }) => color};
  background-color: #727c9d;
  ${fontTitle2}
  &.red {
    background-color: #fa6e6e;
    color: white;
    ${fontTitle1}
  }
  &.green {
    background-color: #017100;
    color: white;
    ${fontTitle1}
  }
  &.avg-item {
    background-color: #e49a37;
  }
  &.panel-item {
    transition: all 0.5s;
    cursor: pointer;
    background-color: #39374f;
    img {
      filter: invert(1);
    }
    &:hover {
      background-color: #3b4b7c;
      color: white;
      ${fontTitle1}
    }
  }
  @media (max-width: 1360px) {
    height: 0;
    padding: 0;
    visibility: hidden;
    &.active {
      height: 85px;
      visibility: visible;
      padding: 7px 15px 7px 15px;
    }
  }
`;
export const TableWrapper = styled.div`
  ul.ant-skeleton-paragraph li {
    height: 85px;
  }
  h3.ant-skeleton-title {
    display: none;
  }
  .skeletonContainer {
    padding: 20px;
    padding-top: 0px;
    :where(.css-dev-only-do-not-override-6j9yrn).ant-skeleton
      .ant-skeleton-content
      .ant-skeleton-paragraph
      > li {
      height: 85px;
    }
    ul.ant-skeleton-paragraph {
      margin-top: 0;
      margin-block-start: 0 !important;
    }
  }
  .row {
    display: grid;
    gap: 0px;
    grid-template-columns: 1fr repeat(7, minmax(150px, 1fr));

    padding: 10px 25px 10px 25px;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    .titlecomponent {
      grid-row-start: 1;
      grid-column-start: 1;

      grid-row-end: 2;
      grid-column-end: 3;
    }
    @media (max-width: 1360px) {
      display: block;

      padding: 0px 15px 0px 15px;

      &.active-row {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        margin-bottom: 10px;
        display: grid;
        gap: 10px;
      }
      &.active-row.current-row {
        @media (max-width: 1360px) {
          grid-template-rows: repeat(5, 1fr);
        }
      }
    }
    @media (min-width: 1361px) {
      gap: 3px;
      grid-template-columns: ${gridSize}fr repeat(7, minmax(135px, 1fr));
      &.current-row {
        grid-template-rows: repeat(2, 1fr);
      }
    }
    @media (min-width: 1439px) {
      gap: 10px;
      grid-template-columns: 1.5fr repeat(7, minmax(135px, 1fr));
      &.current-row {
        grid-template-rows: repeat(2, 1fr);
      }
    }
    @media (min-width: 1750px) {
      gap: 15px;
      grid-template-columns: 1.5fr repeat(7, minmax(150px, 1fr));
    }
  }
`;
export const DetailNeighborhood = styled.section`
  display: none;
  @media (max-width: 1360px) {
    grid-area: 5 / 1 / 6 / 3;
  }
  @media (min-width: 1361px) {
    grid-area: 2 / 1 / 3 / 9;
  }
  &.active {
    display: block;
  }
`;
export const TitleWrapper = styled.div`
  color: white;
  background-color: #3e4a79;
  padding: 7px 15px 7px 15px;
  position: relative;
  font-size: ${fontSize};
  ${aligGlobal}
  text-align: center;
  border-radius: 5px;
  min-height: 85px;
  word-break: break-all;
  ${fontTitle1}
  .button-wrapper {
    display: none;
    @media (max-width: 1360px) {
      position: absolute;
      right: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      button.open {
        svg {
          transform: rotate(180deg);
        }
      }
      button {
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        transition: all 0.5s;
        svg {
          fill: white;
          height: 40px;
        }
      }
    }
  }
`;
export const PanelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  .panel-item {
    display: flex;
    align-items: center;
    border-radius: 0px;
    justify-content: space-around;
    flex: 1;
    .market-infoimage {
      min-width: 40px;
      img {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (max-width: 1360px) {
    grid-row-start: 5;
    grid-column-start: 1;

    grid-row-end: 5;
    grid-column-end: 3;
    height: 0;
    padding: 0;
    visibility: hidden;
    &.active {
      grid-row-start: 5;
      grid-column-start: 1;

      grid-row-end: 5;
      grid-column-end: 3;
      height: 0;
      padding: 0;
      visibility: visible;
    }
  }
  .marketExtraInfo {
    min-height: 83px;

    color: #333;
    padding: 15px;
    border: 1px solid #8b8b8b;

    a {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 10px;
    }
  }
`;
export const PorcentSpan = styled.span`
  &.green {
    color: green;
    svg {
      transform: rotate(-90deg);
      fill: green;
    }
  }
  &.red {
    color: red;
    svg {
      transform: rotate(90deg);

      fill: red;
    }
  }
  svg {
    height: 10px;
    margin-right: 5px;
  }
`;

export const SortinhWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  height: 50px;
  padding: 3px;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: auto;
    .left-side {
      padding-bottom: 0;
      width: 100%;
      .ant-select {
        width: 100% !important;
      }
    }
  }
  .right-side {
    display: flex;
    justify-content: flex-end;
    gap: 7px;
    max-width: 60%;
    min-width: 50%;
    @media (max-width: 767px) {
      max-width: 100%;
      justify-content: center;
    }
    button.btn-sort {
      height: 30px;
      width: 30px;
      border-radius: 4px;
      background: transparent;
      border: 1px solid #3b4b7c;
      color: #3b4b7c;
      font-weight: 700;
      transition: 3ms all;
      &.active,
      &:hover {
        background: #3b4b7c;
        color: white;
      }
    }
  }
`;
