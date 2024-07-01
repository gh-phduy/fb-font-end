"use client";

import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <Conversations />
    </div>
  );
};

export default Sidebar;
