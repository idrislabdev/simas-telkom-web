export interface Article {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export const articleData: Article[] = [
  {
    id: "1",
    title: "Peningkatan Aktivitas Keagamaan di Wilayah Timur",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Donec non risus in purus pretium tincidunt. Sed et diam eu augue pharetra luctus. In ultricies diam vel turpis mattis, vitae varius nisl cursus. Integer vel nisl at odio facilisis varius.",
    image: "/images/mosque-1.jpg",
    author: "Admin Regional",
    date: "2025-10-20",
  },
  {
    id: "2",
    title: "Program Renovasi Masjid Meningkatkan Kenyamanan Jamaah",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec felis id urna dignissim eleifend. Mauris efficitur, eros ut vehicula blandit, tortor lectus ultricies augue, ac tincidunt leo justo non urna. Integer accumsan dapibus arcu, non dignissim odio.",
    image: "/images/mosque-2.jpg",
    author: "Redaksi Pusat",
    date: "2025-09-15",
  },
  {
    id: "3",
    title: "Gotong Royong Warga dalam Pembangunan Musholla Baru",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pharetra ex sit amet diam posuere, non tempus velit convallis. Vestibulum laoreet finibus sem, non posuere mi gravida sed. Aenean nec lectus eget neque finibus mattis. Pellentesque ac cursus urna.",
    image: "/images/mosque-3.jpg",
    author: "Tim Dokumentasi",
    date: "2025-08-03",
  },
  {
    id: "4",
    title: "Kegiatan Sosial Bersama BKM di Bulan Ramadhan",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a ante ut lectus imperdiet imperdiet. Fusce id risus et nunc porta tristique. Praesent mattis eros vel fermentum eleifend. In at viverra eros, at dictum nisi. Suspendisse faucibus, sem sit amet malesuada vulputate.",
    image: "/images/mosque-4.jpg",
    author: "Kontributor Lapangan",
    date: "2025-07-11",
  },
];
