import AdminRoutes from "@/app/routes/admin";
import PublicRoutes from "@/app/routes/public";
import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

function RouterSelector() {
  const location = useLocation();
  const isAdminPath = location.pathname.startsWith("/admin");
  return isAdminPath ? <AdminRoutes /> : <PublicRoutes />;
}

export default function App() {
  useEffect(() => {
    // === 2. Pencegahan zoom (pinch / double-tap / ctrl+scroll) ===
    let touchCount = 0;
    let lastTouchEnd = 0;

    const onTouchStart = (e: TouchEvent) => {
      touchCount = e.touches.length;
      if (touchCount > 1) {
        e.preventDefault(); // cegah pinch zoom
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (touchCount > 1) {
        e.preventDefault();
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      const now = Date.now();
      const target = e.target as HTMLElement;

      // ✅ Cegah double-tap zoom hanya di area viewer
      if (target.closest(".dicom-viewport")) {
        if (now - lastTouchEnd <= 300) {
          e.preventDefault();
        }
      }

      touchCount = 0;
      lastTouchEnd = now;
    };

    const onWheel = (e: WheelEvent) => {
      if (e.ctrlKey) e.preventDefault(); // cegah ctrl + scroll zoom
    };

    // === 3. Daftarkan listener ===
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    document.addEventListener("touchend", onTouchEnd, { passive: false });
    window.addEventListener("wheel", onWheel, { passive: false });

    // === 4. Cleanup saat unmount ===
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);
  return (
    <BrowserRouter>
      <RouterSelector />
    </BrowserRouter>
  );
}
