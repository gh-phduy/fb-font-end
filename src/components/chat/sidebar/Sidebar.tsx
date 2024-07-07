"use client";

import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="overflow-y-auto 900:w-[325px] w-full">
      <SearchInput />
      <Conversations />
    </div>
  );
};

export default Sidebar;
