import React from 'react';
import MenuMain from '../../components/MenuMain';
import Logo from '../../components/Logo';
import css from './Header.module.less';

const items = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Workspace',
    link: '/',
  },
  {
    title: 'Service',
    link: '/',
  },
  {
    title: 'Events',
    link: '/',
  },
  {
    title: 'Reviews',
    link: '/',
  },
  {
    title: 'Contact Us',
    link: '/',
  },
];

const Header: React.FC = () => {
  return (
    <div className={css.header}>
      <Logo />
      <MenuMain items={items} />
    </div>
  );
};

export default Header;
