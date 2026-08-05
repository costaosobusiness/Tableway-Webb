export const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-full border-[2.5px] border-white flex flex-col items-center justify-center relative">
      <div className="w-3.5 h-[2.5px] bg-white rounded-full"></div>
      <div className="w-[2.5px] h-3 bg-white mt-[1px] rounded-full"></div>
    </div>
    <div className="flex flex-col justify-center">
      <div className="text-white font-bold text-xl leading-none tracking-tight">
        Table<span className="text-primary">Way</span>
      </div>
      <div className="text-primary text-[8px] font-semibold tracking-widest mt-0.5">
        RESERVATIONS MADE Simple
      </div>
    </div>
  </div>
);
