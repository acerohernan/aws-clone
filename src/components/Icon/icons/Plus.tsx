import { IconProps } from './types';

const PlusIcon: React.FC<IconProps> = ({ className }) => {
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
      <path d="M8 1v14M15 8H1" fill="none" strokeWidth="2px" />
    </svg>
  );
};

export default PlusIcon;
