import { ChevronDown } from "lucide-react";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-2 h-full w-[250px] justify-end">
      <img
        src="/images/ikhwan.png"
        className="w-[30px] h-[30px] border border-gray-200 rounded-full object-cover bg-white"
      />
      <div className="flex flex-col gap-0.5 text-white">
        <label className="text-[12px]/[12px] font-medium">Ikhwan MTTG</label>
        <span className="text-[10px]/[10px]">Admin</span>
      </div>
      <a className="text-white">
        <ChevronDown size={14} />
      </a>
    </div>
  );
};

export default UserInfo;
