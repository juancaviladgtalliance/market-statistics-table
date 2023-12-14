export interface MarketStatisticData {
  id: number;
  name: string;
  range: { [key: string]: Range };
}
export interface NewWindow extends Window {
  url: string;
}
export interface Data {}

export interface Range {
  Condo: Condo;
  Home: Condo;
}
export interface PriceType {
  label: string;
  value: string;
  minPrice: number;
  maxPrice: number;
}
export interface PriceRangesType {
  [key: string]: PriceType;
}
export interface monthRangesInput {
  label: string;
  value: number;
  index: string;
  start: number;
  end: number;
}
export interface monthRangesType {
  3: monthRangesInput;
  6: monthRangesInput;
  12: monthRangesInput;
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
  name: string;
  url: string;
}
export interface PropertyTypesObject {
  label: string;
  value: string;
  id: number;
}
export interface PropertyStyles {
  condos: PropertyTypesObject;
  homes: PropertyTypesObject;
}
export interface UiInitialState {
  activeNeighborhood: number;
  marketStatisticTitle: string;
  neighborhoodList: NeighborhoodItem[] | null;
}
export type CityList = NeighborhoodItem[];
export type MarketStatisticDataList = MarketStatisticData[];

export interface SoldPropertiesSchema {
  data: SoldPropertiesSchemaData;
}

export interface SoldPropertiesSchemaData {
  success: boolean;
  data: DataData;
}

export interface DataData {
  error: null;
  request?: Request | null;
  response?: Response | null;
}

export interface Request {
  action: string;
  closeDateInterval: string;
  classID: string;
  propertyStyle: string;
  order: string;
  page: string;
  priceMin: string;
  priceMax: string;
  cityID: string;
  price: string;
  closeDateStart: string;
  closeDateEnd: string;
}

export interface Response {
  cambiado: string;
  heading: string;
  query: string;
  queryMap: string;
  counter: number;
  mapItems: MapItem[];
  items: Item[];
  statistics: null;
  textCurl: string;
  pagination: Pagination;
  order: string;
}

export interface Item {
  price_sqft: string;
  sysid: string;
  mlsNum: string;
  addressShort: string;
  addressLarge: string;
  price: string;
  priceRegular: string;
  class_id: string;
  bed: string;
  bath: string;
  baths_half: string;
  sqft: string;
  lot_size: string;
  lat: string;
  lng: string;
  slug: string;
  development: string;
  subdivision: string;
  complex: string;
  listDate: string;
  year: string;
  isRental: string;
  board_id: string;
  status: string;
  cityName: string;
  zip: string;
  pricesf: string;
  state: string;
  dateProperty: Date;
  full_address: string;
  fullAddressTop: string;
  fullAddressBottom: string;
  recentlyListed: string;
  timeZoneUser: string;
  minAgo: number;
  minAgoTxt: string;
  daysMarket: number;
  isFavorite: boolean;
  heading: string;
  gallery: string[];
  reduced: number;
  livingSizeM2: number;
  priceSqftM2: number;
}

export interface MapItem {
  priceSqft: string;
  sysid: string;
  mlsNum: string;
  addressShort: string;
  addressLarge: string;
  price: string;
  priceRegular: string;
  priceOrigin: string;
  classID: string;
  bed: string;
  bath: string;
  bathsHalf: string;
  sqft: string;
  lotSize: string;
  lat: string;
  lng: string;
  image: string;
  slug: string;
  imgCnt: number;
  remark: string;
  imagens: string;
  development: string;
  subdivision: string;
  complex: string;
  listDate: string;
  year: string;
  isRental: string;
  boardID: number;
  status: string;
  cityName: string;
  zip: string;
  pricesf: string;
  state: string;
  dateProperty: Date;
  gallery: string[];
}

export interface Pagination {
  currentPageNumber: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  itemsCountPerPage: number;
  offset: Offset;
  totalItemsCount: number;
  total_pages_count: number;
  range: number[];
}

export interface Offset {
  start: number;
  end: number;
}
export interface ItemProps {
  sysid: string;
  class_id: string;
  image: string[] | never;
  full_address: null | string;
  price_sqft: null | string;
  reduced: null | number;
  price: null | string;
  bed: null | string;
  bath: null | string;
  subdivision: null | string;
  slug?: string;
}
export interface initialFilters {
  range: number;
  type: string;
  neighborhood: number;
  style: string;
  price: string;
  sortListing: string;
  pagination: {
    current: number;
    total: number;
    pageSize: number;
  };
}
export interface SelectOrderType {
  value: string;
  label: string;
}
