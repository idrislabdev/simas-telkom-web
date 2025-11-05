import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/app/layouts/public-layout";

// import halaman publik
import HomePage from "@/features/public/home/page";
import MasjidPage from "@/features/public/masjid/page";
import { MasjidDetailPage } from "@/features/public/masjid/page/detail";
import InfoPage from "@/features/public/info/page";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/masjid" element={<MasjidPage />} />
        <Route path="/masjid/:id" element={<MasjidDetailPage />} />
        <Route path="/info" element={<InfoPage />} />
        {/* <Route path="/info/:slug" element={<MasjidPage />} /> */}
      </Route>
    </Routes>
  );
}
