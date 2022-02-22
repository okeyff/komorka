import { useMemo } from "react";
import clsx from "clsx";
import { matchPath, useLocation, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import { routes } from "../../routes";
import SidebarNav from "../SidebarNav";
import { MdOutlineSpaceDashboard as IconNews } from "react-icons/md";
import { MdOutlineChat as IconMessages } from "react-icons/md";
import { MdOutlinePersonOutline as IconPerson } from "react-icons/md";
import { MdOutlinePeopleAlt as IconPersons } from "react-icons/md";
import { MdOutlineEventNote as IconEvents } from "react-icons/md";
import { MdDateRange as IconCalendar } from "react-icons/md";
import { MdOutlineTableChart as IconPages } from "react-icons/md";
import css from "./Sidebar.module.scss";

const testItems = [
  {
    title: "Новости",
    link: "/",
    icon: <IconNews className={css.sidebarNavListIcon} />,
  },
  {
    title: "Сообщения",
    link: "/messages",
    icon: <IconMessages className={css.sidebarNavListIcon} />,
  },
  {
    title: "Друзья",
    link: "/notifications",
    icon: <IconPerson className={css.sidebarNavListIcon} />,
  },
  {
    title: "Сообщества",
    link: "/test1",
    icon: <IconPersons className={css.sidebarNavListIcon} />,
  },
  {
    title: "События",
    link: "/test1",
    icon: <IconEvents className={css.sidebarNavListIcon} />,
  },
  {
    title: "Календарь",
    link: "/test1",
    icon: <IconCalendar className={css.sidebarNavListIcon} />,
  },
  {
    title: "Страницы",
    link: "/test1",
    icon: <IconPages className={css.sidebarNavListIcon} />,
  },
];

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location]
  );

  return (
    <div className={css.sidebar}>
      <div className={css.sidebarContainer}>
        <SidebarNav items={testItems} mainTitle="Меню" />
      </div>
    </div>
  );
};

export default Sidebar;
