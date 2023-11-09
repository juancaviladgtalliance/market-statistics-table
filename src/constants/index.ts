import {
  PriceRangesType,
  PropertyStyles,
  UiInitialState,
  monthRangesType,
} from "../types";

export const monthRanges: monthRangesType = {
  3: {
    label: "0-3 Months Back",
    value: 3,
    index: "0-3",
    start: 0,
    end: 3,
  },
  6: {
    label: "3-6 Months Back",
    value: 36,
    index: "3-6",
    start: 3,
    end: 6,
  },
  12: {
    label: "6-12 Months Back",
    value: 612,
    index: "6-12",
    start: 6,
    end: 12,
  },
};
export const uiInitialState: UiInitialState = {
  activeNeighborhood: 0,
  marketStatisticTitle: "South Florida Sold Market Statistics",
  neighborhoodList: null,
};
export const propertyTypes: PropertyStyles = {
  condos: {
    label: "Condos",
    value: "condo",
    id: 1,
  },
  homes: {
    label: "Homes",
    value: "home",
    id: 2,
  },
};
export const propertyStyles = {
  NewProperty: {
    label: "New",
    value: "new",
  },
  NoWaterFront: {
    label: "No Waterfront",
    value: "no_waterfront",
  },
  WaterFront: {
    label: "Waterfront",
    value: "waterfront",
  },
  NoStyle: {
    label: "All Properties",
    value: "all",
  },
};
export const priceRanges: PriceRangesType = {
  "0-1": {
    label: "Up to $1 M",
    value: "0-1",
    minPrice: 0,
    maxPrice: 1000000,
  },
  "1-3": {
    label: "$1 M to $3 M",
    value: "1-3",
    minPrice: 1000001,
    maxPrice: 3000000,
  },
  "3-5": {
    label: "$3 M to $5 M",
    value: "3-5",
    minPrice: 3000001,
    maxPrice: 5000000,
  },
  "5-8": {
    label: "$5 M to $8 M",
    value: "5-8",
    minPrice: 5000001,
    maxPrice: 8000000,
  },
  "8+": {
    label: "$8 M+",
    value: "8+",
    minPrice: 8000001,
    maxPrice: 100000000,
  },
};
export const neighborhoodstitle: string[] = [
  "Brickell",
  "Downtown Miami",
  "Edgewater",
  "South of Fifth",
  "Surfside",
  "Bal Harbour",
  "Sunny Isles",
  "Aventura",
  "Coconut Grove",
  "Coral Gables",
  "Fort Lauderdale",
  "High Pines and Ponce Davis",
  "Kendall",
  "Key Biscayne",
  "Miami Beach",
  "Miami Shores",
  "Palmetto Bay",
  "Pinecrest",
  "South Beach",
  "South Miami",
];
export const elapseTimes = ["90 days", "180 days", "One year", "Two year"];
