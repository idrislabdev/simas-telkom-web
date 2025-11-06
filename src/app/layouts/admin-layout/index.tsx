"use client";

import { Outlet, useLocation } from "react-router-dom";
import AdminSidebar from "@/components/layouts/admin/sidebar";
import UserInfo from "@/components/layouts/admin/user-info";
import useAppHeight from "@/core/hooks/useAppHeight";
import { subMenuList } from "@/app/layouts/admin-layout/SubMenu";

const AdminLayout = () => {
  useAppHeight();
  const location = useLocation();

  // Ambil path setelah "/admin"
  const currentPath = location.pathname.replace(/^\/admin\/?/, "");

  // Cari data menu yang cocok
  const currentMenu =
    subMenuList.find((item) => item.route === currentPath) || subMenuList[0];

  return (
    <div
      className="h-full w-full p-2 flex relative gap-3 bg-neutral-50"
      style={{ height: "var(--app-height)" }}
    >
      <AdminSidebar />
      <main className="flex-1 flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-between items-center h-[45px] bg-telkom-gradient rounded-md w-full px-3">
            {/* Header Dinamis */}
            <div className="w-[250px] flex items-center">
              <h5 className="text-white font-medium">{currentMenu.header}</h5>
            </div>

            {/* User Info */}
            <UserInfo />
          </div>
        </div>

        <div className="h-full overflow-y-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
