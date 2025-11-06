import useAppHeight from "@/core/hooks/useAppHeight";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  useAppHeight();

  const onLogin = async () => {
    if (!username || !password) {
      alert("Username dan password wajib diisi!");
      return;
    }

    setLoading(true);
    try {
      navigate("/admin");
    } catch (error: any) {
      console.error("❌ Login gagal:", error);
      alert(error.message || "Login gagal, periksa username/password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex bg-neutral-800"
      style={{ height: "var(--app-height)" }}
    >
      {/* === KIRI === */}
      <div
        className={`flex flex-col justify-center items-center h-full transition-[width] duration-700 ease-in-out w-1/2`}
      >
        <div className="flex flex-col gap-[42px] w-[350px] h-full justify-center py-20">
          <div className={`flex flex-col gap-[72px]`}>
            <div className="flex flex-col justify-center items-center"></div>

            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-3.5">
                <h5 className="text-3xl font-medium text-white">
                  Log In Sekarang
                </h5>
                <p className="font-light text-neutral-300 text-sm">
                  Silahkan masuk menggunakan username dan password anda
                </p>
              </div>

              {/* === INPUT FORM === */}
              <div className="flex flex-col gap-4">
                {/* Username */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-light">
                    Username
                  </label>
                  <input
                    value={username}
                    placeholder="masukkan username"
                    className="border border-neutral-700 text-white px-4 rounded-[10px] h-[42px] focus:outline-yellow-500 focus:outline-1 placeholder:font-light placeholder:text-sm text-sm"
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && onLogin()}
                  />
                </div>

                {/* Password */}
                <div className="flex flex-col gap-2">
                  <label className="text-white text-sm font-light">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      value={password}
                      type={hiddenPassword ? "password" : "text"}
                      placeholder="masukkan password"
                      className="border border-neutral-700 text-white px-4 rounded-[10px] h-[42px] focus:outline-yellow-500 focus:outline-1 placeholder:font-light placeholder:text-sm text-sm w-full"
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && onLogin()}
                    />
                    <a
                      className="absolute right-2.5 top-[11px] font-light text-neutral-500 cursor-pointer"
                      onClick={() => setHiddenPassword(!hiddenPassword)}
                    >
                      {hiddenPassword ? (
                        <Eye size={18} />
                      ) : (
                        <EyeOff size={18} />
                      )}
                    </a>
                  </div>
                </div>
              </div>

              {/* === BUTTON LOGIN === */}
              <div className="flex flex-col gap-7 justify-center items-center">
                <button
                  onClick={onLogin}
                  disabled={loading}
                  className="bg-telkom-gradient hover:bg-red-700 font-medium text-neutral-800 rounded-[10px] h-[50px] cursor-pointer w-full flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-4 w-4" />
                      Memproses...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === KANAN === */}
      <div
        className={`rounded-tl-[12px] rounded-bl-[12px] bg-neutral-800 h-full transition-[width] duration-700 ease-in-out w-1/2`}
      >
        <div
          className={`relative overflow-hidden flex items-center h-full rounded-[12px]  bg-soft-sunrise-2`}
        >
          <div
            className={`container mx-auto px-6 z-10 h-full w-[500px] justify-between flex flex-col py-20`}
          >
            <div className="flex items-center">
              <h5 className="font-bold text-red-900">
                SIMAS
                <span className="text-red-800 font-normal">ADMIN</span>{" "}
                <span className="text-red-700 font-light">MTTG Regional 3</span>
              </h5>
            </div>
            <div className="flex flex-col">
              <img src="/images/logo-mttg.png" className="w-full" />
            </div>
            <ul className="flex items-center justify-between">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/masjid`}>Masjid</Link>
              </li>
              <li>
                <Link to={`/mushalla`}>Mushalla</Link>
              </li>
              <li>
                <Link to={`/info`}>Info Terkini</Link>
              </li>
            </ul>
          </div>

          {/* Wave Overlay */}
          <div className="absolute inset-0 bg-wave opacity-60 pointer-events-none"></div>

          {/* Radial Glow */}
          <div className="absolute inset-0 bg-sunrise-telkom pointer-events-none mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
