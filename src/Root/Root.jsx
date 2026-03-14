import { Outlet } from "react-router";
import CursorFollower from "../Shared/CursorFollower";

const Root = () => {
  return (
    <div className="relative min-h-screen bg-[#020a06] isolate">

      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(65%_55%_at_15%_20%,rgba(34,197,94,0.35)_0%,rgba(34,197,94,0.18)_25%,rgba(2,10,6,0.6)_55%,rgba(2,10,6,1)_75%)]">
      </div>

      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(45%_40%_at_85%_70%,rgba(22,163,74,0.25)_0%,rgba(22,163,74,0.12)_30%,transparent_60%)]">
      </div>

      <div className="pointer-events-none absolute inset-0 
        bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.85)_100%)]">
      </div>

      <div className="relative z-10">
        <span className="hidden md:block"><CursorFollower></CursorFollower></span>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
