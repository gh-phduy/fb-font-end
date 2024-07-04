"use client";

import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="overflow-y-auto">
      <SearchInput />
      <Conversations />
    </div>
  );
};

export default Sidebar;
