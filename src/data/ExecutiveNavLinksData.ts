import { NavLinksProps } from "../models/NavLinks";
import home from "../assets/images/home.svg";
import calendar from "../assets/images//nav-calendar.svg";
import project from "../assets/images/project-info.svg";

export const ExecutiveNavLinksData: NavLinksProps[] = [
  {
    id: "1",
    title: "Home",
    image: home,
    route: "/executive/dashboard",
  },
  {
    id: "2",
    title: "Calendar",
    image: calendar,
    route: "/executive/dashboard/calendar",
  },
  {
    id: "3",
    title: "Projects",
    image: project,
    route: "/executive/dashboard/projects",
  },
];
