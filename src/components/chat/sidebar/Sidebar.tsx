"use client";

import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="overflow-y-auto 900:w-[325px] w-full min-w-[325px]">
      <SearchInput />
      <Conversations />
    </div>
  );
};

export default Sidebar;
