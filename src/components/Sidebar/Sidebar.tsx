import React from 'react';
import css from './Sidebar.module.scss';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as LeftArrowIcon } from '../../images/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/right-arrow.svg';
import { ReactComponent as SearchIcon } from '../../images/search.svg';

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <div className={css.sidebarTop}>
        <div className={css.sidebarLogo}>
          <LogoIcon className={css.sidebarLogoImg} />
        </div>
        <div className="toggle-menu-btn">
          <LeftArrowIcon />
        </div>
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
    </div>
  );
};

export default Sidebar;
