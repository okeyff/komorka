import React, { useState } from 'react';
import clsx from 'clsx';
import css from './Sidebar.module.scss';
import Toggler from '../Toggler';
import MainMenu from '../MainMenu';
import { ReactComponent as LeftArrowIcon } from '../../images/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/right-arrow.svg';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as DashboardIcon } from '../../images/dashboard-icon.svg';
import { ReactComponent as StorkStoreIcon } from '../../images/stork-store-icon.svg';
import { ReactComponent as ProductsIcon } from '../../images/products-icon.svg';
import { ReactComponent as DigitalCatalogsIcon } from '../../images/digital-catalogs-icon.svg';
import { ReactComponent as StorkMarketIcon } from '../../images/stork-market-icon.svg';
import { ReactComponent as SettingsIcon } from '../../images/settings-icon.svg';

const Sidebar = () => {
  const [inactive, setInactive] = useState(false);

  const items = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: <DashboardIcon />,
    },
    {
      title: 'Stork Store',
      link: '/stork-store',
      icon: <StorkStoreIcon />,
    },
    {
      title: 'Products',
      link: '/products',
      icon: <ProductsIcon />,
    },
    {
      title: 'Digital Catalogs',
      link: '/digital-catalogs',
      icon: <DigitalCatalogsIcon />,
    },
    {
      title: 'Stork Market',
      link: '/stork-market',
      icon: <StorkMarketIcon />,
    },
  ];

  return (
    <div className={clsx(css.sidebar, inactive && css.sidebar_inactive)}>
      <div className={css.sidebarTop}>
        <div className={css.sidebarLogo}>
          <LogoIcon className={css.sidebarLogoImg} />
        </div>

        <Toggler
          onClick={() => {
            setInactive(!inactive);
          }}>
          {inactive ? <RightArrowIcon /> : <LeftArrowIcon />}
        </Toggler>
      </div>

      <div className={css.sidebarMenu}>
        <MainMenu items={items} />
      </div>

      <div className={css.sidebarFooter}>
        <button className={css.sidebarFooterButton}>
          <SettingsIcon className={css.sidebarFooterButtonIcon} />
          Settings
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
