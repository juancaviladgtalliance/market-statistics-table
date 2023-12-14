import { Item, ItemProps } from "../types";

export default function convertDataItem(items: Item[]) {
  console.log(items);
  const dataWithResponse: ItemProps[] | undefined = items.map((item) => {
    return {
      sysid: item.sysid,
      class_id: item.class_id,
      image: item.gallery,
      full_address: item.full_address,
      price_sqft: item.price_sqft,
      reduced: item.reduced,
      price: item.price,
      bath: item.bath,
      bed: item.bed,
      subdivision: item.subdivision,
      slug: `/property/${item.slug}`,
    };
  });
  return dataWithResponse;
}
