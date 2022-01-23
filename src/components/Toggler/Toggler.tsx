import React from 'react';
import css from './Toggler.module.scss';

interface Props {
  onClick?: () => void;
}

const Toggler: React.FC<Props> = ({ onClick, children }) => {
  return (
    <div className={css.toggler} onClick={onClick}>
      {children}
    </div>
  );
};

export default Toggler;
