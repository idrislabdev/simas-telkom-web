import AdminSidebar from "@/components/layouts/admin/sidebar";
import UserInfo from "@/components/layouts/admin/user-info";
import useAppHeight from "@/core/hooks/useAppHeight";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  useAppHeight();
  return (
    <div
      className="h-full w-full p-2 flex relative gap-3 bg-neutral-50"
      style={{ height: "var(--app-height)" }}
    >
      <AdminSidebar />
      <main className="flex-1 flex flex-col gap-3">
        <div className="flex flex-col justify-center items-center w-full">
          <div className="flex justify-between items-center  h-[45px] bg-telkom-gradient rounded-md w-full px-3">
            {/* Logo */}
            <div className="w-[250px] flex items-center">
              <h5 className="text-white font-medium">Halaman Data Masjid</h5>
            </div>

            {/* Dynamic Menu */}
            {/* <NavMenu list={currentMenuGroup.list} /> */}

            {/* User Info */}
            <UserInfo />
          </div>
        </div>
        <div className="h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
