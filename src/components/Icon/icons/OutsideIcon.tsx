import React from 'react';
import { IconProps } from './types';

const OutsideIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-hidden="true"
      width={16}
      height={16}
      className={className || 'stroke-black-primary'}
    >
      <path
        className="stroke-linecap-square"
        d="M10 2h4v4"
        fill="none"
        strokeWidth="2px"
      />
      <path d="M6 10l8-8" fill="none" strokeWidth="2px" />
      <path
        className="stroke-linejoin-round"
        d="M14 9.048V14H2V2h5"
        fill="none"
        strokeWidth="2px"
      />
    </svg>
  );
};

export default OutsideIcon;
