import React from 'react';
import clsx from 'clsx';
import css from './MainMenu.module.scss';

interface PropsItem {
  title: string;
  link: string;
  icon?: React.ReactElement;
}

interface Props {
  className?: string;
  items: PropsItem[];
}

const MainMenu: React.FC<Props> = ({ className, items }) => {
  return (
    <>
      <ul className={clsx(className, css.mainMenu)}>
        {items.map((item) => {
          return (
            <li className={css.mainMenuItem}>
              {!!item.link ? (
                <a className={css.mainMenuLink} href={item.link}>
                  <span className={css.mainMenuIcon}>{!!item.icon && item.icon}</span>
                  <span className={css.mainMenuTitle}>{item.title}</span>
                </a>
              ) : (
                <>
                  <span className={css.mainMenuIcon}>{!!item.icon && item.icon}</span>
                  <span className={css.mainMenuTitle}>{item.title}</span>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MainMenu;
