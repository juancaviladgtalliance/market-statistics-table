import { PropertyStyles, monthRangesType } from "../types";

export const monthRanges: monthRangesType = {
  3: {
    label: "0-3 Months Back",
    value: 3,
  },
  6: {
    label: "3-6 Months Back",
    value: 6,
  },
  12: {
    label: "6-12 Months Back",
    value: 12,
  },
};
export const propertyTypes: PropertyStyles = {
  condos: {
    label: "Condos",
    value: "condo",
  },
  homes: {
    label: "Homes",
    value: "home",
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
export const priceRanges = {
  "0-1": {
    label: "Up to $1 M",
    value: "0-1",
  },
  "1-2": {
    label: "$1 M to $2 M",
    value: "1-2",
  },
  "1-3": {
    label: "$1 M to $3 M",
    value: "1-3",
  },
  "2-3": {
    label: "$2 M to $3 M",
    value: "2-3",
  },
  "3-5": {
    label: "$3 M to $5 M",
    value: "3-5",
  },
  "5-8": {
    label: "$5 M to $8 M",
    value: "5-8",
  },
  "8+": {
    label: "$8 M+",
    value: "8+",
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
