import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import NotificationLabel from "../NotificationLabel";
import css from "./HeaderNav.module.scss";

interface Props {
  className?: string;
  items?: PropsItem[];
}

interface PropsItem {
  className?: string;
  icon?: React.ReactNode;
  title?: string;
  link?: string;
  notificationLabelCount?: number;
}

const HeaderNavItem: React.FC<PropsItem> = ({
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
          <Link className={css.headerNavListLink} to={link}>
            {icon}
          </Link>
        );
      } else {
        return (
          <Link className={css.headerNavListLink} to={link}>
            {title}
          </Link>
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
    <li className={clsx(css.headerNavListItem, className)}>
      {itemNew}
      {!!notificationLabelCount && (
        <NotificationLabel
          className={css.sidebarNavNotificationLabel}
          count={notificationLabelCount}
          placement="bottomRight"
        />
      )}
    </li>
  );
};

const HeaderNav: React.FC<Props> = ({ className, items }) => {
  const itemsNew = useMemo(() => {
    return (
      <ul className={css.headerNavList}>
        {items?.map((item, i) => {
          const key = i;
          return (
            <HeaderNavItem
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
    );
  }, [items]);

  return <div className={clsx(css.headerNav, className)}>{itemsNew}</div>;
};

export default HeaderNav;
