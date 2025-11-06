import { Routes, Route } from "react-router-dom";
import AdminLayout from "@/app/layouts/admin-layout";

// import halaman publik
import DashboardPage from "@/features/admin/dashboard/page";
import AdminMasjidPage from "@/features/admin/masjid/page";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<DashboardPage />} />
        <Route path="/admin/masjid" element={<AdminMasjidPage />} />
      </Route>
    </Routes>
  );
}
