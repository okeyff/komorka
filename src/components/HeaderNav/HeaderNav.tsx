import React from 'react';
import { RoutePath } from '../../routes';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import avatar from '../../images/Avatar.png';
import { MdOutlineNotifications as IconNotifications } from 'react-icons/md';
import { MdKeyboardArrowDown as IconArrowDown } from 'react-icons/md';
import { MdSearch as IconSearch } from 'react-icons/md';
import { MdAccessTime as IconClock } from 'react-icons/md';
import css from './HeaderNav.module.scss';
import clsx from 'clsx';
import Search from '../Search';
const HeaderNav = () => {
  return (
    <div className={css.headerNav}>
      <ul className={css.headerNavList}>
        <li className={clsx(css.headerNavListItem, css.headerNavListItemLogo)}>
          <Link to={RoutePath.HOME}>
            <img className={css.headerNavLogo} src={logo} alt="logo" />
          </Link>
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavListItemSearch)}>
          <div className={css.headerNavSearch}>
            <input className={css.headerNavSearchInput} type="text" placeholder="Search" />
            <IconSearch className={css.headerNavSearchIcon} />
          </div>
        </li>

        <li>
          <Search placeholder="test" icon={<IconSearch />} />
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavListItemBtns)}>
          <Link to={RoutePath.NOTIFICATIONS} className={css.headerNavListItemBtns__btn}>
            <IconNotifications className={css.headerNavListItemBtns__icon} />
          </Link>
          <Link to={RoutePath.NOTIFICATIONS} className={css.headerNavListItemBtns__btn}>
            <IconClock className={css.headerNavListItemBtns__icon} />
          </Link>
        </li>

        <li className={clsx(css.headerNavListItem, css.headerNavListItemUser)}>
          <div className={css.headerNavUser}>
            <Link to="/" className={css.headerNavUserAvatar}>
              <img src={avatar} alt="avatar" />
            </Link>
            <Link to="/">
              <div className={css.headerNavUserProfile}>
                <div className={css.headerNavUserProfileInfo}>
                  <span className={css.headerNavUserTitle}>Happy User</span>
                  <span className={css.headerNavUserSubTitle}>Loggy Fog</span>
                </div>
                <IconArrowDown className={css.headerNavUserProfileCaret} />
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HeaderNav;
