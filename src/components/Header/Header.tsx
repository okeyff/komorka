import clsx from 'clsx';
import React, { useMemo } from 'react';
import { routes } from '../../routes';
import { useLocation, matchPath } from 'react-router-dom';
import HeaderNav from '../HeaderNav';
import css from './Header.module.scss';

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location],
  );

  return (
    <div className={clsx(css.header, className)}>
      <div className={css.headerContent}>
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
