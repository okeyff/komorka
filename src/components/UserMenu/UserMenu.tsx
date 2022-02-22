import React from 'react';
import clsx from 'clsx';
import avatar from '../../images/UserAvatar.png';
import css from './UserMenu.module.scss';

interface Props {
  className?: string;
}

const UserMenu: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, css.userMenu)}>
      <div className={css.userMenuAvatar}>
        <img src={avatar} alt="avatar" className={css.userMenuAvatarImg} />
      </div>

      <div className={css.userMenuInfo}>
        <span className={css.userMenuTitle}>Happy User</span>
        <span className={css.userMenuSubtitle}>It's you</span>
      </div>
    </div>
  );
};

export default UserMenu;
