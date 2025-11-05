import dayjs from "dayjs";
import "dayjs/locale/id";
import relativeTime from "dayjs/plugin/relativeTime";

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

const ArticleCard = ({ item }: { item: Iarticle }) => {
  return (
    <div className="flex flex-col relative w-full border border-gray-200 bg-white rounded-2xl overflow-hidden">
      <div className="p-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-42 object-cover rounded-2xl"
          loading="lazy"
        />
      </div>

      <div className="bg-white p-4 flex flex-col gap-2 rounded-2xl">
        <div className="flex justify-between items-center text-[9px] text-neutral-500">
          <span className="font-medium text-neutral-700">{item.author}</span>
          <span>{dayjs(item.date).fromNow()}</span>
        </div>
        <h3 className="text-sm leading-5 font-semibold text-neutral-900 line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs text-neutral-600 line-clamp-3">{item.content}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
