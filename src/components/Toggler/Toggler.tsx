import React from 'react';
import { ReactComponent as LeftArrowIcon } from '../../images/left-arrow.svg';
import { ReactComponent as RightArrowIcon } from '../../images/right-arrow.svg';
import css from './Toggler.module.scss';

const Toggler = () => {
  return (
    <div className={css.toggler}>
      <LeftArrowIcon />
    </div>
  );
};

export default Toggler;
