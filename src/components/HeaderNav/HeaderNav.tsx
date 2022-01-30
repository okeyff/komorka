import React from 'react';
import { RoutePath } from '../../routes';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import Search from '../Search';
import UserMenu from '../UserMenu';
import IconButton from '../IconButton';
import logo from '../../images/logo.png';
import { MdOutlineNotifications as IconNotifications } from 'react-icons/md';
import { MdAccessTime as IconClock } from 'react-icons/md';
import css from './HeaderNav.module.scss';

const HeaderNav = () => {
  return (
    <div className={css.headerNav}>
      <ul className={css.headerNavList}>
        <li className={clsx(css.headerNavListItem, css.headerNavListItemLogo)}>
          <Link to={RoutePath.HOME}>
            <img className={css.headerNavLogo} src={logo} alt="logo" />
          </Link>
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavSearch)}>
          <Search placeholder="Search" icon />
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavIconButtons)}>
          <Link to={RoutePath.NOTIFICATIONS} className={css.headerNavIconButtonsLink}>
            <IconButton>
              <IconNotifications className={css.headerNavIconButtonsIcon} />
            </IconButton>
          </Link>

          <Link to="/" className={css.headerNavIconButtonsLink}>
            <IconButton>
              <IconClock className={css.headerNavIconButtonsIcon} />
            </IconButton>
          </Link>
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavUserMenu)}>
          <Link to="/">
            <UserMenu />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
