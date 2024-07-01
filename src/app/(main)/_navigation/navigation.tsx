import NavLeft from "./nav-left";
import NavRight from "./nav-right";
import NavCenter from "./nav-center";
// import NotifyModal from "@/components/modals/NotifyModal";

const NavBar = () => {
  return (
    <div className="z-50 fixed 320:w-screen w-full h-14 bg-bg-2 shadow grid grid-cols-2 700:grid-cols-3 items-center">
      <NavLeft />
      <NavCenter />
      <NavRight />
      {/* <NotifyModal /> */}
    </div>
  );
};

export default NavBar;
