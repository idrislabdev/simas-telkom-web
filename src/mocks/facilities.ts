export interface Facility {
  name: string;
  images: string[];
  checked: boolean;
}

export const facilities: Facility[] = [
  {
    name: "Tempat Wudhu",
    images: [
      "/images/mosque-1.jpg",
      "/images/mosque-2.jpg",
      "/images/mosque-3.jpg",
      "/images/mosque-4.jpg",
    ],
    checked: true,
  },
  { name: "Karpet", images: [], checked: true },
  { name: "Lemari Quran", images: [], checked: true },
  { name: "Lemari Sarung / Mukena", images: [], checked: true },
  { name: "AC", images: [], checked: true },
  { name: "Kipas Angin", images: [], checked: false },
  { name: "Lampu / Penerangan", images: [], checked: true },
  { name: "Rak Sepatu", images: [], checked: true },
  { name: "Sandal Wudhu", images: [], checked: true },
  { name: "Tirai Jamaah", images: [], checked: true },
  { name: "Sound System", images: [], checked: true },
];
