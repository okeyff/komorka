import React, { useState } from 'react';
import clsx from 'clsx';
import css from './Sidebar.module.scss';
import Toggler from '../Toggler';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as SearchIcon } from '../../images/search.svg';

const Sidebar = () => {
  const [inactive, setInactive] = useState(false);

  return (
    <div className={clsx(css.sidebar, inactive && css.sidebar_inactive)}>
      <div className={css.sidebarTop}>
        <div className={css.sidebarLogo}>
          <LogoIcon className={css.sidebarLogoImg} />
        </div>
        <Toggler />
      </div>

      <div className={css.sidebarSearch}>
        <div>
          <button className={css.sidebarSearchButton}>
            <SearchIcon className={css.sidebarSearchIcon} />
          </button>
        </div>
        <input className={css.sidebarSearchInput} type="text" placeholder="search" />
      </div>

      <div className={css.sidebarDivider} />

      <div className={css.sidebarMainMenu}>
        <ul>
          <li>
            <a className={css.sidebarMainMenuItem} href="#">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
