import styled from "styled-components";

export const ListSoldNeighborhood = styled.section`
  .list-mobile {
    display: none;
  }
  @media (max-width: 767px) {
    .list-desktop {
      display: none;
    }
    .list-mobile {
      display: block;
    }
  }
`;
export const ListLoader = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  z-index: 99;
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #fff;
    border-bottom-color: orange;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const PlaceHolderWrapper = styled.div<{ height: string }>`
  .sorting-list {
    margin-bottom: 20px;
  }
  h3.ant-skeleton-title {
    display: none;
  }
  .skeletonContainer {
    padding: 20px;
    padding-top: 0px;
    .ant-skeleton .ant-skeleton-content .ant-skeleton-paragraph > li {
      height: 85px;
    }
    ul.ant-skeleton-paragraph {
      margin-top: 0;
      margin-block-start: 0 !important;
    }
  }
  @media (max-width: 767px) {
    padding: 20px;
  }
`;
export const DesktopTableWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 50px;
  .ant-table-body {
    /* ===== Scrollbar CSS ===== */
    /* Firefox */

    scrollbar-width: auto;
    scrollbar-color: #3b4b7c #ffffff;

    /* Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: #ffffff;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #3b4b7c;
      border-radius: 10px;
      border: 0px solid #ffffff;
    }
  }
  .ant-table-wrapper .ant-table-thead > tr > th,
  .ant-table-wrapper .ant-table-tbody > tr > td {
    text-align: center;
    font-weight: 600;
  }
  .ant-table-wrapper .ant-table-thead > tr > th {
    background-color: #e5e5e5;
    text-align: center;
    padding: 10px;
    border: 0 solid transparent;
    border-bottom-width: 1px;
    font-weight: 700;
    .ant-skeleton {
      display: block;
      width: 100%;
    }
  }
  .ant-table-wrapper .ant-table-cell-scrollbar:not([rowspan]) {
    background-color: #e5e5e5;
  }
  .ant-table-wrapper .ant-table-tbody > tr > td {
    padding: 5px 10px;
    .ant-skeleton {
      display: block;
      width: 100%;
    }
  }
  .ant-table-wrapper .ant-table-thead > tr > th:nth-child(3) {
    background-color: #39374f;
    color: white;
  }
  .ant-table-wrapper .ant-table-tbody > tr > td:nth-child(3) {
    background-color: #3b4b7c;
    color: white;
  }
  .ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:last-child {
    border-start-end-radius: 0;
  }
  .ant-table-wrapper
    .ant-table-container
    table
    > thead
    > tr:first-child
    > *:first-child {
    border-start-start-radius: 0;
  }
`;
export const thumbnailImage = styled.div`
  width: 100%;
  img.thumbnail {
    cursor: pointer;
  }
`;
export const emptyWrapper = styled.div`
  min-height: 450px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  h2 {
    text-align: center;
  }

  .images-container {
    width: 100px;
    height: auto;
  }
`;
export const mobilelistWrapper = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  .list-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0px;
    margin-bottom: 20px;
  }
`;
export const mobileItem = styled.article`
  display: grid;
  grid-template-columns: 100px auto;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: #0000003d solid 1px;
  padding: 10px 0;
  .image-section img.thumbnail {
    height: 100px;
    width: 100px;
    object-fit: cover;
  }
  h3.title-section {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 4px;
  }
  h4.price {
    font-size: 14px;
    margin-bottom: 4px;
  }
  .data-area {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    span {
      font-size: 13px;
    }
    span.sqft {
      color: white;
      background: #3b4b7c;
      padding: 1px 10px;
      border-radius: 3px;
    }
  }
`;
