import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header';
import css from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Header />
      <div className={css.layoutContainer}>
        <Sidebar />
        <div className={css.layoutContent}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
