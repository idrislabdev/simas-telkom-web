import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/app/layouts/public-layout";

// import halaman publik
import HomePage from "@/features/public/home/page";
import MasjidPage from "@/features/public/masjid/page";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/masjid" element={<MasjidPage />} />
      </Route>
    </Routes>
  );
}
