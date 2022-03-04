import React from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import css from "./Logo.module.scss";

interface Props {
  className?: string;
  link?: string;
  icon: React.ReactNode;
}

const Logo: React.FC<Props> = ({ className, link, icon }) => {
  return (
    <div className={clsx(css.logo, className)}>
      {link ? <Link to={link}>{icon}</Link> : icon}
    </div>
  );
};

export default Logo;
