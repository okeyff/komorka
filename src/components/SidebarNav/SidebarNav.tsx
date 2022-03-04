import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import NotificationLabel from "../NotificationLabel";
import css from "./SidebarNav.module.scss";

interface Props {
  className?: string;
  items?: PropsItem[];
  mainTitle?: string;
}

interface PropsItem {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  link?: string;
  notificationLabelCount?: number;
}

const SidebarNavItem: React.FC<PropsItem> = ({
  className,
  icon,
  title,
  link,
  notificationLabelCount,
}) => {
  const itemNew = useMemo(() => {
    if (link) {
      if (icon) {
        return (
          <NavLink className={css.sidebarNavListLink} to={link}>
            {icon}
            {!!title && title}
          </NavLink>
        );
      } else {
        return (
          <NavLink className={css.sidebarNavListLink} to={link}>
            {title}
          </NavLink>
        );
      }
    } else {
      return (
        <>
          {icon}
          {title}
        </>
      );
    }
    return title;
  }, []);
  return (
    <li className={clsx(css.sidebarNavListItem, className)}>
      {itemNew}
      {!!notificationLabelCount && (
        <NotificationLabel
          className={css.sidebarNavNotificationLabel}
          count={notificationLabelCount}
        />
      )}
    </li>
  );
};

const SidebarNav: React.FC<Props> = ({ className, items, mainTitle }) => {
  const itemsNew = useMemo(() => {
    return (
      <>
        <ul className={css.sidebarNavList}>
          {mainTitle && <div className={css.sidebarNavTitle}>{mainTitle}</div>}
          {items?.map((item, i) => {
            const key = i;
            return (
              <SidebarNavItem
                key={key}
                notificationLabelCount={item.notificationLabelCount}
                className={item.className}
                title={item.title}
                icon={item.icon}
                link={item.link}
              />
            );
          })}
        </ul>
      </>
    );
  }, [items]);

  return <div className={clsx(css.sidebarNav, className)}>{itemsNew}</div>;
};

export default SidebarNav;
