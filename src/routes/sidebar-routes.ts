import ErrorScreens from "@/pages/explore/screens/error/error.screens";
import LoadingScreen from "@/pages/explore/screens/loading/loading.screen";
import DialogWidget from "@/pages/explore/widgets/dialog/dialog.widget";
import ModalWidgets from "@/pages/explore/widgets/modal/modal.widget";
import { ScreenShare } from "lucide-react";
import React from "react";
import { HiOutlineBookOpen } from "react-icons/hi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { MdWidgets } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";

interface ISidebarRoutes {
  name: string;
  path: string;
  component: React.ComponentType;
}

export const sidebarMenuArr = [
  { path: "/", icon: RiGlobalFill, label: "Explore" },
  {
    path: "/getting-started",
    icon: HiOutlineLightningBolt,
    label: "Getting Started",
  },
  {
    path: "/templates",
    icon: HiOutlineBookOpen,
    label: "Templates",
  },
  {
    path: "/all-screens",
    icon: ScreenShare,
    label: "All Screens",
  },
  {
    path: "/all-widgets",
    icon: MdWidgets,
    label: "All Widgets",
  },
];

export const AllScreenRoutes: ISidebarRoutes[] = [
  {
    name: "Loading",
    path: "/loading",
    component: LoadingScreen,
  },
  {
    name: "Error",
    path: "/error",
    component: ErrorScreens,
  },
];

export const AllWidgetRoutes: ISidebarRoutes[] = [
  {
    name: "Modal",
    path: "/modal",
    component: ModalWidgets,
  },
  {
    name: "Dialog",
    path: "/Dialog",
    component: DialogWidget,
  },
];
