import ArticleCard from "@/components/ui/article-card";
import ArticleCard2 from "@/components/ui/article-card-2";
import { articleData } from "@/mocks/articleData";
import { Calendar, MoveUpRight, Search, User2 } from "lucide-react";
import { useState } from "react";

const InfoPage = () => {
  const [activeTab, setActiveTab] = useState("Semua");

  const tabs = [
    "Semua",
    "Edukasi",
    "Kajian",
    "Sejarah",
    "Sosial",
    "Arsitektur",
  ];
  return (
    <div className="flex flex-col items-center py-24 space-y-8">
      {" "}
      <div className="max-w-[1536px] mx-auto w-full px-10 flex gap-6 relative">
        <div className="flex flex-col space-y-8 flex-1">
          <div className="w-full h-[525px] relative overflow-hidden rounded-2xl shadow-lg ">
            <div
              className="bg-cover bg-center will-change-transform transition-transform duration-200 ease-out w-full h-full"
              style={{
                backgroundImage: "url('/images/bg-masjid.jpg')",
                width: "100%",
              }}
            ></div>

            {/* Overlay */}
            <div className="absolute  bg-neutral-950/50 backdrop-blur-sm h-50 w-full bottom-0 flex flex-col p-6 justify-between">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-3">
                  <h1 className="text-white text-3xl font-medium">
                    Informasi Tentang Majelis Taklim Telkom Group
                  </h1>
                  <p className="text-white line-clamp-2 text-xs font-light">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                  </p>
                </div>
                <span className="text-white">
                  <MoveUpRight size={32} />
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full border border-white flex flex-col justify-center items-center text-white">
                      <User2 size={16} />
                    </span>
                    <label className="text-white text-sm font-medium">
                      Admin MTTG
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full border border-white flex flex-col justify-center items-center text-white">
                      <Calendar size={16} />
                    </span>
                    <label className="text-white text-sm font-medium">
                      11 November 2025
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 border border-white rounded-3xl text-white text-xs">
                    Edukasi
                  </span>
                  <span className="px-3 py-1 border border-white rounded-3xl text-white text-xs">
                    Kajian
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between gap-20">
              <ul className="flex border-b border-gray-200 mb-4 flex-1">
                {tabs.map((tab) => (
                  <li
                    key={tab}
                    className={`cursor-pointer px-4 py-2 text-sm font-medium transition-colors duration-200 
              ${
                activeTab === tab
                  ? "text-red-600 border-b-2 border-red-600"
                  : "text-gray-500 hover:text-red-500"
              }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </li>
                ))}
              </ul>
              <div className="relative w-52 ">
                <input
                  className="w-full h-9 border border-gray-200 rounded-md px-7 text-sm text-neutral-700"
                  placeholder="cari artikel"
                />
                <span className="absolute top-2.5 left-2 text-neutral-500">
                  <Search size={16} />
                </span>
              </div>
            </div>
            <div className="py-2 grid grid-cols-4 gap-4 justify-center content-start w-full bottom-[-100px] right-0">
              {articleData.map((article) => (
                <ArticleCard item={article} key={article.id} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 w-100 bg-gray-50 p-4 h-full rounded-md">
          <div className="flex flex-col gap-2">
            <h5 className="text-base text-neutral-700 font-bold">
              Info Lainnya
            </h5>
            <div className="flex flex-col space-y-4">
              {articleData.slice(0, 7).map((article) => (
                <ArticleCard2 item={article} key={article.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
