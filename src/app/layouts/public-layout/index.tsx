import PublicHeader from "@/components/layouts/public/public-header";
import useAppHeight from "@/core/hooks/useAppHeight";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  useAppHeight();

  return (
    <div className="h-full w-full" style={{ height: "var(--app-height)" }}>
      <PublicHeader />
      <main className=" bg-white">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
