import React from "react";
import clsx from "clsx";
import css from "./NotificationLabel.module.scss";

interface Props {
  className?: string;
  count: number;
  color?: 'orange' | 'gray' | 'green' | 'blue';
  placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

const NotificationLabel: React.FC<Props> = ({
  className,
  count,
  color,
  placement,
}) => {
  return (
    <div
      className={clsx(
        css.notificationLabel,
        className,
        placement ? css[`notificationLabel_${placement}`] : "",
        color ? css[`notificationLabel_${color}`] : ""
      )}
    >
      {count}
    </div>
  );
};

export default NotificationLabel;
