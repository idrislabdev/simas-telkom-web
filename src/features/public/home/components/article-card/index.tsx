"use client";

import moment from "moment";

export interface Iarticle {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

const HomeArticleCard = ({ item }: { item: Iarticle }) => {
  // set locale ke Indonesia
  moment.locale("id");

  return (
    <div className="relative w-full border border-gray-200 bg-white rounded-2xl overflow-hidden">
      {/* Bagian gambar */}
      <div className="p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-42 object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      {/* Bagian deskripsi */}
      <div className="bg-white p-4 flex flex-col gap-2 rounded-2xl">
        {/* Bagian bawah: waktu dan redaksi */}
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-2">
          <span className="font-medium text-gray-700">{item.author}</span>
          <span>{moment(item.date).fromNow()}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-3">{item.content}</p>
      </div>
    </div>
  );
};

export default HomeArticleCard;
