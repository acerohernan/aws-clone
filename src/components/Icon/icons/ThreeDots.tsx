import { IconProps } from './types';

const ThreeDotsIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      focusable="false"
      aria-hidden="true"
      width={16}
      height={16}
      className={className ?? 'stroke-black-primary'}
    >
      <circle className="filled" cx={8} cy="2.5" r=".5" strokeWidth="2px" />
      <circle className="filled" cx={8} cy={8} r=".5" strokeWidth="2px" />
      <circle className="filled" cx={8} cy="13.5" r=".5" strokeWidth="2px" />
    </svg>
  );
};

export default ThreeDotsIcon;
