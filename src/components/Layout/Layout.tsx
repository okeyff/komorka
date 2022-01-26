import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import css from './Layout.module.scss';

const Layout = () => {
  return (
    <div className={css.layout}>
      <Sidebar />
      <div className={css.layoutContent}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
