// src/data/regional3Data.ts

export interface WitelData {
  name: string;
  totalMosque: number;
  totalMusholla: number;
  totalBKM: number;
  completeness: {
    mosque: string; // format: "x/y"
    musholla: string; // format: "x/y"
  };
}

export const regional3Data: WitelData[] = [
  {
    name: "Jawa Timur",
    totalMosque: 8,
    totalMusholla: 7,
    totalBKM: 6,
    completeness: {
      mosque: "8/6",
      musholla: "8/5",
    },
  },
  {
    name: "Bali",
    totalMosque: 3,
    totalMusholla: 4,
    totalBKM: 3,
    completeness: {
      mosque: "3/2",
      musholla: "4/3",
    },
  },
  {
    name: "Nusa Tenggara",
    totalMosque: 4,
    totalMusholla: 6,
    totalBKM: 5,
    completeness: {
      mosque: "4/2",
      musholla: "6/4",
    },
  },
  {
    name: "Keseluruhan",
    totalMosque: 15,
    totalMusholla: 17,
    totalBKM: 14,
    completeness: {
      mosque: "15/10",
      musholla: "17/12",
    },
  },
];
