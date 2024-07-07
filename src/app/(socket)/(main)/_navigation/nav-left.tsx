import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaMagnifyingGlass } from "react-icons/fa6";

const NavLeft = () => {
  return (
    <div className="flex items-center space-x-2 pl-4">
      <Link href="/">
        <Avatar>
          <AvatarImage src="/facebook.png" />
          <AvatarFallback />
        </Avatar>
      </Link>
      <div className="w-[250px] 1250:block hidden">
        <Input
          className="rounded-full text-lg bg-bg-4"
          placeholder="Search Facebook"
        />
      </div>
      <div className="1250:hidden w-10 h-10 text-text-1 flex-center bg-bg-4 rounded-full">
        <FaMagnifyingGlass size={17} />
      </div>
    </div>
  );
};

export default NavLeft;
