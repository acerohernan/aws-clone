import { IconProps } from './types';

const XMarkIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      focusable="false"
      aria-hidden="true"
      width={16}
      height={16}
      className={`${className ?? 'stroke-white'}`}
    >
      <path d="m2 2 12 12M14 2 2 14" fill="none" strokeWidth="2px" />
    </svg>
  );
};

export default XMarkIcon;
