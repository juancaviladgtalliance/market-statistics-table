import styled from "styled-components";
const fontSize = "12px";
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
  color: #333;
  text-align: center;
  font-weight: 600;
}
h4 {
  color: #333;
  text-align: center;
  font-weight: 600;
}
p {
  color:#333;
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
  background-color: #d5d5d5;
  ${fontTitle2}
  &.red {
    background-color: red;
    color: white;
    ${fontTitle1}
  }
  &.green {
    background-color: #017100;
    color: white;
    ${fontTitle1}
  }
  &.panel-item {
    transition: all 0.5s;
    cursor: pointer;
    &:hover {
      background-color: #333;
      color: white;
      ${fontTitle1}
      img {
        filter: invert(1);
      }
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
  .row {
    display: grid;
    gap: 0px;
    grid-template-columns: 1.4fr repeat(7, minmax(150px, 1fr)) 2fr;
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
        grid-template-rows: repeat(5, 1fr);
        margin-bottom: 10px;
        display: grid;
        gap: 10px;
      }
    }
    @media (min-width: 1361px) {
      gap: 3px;
      grid-template-columns 1.5fr repeat(7, minmax(135px, 1fr)) 2fr
    }
    @media (min-width: 1439px) {
      gap: 10px;
      grid-template-columns 1.5fr repeat(7, minmax(135px, 1fr)) 2fr
    }
    @media (min-width: 1750px) {
      gap: 15px;
      grid-template-columns 1.5fr repeat(7, minmax(150px, 1fr)) 2fr
    }
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
