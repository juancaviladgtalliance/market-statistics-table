import { Skeleton, Space } from "antd";
import { StylesList } from "../../../lib/styledComponents";
import SortingPanel from "../../sortingPanel";

export default function PlaceholderMobile() {
  return (
    <StylesList.PlaceHolderWrapper height="40px">
      <SortingPanel />
      <div className="sorting-list">
        {[1, 2, 3, 4, 5].map((element) => {
          return (
            <Space
              key={element}
              style={{
                display: "grid",
                gridTemplateColumns: "100px auto",
                width: "100%",

                gap: "20px",
                padding: "10px 0",
                borderBottom: "#0000003d solid 1px",
              }}
            >
              <div>
                <Skeleton.Image active={true} />{" "}
              </div>
              <div>
                <Skeleton.Input
                  active={true}
                  style={{ width: "100%", marginBottom: "5px", height: "20px" }}
                  block={true}
                />
                <Skeleton.Input active={true} />
                <Skeleton.Input
                  active={true}
                  style={{ width: "100%", marginTop: "5px", height: "20px" }}
                  block={true}
                />
              </div>
            </Space>
          );
        })}
      </div>
      <SortingPanel />
    </StylesList.PlaceHolderWrapper>
  );
}
