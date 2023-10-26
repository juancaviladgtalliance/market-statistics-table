export interface MarketStatisticData {
  id: number;
  title: string;
  url: string;
  shortcode_content_id: number;
  data: Data;
}
export interface NewWindow extends Window {
  url: string;
}
export interface Data {
  id: number;
  name: string;
  range: { [key: string]: Range };
}

export interface Range {
  Condo: Condo;
  Home: Condo;
}
export interface monthRangesInput {
  label: string;
  value: number;
}
export interface monthRangesType {
  3: monthRangesInput;
  6: monthRangesInput;
  12: monthRangesInput;
  24: monthRangesInput;
}
export interface Condo {
  NoWaterFront: { [key: string]: NewProperty };
  WaterFront: { [key: string]: NewProperty };
  NoStyle: { [key: string]: NewProperty };
  NewProperty: { [key: string]: NewProperty };
}

export interface NewProperty {
  moi: number;
  percent_sale_sold_price: number;
  pxsqft_sold: number;
  sqft_sold: number;
  total_active: number;
  total_contract: number;
  total_pended: number;
  total_sold: number;
  variation_active: number;
  variation_sold: number;
}
export interface NeighborhoodItem {
  id: number;
  shortcode_content_id: number;
  title: string;
  url: string;
}
export interface PropertyTypesObject {
  label: string;
  value: string;
}
export interface PropertyStyles {
  condos: PropertyTypesObject;
  homes: PropertyTypesObject;
}
export type CityList = NeighborhoodItem[];
export type MarketStatisticDataList = MarketStatisticData[];
