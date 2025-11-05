import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

// Aktifkan plugin dan locale Indonesia
dayjs.extend(relativeTime);
dayjs.locale("id");

export interface Iarticle {
  id: string;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

const ArticleCard2 = ({ item }: { item: Iarticle }) => {
  // set locale ke Indonesia

  return (
    <div className="h-30 flex relative w-full rounded-2xl overflow-hidden ">
      {/* Bagian gambar */}
      <div className="w-30 p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      {/* Bagian deskripsi */}
      <div className=" p-2 flex flex-col justify-between rounded-2xl flex-1">
        {/* Bagian bawah: waktu dan redaksi */}

        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2">{item.content}</p>
        </div>
        <div className="flex gap-3 items-center text-[9px] text-gray-500 mb-2">
          <span className="font-medium text-gray-700">{item.author}</span>
          <span>{dayjs(item.date).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard2;
