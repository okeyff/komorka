import React from 'react';
import clsx from 'clsx';
import { MdSearch as IconSearch } from 'react-icons/md';
import css from './Search.module.scss';

interface Props {
  className?: string;
  placeholder?: string;
  icon?: boolean;
}

const Search: React.FC<Props> = ({ className, placeholder, icon }) => {
  return (
    <div className={clsx(className, css.search)}>
      <input type="text" placeholder={placeholder} className={css.searchInput} />
      {icon && <IconSearch className={css.searchIcon} />}
    </div>
  );
};

export default Search;
