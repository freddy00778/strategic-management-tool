import { NavLinksProps } from "../models/NavLinks";
import home from "../assets/images/home.svg";
import project from "../assets/images/project-info.svg";

export const ManagerNavlinksData: NavLinksProps[] = [
  {
    id: "1",
    title: "Home",
    image: home,
    route: "/manager/dashboard",
  },
  {
    id: "2",
    title: "Projects",
    image: project,
    route: "/manager/dashboard/projects",
  },
];
