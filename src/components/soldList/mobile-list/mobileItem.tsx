import priceFormat from "../../../helpers/priceFormat";
import { Styles } from "../../../lib";
import { ItemProps } from "../../../types/index";
import ThumbnailItem from "../../ThumbnailTem";
export default function MobileItem({ item }: { item: ItemProps }) {
  return (
    <Styles.StylesList.mobileItem className="buildingItem">
      <div className="image-section">
        <ThumbnailItem images={item.image} record={item} />
      </div>
      <div className="info-section">
        <a href={item.slug} className="buildgin-link">
          <h3 className="title-section">{item.full_address}</h3>
          <h4 className="price">
            {`${priceFormat(parseFloat(item.price || "0"))}`}
          </h4>
          <div className="data-area">
            <span className="beds">{item.bed} Bed(s)</span>
            <span className="baths">{item.bath} Bath(s)</span>
            <span className="sqft">{item.price_sqft} Sq.Ft</span>
          </div>
        </a>
      </div>
    </Styles.StylesList.mobileItem>
  );
}
