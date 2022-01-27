import React from 'react';
import css from './Search.module.scss';

interface Props {
  className?: string;
  placeholder?: string;
  icon?: React.ReactElement;
}

const Search: React.FC<Props> = ({ className, placeholder, icon }) => {
  return (
    <div className={className}>
      {icon && icon}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
