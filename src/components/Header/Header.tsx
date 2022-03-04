import clsx from "clsx";
import React, { useMemo } from "react";
import { routes } from "../../routes";
import { useLocation, matchPath, Link } from "react-router-dom";
import UserMenu from "../UserMenu";
import HeaderNav from "../HeaderNav";
import { MdOutlineNotifications as IconNotifications } from "react-icons/md";
import { MdQueueMusic as IconMusic } from "react-icons/md";
import { MdOutlineSettings as IconSettings } from "react-icons/md";
import { MdOutlineChat as IconMessages } from "react-icons/md";
import { MdSearch as IconSearch } from "react-icons/md";
import css from "./Header.module.scss";

interface Props {
  className?: string;
}

const testItems = [
  {
    link: "/notifications",
    icon: <IconNotifications className={css.headerNavListIcon} />,
    notificationLabelCount: 1,
  },
  {
    link: "/test1",
    icon: <IconMusic className={css.headerNavListIcon} />,
  },
  {
    link: "/test1",
    icon: <IconSettings className={css.headerNavListIcon} />,
  },
  {
    link: "/test1",
    icon: <IconSearch className={css.headerNavListIcon} />,
  },
  {
    link: "/test1",
    icon: <IconMessages className={css.headerNavListIcon} />,
  },
];

const Header: React.FC<Props> = ({ className }) => {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location]
  );

  return (
    <div className={clsx(css.header, className)}>
      <div className={css.headerContent}>
        <Link to="/">
          <UserMenu />
        </Link>
        <HeaderNav items={testItems} />
        <div>Music</div>
      </div>
    </div>
  );
};

export default Header;
