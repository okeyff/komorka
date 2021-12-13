import React from 'react';
import css from './MenuMain.module.less';

interface itemsArray {
  title: string;
  link: string;
}

interface Props {
  className?: string;
  items: itemsArray[];
}

const MenuMain: React.FC<Props> = ({ className, items }) => {
  return (
    <div className={className}>
      <nav className={css.headerNav}>
        <ul className={css.headerNavList}>
          {items.map((item) => (
            <li className={css.headerNavItem}>
              <a href={item.link} className={css.headerNavLink}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MenuMain;
