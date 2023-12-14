import { ConfigProvider, Skeleton, Table } from "antd";
import { StylesList } from "../lib/styledComponents";

import { ItemProps } from "../types";
import priceFormat from "../helpers/priceFormat";
import ReducedComponent from "./reducedComponent";
import SortingPanel from "./sortingPanel";
import ThumbnailItem from "./ThumbnailTem";
import NoEmptyimage from "./noEmptyimage";

const styleSkeleton = { width: "100%", display: "block" };
const imageStyle = { height: "60px", width: "100px" };

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    width: 120 as number,
    fixed: "left" as const, // fij
    render: (images: string[], record: ItemProps) =>
      images.length == 0 ? (
        <Skeleton.Image active={true} style={imageStyle} />
      ) : (
        <ThumbnailItem
          images={record.image}
          record={record}
          imageStyle={imageStyle}
        />
      ),
  },
  {
    title: "Address",
    dataIndex: "full_address",
    key: "address",
    width: 350 as number, // establece el ancho específico aquí
    fixed: "left" as const, // fij
    render: (text: string, record: ItemProps) =>
      text == "" || text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <a href={record.slug}>{text}</a>
      ),
  },
  {
    title: "Price / Sq.Ft.",
    dataIndex: "price_sqft",
    key: "price_sqft",
    className: "price-sqft",
    width: 120 as number, // establece el ancho específico aquí
    fixed: "left" as const, // fij
    render: (text: string, record: ItemProps) =>
      text == "" || text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <a href={record.slug}>{`${priceFormat(parseFloat(text))}/ Sq.Ft.`}</a>
      ),
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    className: "price",
    width: 130 as number, // establece el ancho específico aquí

    render: (text: string, record: ItemProps) =>
      text == "" || text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <a href={record.slug}>{priceFormat(parseFloat(text))}</a>
      ),
  },
  {
    title: "% / $",
    dataIndex: "reduced",
    key: "reduced",
    width: 100 as number, // establece el ancho específico aquí

    className: "reduced",
    render: (text: string, record: ItemProps) =>
      text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <ReducedComponent reduced={parseFloat(text)} link={record.slug || ""} />
      ),
  },
  {
    title: "Beds",
    dataIndex: "bed",
    key: "bed",
    className: "bed",
    width: 100 as number, // establece el ancho específico aquí
    render: (text: string, record: ItemProps) =>
      text == "" || text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <a href={record.slug}>{text}</a>
      ),
  },
  {
    title: "Development / Subdivision",
    dataIndex: "subdivision",
    key: "subdivision",
    className: "subdivision",
    width: 300 as number, // establece el ancho específico aquí

    render: (text: string, record: ItemProps) =>
      text == "" || text == null ? (
        <Skeleton.Input style={styleSkeleton} active={true} />
      ) : (
        <a href={record.slug}>{text}</a>
      ),
  },
];

function AntdTable({
  dataRows,
}: {
  dataRows: ItemProps[];
  functions?: boolean;
}) {
  return (
    <StylesList.DesktopTableWrapper>
      <>
        <div className="functions">
          <SortingPanel />
        </div>
        <ConfigProvider renderEmpty={() => <NoEmptyimage />}>
          <Table
            dataSource={dataRows}
            columns={columns}
            style={{ width: "100%", display: "block" }}
            rowKey="sysid"
            pagination={false}
            scroll={{ y: 450 }}
          />
        </ConfigProvider>

        <div className="functions">
          <SortingPanel />
        </div>
      </>
    </StylesList.DesktopTableWrapper>
  );
}

export default AntdTable;
