import React from 'react';
import { IconProps } from './types';

const DragIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      focusable="false"
      touch-action="manipulation"
      className={className ?? 'stroke-black-primary'}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1H5V3H7V1ZM11 1H9V3H11V1ZM5 5H7V7H5V5ZM11 5H9V7H11V5ZM5 9H7V11H5V9ZM11 9H9V11H11V9ZM5 13H7V15H5V13ZM11 13H9V15H11V13Z"
        className="fillGrey-2-1-29"
        fill="#879596"
      />
    </svg>
  );
};

export default DragIcon;
