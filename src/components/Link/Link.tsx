import { PropsWithChildren } from 'react';

type Size = 'xs' | 'sm' | 'md';

interface Props extends PropsWithChildren {
  size?: Size;
  bold?: boolean;
  className?: string;
}

const Link: React.FC<Props> = ({ children, size, bold, className }) => {
  return (
    <span
      className={`text-${size ?? 'sm'}
      ${bold ? 'font-bold' : ''}
      text-skyblue-primary hover:underline cursor-pointer
      ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Link;
