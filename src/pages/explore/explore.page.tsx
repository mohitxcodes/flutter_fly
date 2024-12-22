import BackgroundEffect from "@/common/components/BackgroundEffect";
import ContentWrapper from "@/common/components/ContentWrapper";
import Navbar from "@/common/navbar/navbar";
import Sidebar from "@/common/sidebar/sidebar";
import { Outlet } from "react-router-dom";

export default function ExplorePage() {
  return (
    <div className="bg-[#0B1120]">
      <BackgroundEffect />

      <Navbar />
      <ContentWrapper>
        <div className="flex">
          <div>
            <Sidebar />
          </div>
          <div className="flex-1 text-white">
            <Outlet />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
