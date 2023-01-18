import { IconProps } from './types';

const InfoIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      aria-hidden="true"
      width={16}
      height={16}
      className={className || 'stroke-black-primary'}
    >
      <circle
        className="stroke-linejoin-round"
        cx={8}
        cy={8}
        r={7}
        fill="none"
        strokeWidth="2px"
      />
      <path d="M8 11V8H6" fill="none" strokeWidth="2px" />
      <path
        className="stroke-linejoin-round"
        d="M10 11H6"
        fill="none"
        strokeWidth="2px"
      />
      <path d="M7.99 5H8v.01h-.01z" fill="none" strokeWidth="2px" />
    </svg>
  );
};

export default InfoIcon;
