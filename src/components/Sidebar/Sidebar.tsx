import { useMemo } from 'react';
import clsx from 'clsx';
import { matchPath, useLocation, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { routes } from '../../routes';
import css from './Sidebar.module.scss';

const Sidebar = () => {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location],
  );

  return (
    <div className={css.sidebar}>
      <IconContext.Provider value={{ size: '2em' }}>
        <ul className={css.sidebarList}>
          {currentRoute?.sidebarNavItems?.map((item) => (
            <li
              className={
                item.bottom
                  ? clsx(css.sidebarListItem, css.sidebarListItem_bottom)
                  : css.sidebarListItem
              }
              key={item.name}>
              <NavLink className={css.sidebarListLink} to={item.path}>
                <div className={css.sidebarIconContainer}>
                  <item.icon />
                </div>
                <span className={css.sidebarListLabel}>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </IconContext.Provider>
    </div>
  );
};

export default Sidebar;
