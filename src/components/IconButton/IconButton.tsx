import React from 'react';
import clsx from 'clsx';
import css from './IconButton.module.scss';

interface Props {
  className?: string;
}

const IconButton: React.FC<Props> = ({ className, children }) => {
  return <div className={clsx(css.iconButton, className)}>{children}</div>;
};

export default IconButton;
