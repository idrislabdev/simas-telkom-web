import {
  Building,
  Building2,
  ChartPie,
  ListCheck,
  LogOut,
  MailCheck,
  Newspaper,
  Settings,
  ShieldUser,
  UserCheck,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  // === Menu Data ===
  const menuSections = [
    {
      label: "Menu",
      items: [
        { icon: <ChartPie size={17} />, label: "Dashboard", path: "/admin" },
        {
          icon: <ListCheck size={17} />,
          label: "Master",
          path: "/admin/master",
        },
        {
          icon: <Building size={17} />,
          label: "Masjid",
          path: "/admin/masjid",
        },
        {
          icon: <Building2 size={17} />,
          label: "Mushalla",
          path: "/admin/mushalla",
        },
        {
          icon: <Newspaper size={17} />,
          label: "Manajemen Info",
          path: "/admin/info",
        },
        {
          icon: <MailCheck size={17} />,
          label: "Manajemen Inbox",
          path: "/admin/inbox",
        },
        {
          icon: <UserCheck size={17} />,
          label: "User BKM",
          path: "/admin/user-bkm",
        },
      ],
    },
    {
      label: "General",
      items: [
        {
          icon: <Settings size={17} />,
          label: "Setting",
          path: "/admin/setting",
        },
        {
          icon: <ShieldUser size={17} />,
          label: "User Admin",
          path: "/admin/user-admin",
        },
        { icon: <LogOut size={17} />, label: "Logout", path: "#" },
      ],
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-col gap-7 h-full w-50 bg-neutral-800 rounded-md p-4 shadow-custom-1 sticky top-2">
      {/* Logo */}
      <div>
        <img src="/images/logo-mttg-white.png" className="h-[50px]" />
      </div>

      {/* Looping Menu */}
      {menuSections.map((section) => (
        <div key={section.label} className="flex flex-col gap-2">
          <label className="text-xs text-neutral-400">{section.label}</label>
          <ul className="flex flex-col gap-1 text-neutral-300 text-xs font-light">
            {section.items.map((item) => {
              // Ambil prefix utama (/admin/xxx)
              const menuBase =
                item.path === "/admin"
                  ? "/admin"
                  : `/${item.path
                      .split("/")
                      .filter(Boolean)
                      .slice(0, 2)
                      .join("/")}`;

              const isActive =
                menuBase === "/admin"
                  ? currentPath === "/admin"
                  : currentPath.startsWith(menuBase);

              const baseClass =
                "flex items-center gap-2 p-2 rounded transition-colors cursor-pointer";
              const activeClass =
                "bg-red-600 text-white font-normal hover:bg-red-600";
              const inactiveClass =
                "hover:bg-red-600 hover:text-white hover:font-normal";

              if (item.path === "#") {
                return (
                  <li key={item.label}>
                    <a
                      onClick={handleLogout}
                      className={`${baseClass} ${inactiveClass}`}
                    >
                      {item.icon}
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className={`${baseClass} ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 w-full"
                  >
                    {item.icon}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AdminSidebar;
