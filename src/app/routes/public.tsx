import { Routes, Route } from "react-router-dom";
import PublicLayout from "@/app/layouts/public-layout";

// import halaman publik
import HomePage from "@/features/public/home/page";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
